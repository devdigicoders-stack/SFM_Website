import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

export default function SfmLogo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-10 max-h-10',
    md: 'h-14 max-h-14',
    lg: 'h-20 max-h-20'
  };

  const selectedClass = sizeClasses[size] || sizeClasses.md;

  return (
    <Link to="/" className={`inline-flex items-center group shrink-0 select-none ${className}`}>
      <img
        src={logoImg}
        alt="Spartans Facility Management"
        className={`${selectedClass} w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-105`}
      />
    </Link>
  );
}
