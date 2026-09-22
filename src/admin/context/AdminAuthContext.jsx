import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminAuthContext = createContext();

// Default admin credentials preset
const DEFAULT_ADMIN = {
  name: 'Pranjal Gupta',
  email: 'admin@spartansfacility.com',
  role: 'Super Administrator',
  avatar: 'PG',
  phone: '+91-8299726346'
};

const DEFAULT_PASSWORD = 'admin123';

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('sfm_admin_token') === 'true';
  });

  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('sfm_admin_user');
    return saved ? JSON.parse(saved) : DEFAULT_ADMIN;
  });

  const [passwordHash, setPasswordHash] = useState(() => {
    return localStorage.getItem('sfm_admin_password') || DEFAULT_PASSWORD;
  });

  // Login Function with strict validation
  const login = (email, password) => {
    if (email.trim().toLowerCase() === adminUser.email.toLowerCase() && password === passwordHash) {
      setIsAuthenticated(true);
      localStorage.setItem('sfm_admin_token', 'true');
      localStorage.setItem('sfm_admin_user', JSON.stringify(adminUser));
      return { success: true };
    }
    return { success: false, message: 'Invalid official admin email or password. Please check your credentials.' };
  };

  // Logout Function
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('sfm_admin_token');
  };

  // Update Profile Function
  const updateProfile = (updatedData) => {
    const updated = { ...adminUser, ...updatedData };
    setAdminUser(updated);
    localStorage.setItem('sfm_admin_user', JSON.stringify(updated));
    return { success: true, message: 'Profile updated successfully!' };
  };

  // Change Password Function
  const changePassword = (oldPassword, newPassword) => {
    if (oldPassword !== passwordHash) {
      return { success: false, message: 'Current password does not match our records.' };
    }
    if (newPassword.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters long.' };
    }
    setPasswordHash(newPassword);
    localStorage.setItem('sfm_admin_password', newPassword);
    return { success: true, message: 'Password changed successfully! Please keep it secure.' };
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        adminUser,
        login,
        logout,
        updateProfile,
        changePassword,
        defaultCredentials: { email: 'admin@spartansfacility.com', password: 'admin123' }
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

// Protected Route Guard: If not logged in, force redirect to /admin/login
export function ProtectedAdminRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}

// Public Auth Route Guard: If ALREADY logged in, redirect to /admin/dashboard
export function PublicAdminRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}
