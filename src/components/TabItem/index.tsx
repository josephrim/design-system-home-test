import React from 'react';
import './TabItem.scss';
import Badge from '@/components/Badge';

export interface TabItemProps {
  label: string;
  isSelected: boolean;
  variant: 'pill' | 'underline';
  badge?: { label: string; variant: 'neutral' | 'positive' | 'negative' };
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({
  label,
  isSelected,
  variant,
  badge,
  onClick,
}) => {
  return (
    <button
      className={`tab-item ${variant} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      aria-selected={isSelected}
    >
      <div className="tab-item-content">
        {label}
        {badge && (
          <span className="tab-badge">
            <Badge variant={badge.variant} label={badge.label} />
          </span>
        )}
      </div>
    </button>
  );
};

export default TabItem;
