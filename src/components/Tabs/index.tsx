import React, { useState } from 'react';
import TabItem from '@/components/TabItem';
import './Tabs.scss';

export interface Tab {
  label: string;
  badge?: {
    label: string;
    variant: 'neutral' | 'positive' | 'negative';
  };
}

interface TabsProps {
  tabs: Tab[];
  variant: 'pill' | 'underline';
  initialActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, variant, initialActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <div className="tabs-container">
      <div className={`tabs-list ${variant}`}>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            label={tab.label}
            isSelected={activeTab === index}
            variant={variant}
            badge={tab.badge}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="tab-content">
        <p>Content for {tabs[activeTab].label} Tab</p>
      </div>
    </div>
  );
};

export default Tabs;
