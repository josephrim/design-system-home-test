import React from 'react';
import './Badge.scss';

interface BadgeProps {
  variant: 'neutral' | 'positive' | 'negative';
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, label }) => {
  return <span className={`badge badge-${variant}`}>{label}</span>;
};

export default Badge;
