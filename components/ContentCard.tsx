
import React from 'react';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
  return (
    <div className="bg-brand-white border-2 border-brand-accent p-8 hover:border-brand-primary hover:bg-brand-muted/10 transition-all group relative overflow-hidden">
      {/* Decorative accent top-right */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-brand-accent/10 -translate-y-6 translate-x-6 rotate-45 group-hover:bg-brand-primary/10 transition-colors"></div>
      
      <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6 flex items-center gap-3">
        <span className="w-6 h-[3px] bg-brand-primary group-hover:w-10 transition-all"></span>
        {title}
      </h3>
      <div className="text-brand-secondary leading-relaxed border-l-2 border-brand-muted pl-4 group-hover:border-brand-accent transition-colors">
        {children}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-muted"></div>
        </div>
        <span className="text-[10px] font-bold uppercase text-brand-secondary group-hover:text-brand-primary cursor-pointer transition-colors bg-brand-muted px-3 py-1 border border-brand-accent">
          View Protocol +
        </span>
      </div>
    </div>
  );
};

export default ContentCard;
