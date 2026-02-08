
import React from 'react';

interface LayoutSectionProps {
  title: string;
  children: React.ReactNode;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ title, children }) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 last:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 md:mb-20">
          <div className="flex items-center gap-4">
             <div className="w-4 h-8 bg-brand-primary"></div>
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-brand-primary whitespace-nowrap">
               {title}
             </h2>
          </div>
          <div className="flex-grow h-px bg-brand-accent opacity-30"></div>
          <div className="hidden sm:flex gap-1">
             <div className="w-1 h-1 bg-brand-accent"></div>
             <div className="w-1 h-1 bg-brand-accent"></div>
             <div className="w-1 h-1 bg-brand-accent"></div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default LayoutSection;
