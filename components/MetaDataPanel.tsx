
import React from 'react';

const MetaDataPanel: React.FC = () => {
  const metadata = [
    { label: 'Document Type', value: 'Strategic Brief' },
    { label: 'Status', value: 'For Development', highlight: true },
    { label: 'Classification', value: 'Confidential' },
    { label: 'Date', value: 'February 2026' },
  ];

  return (
    <div className="bg-brand-white border border-brand-accent p-8 shadow-2xl relative overflow-hidden group">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#3b4858 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
      </div>
      
      {/* Decorative side bar */}
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary group-hover:bg-brand-accent transition-colors"></div>
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 bg-brand-primary animate-pulse"></div>
        <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-primary">
          Document Control Panel
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-y-10 gap-x-6">
        {metadata.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1 border-l-2 border-brand-muted pl-5 hover:border-brand-accent transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
              {item.label}
            </span>
            <span className={`text-sm font-bold uppercase tracking-tighter ${item.highlight ? 'text-brand-primary bg-brand-muted px-2 py-0.5 rounded-sm' : 'text-brand-secondary'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t-2 border-brand-muted flex justify-between items-center">
        <span className="text-[9px] text-brand-accent font-bold uppercase tracking-widest">
          Ref: TFI-STRAT-2026-X01
        </span>
        <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-4 h-1.5 transition-colors ${i === 1 ? 'bg-brand-primary' : 'bg-brand-accent/30'}`}></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MetaDataPanel;
