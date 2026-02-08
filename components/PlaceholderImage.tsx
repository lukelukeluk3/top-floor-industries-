
import React from 'react';

interface PlaceholderImageProps {
  height?: string;
  label?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  height = 'h-64', 
  label = 'Asset Image' 
}) => {
  return (
    <div className={`${height} w-full bg-brand-muted relative flex flex-col items-center justify-center overflow-hidden border border-brand-accent shadow-inner`}>
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #b0b4bd 25%, transparent 25%, transparent 75%, #b0b4bd 75%, #b0b4bd), linear-gradient(45deg, #b0b4bd 25%, transparent 25%, transparent 75%, #b0b4bd 75%, #b0b4bd)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="bg-brand-primary p-4 border border-brand-accent shadow-md z-10 transform -rotate-1 group-hover:rotate-0 transition-transform">
        <div className="text-brand-white font-bold text-[10px] uppercase tracking-[0.3em] mb-1">
            Status: Rendering
        </div>
        <div className="text-brand-accent font-semibold text-xs uppercase tracking-widest text-center">
            {label}
        </div>
      </div>

      {/* Technical crosshairs */}
      <div className="absolute top-0 left-1/2 w-px h-8 bg-brand-accent opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-px h-8 bg-brand-accent opacity-30 -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 h-px w-8 bg-brand-accent opacity-30 -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 h-px w-8 bg-brand-accent opacity-30 -translate-y-1/2"></div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-primary"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-primary"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-primary"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-primary"></div>
    </div>
  );
};

export default PlaceholderImage;
