
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, description, className, children }: PageHeaderProps) => {
  return (
    <div className={cn("py-8 md:py-12 border-b", className)}>
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-gray-600 mb-6 max-w-3xl">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
