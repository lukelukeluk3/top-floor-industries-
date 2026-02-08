
import React, { useState } from 'react';

interface HeaderProps {
  setPage: (p: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ setPage, currentPage }) => {
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (p: string) => currentPage === p 
    ? 'text-brand-primary border-b-4 border-brand-accent' 
    : 'text-brand-secondary hover:text-brand-primary hover:border-b-4 hover:border-brand-muted';

  const services = [
    { id: 'services-overview', label: 'Overview' },
    { id: 'crushing-screening', label: 'Crushing & Screening' },
    { id: 'asphalt-manufacturing', label: 'Asphalt Manufacturing' },
    { id: 'chrome-concentrate', label: 'Chrome Concentrate' },
    { id: 'aggregate-production', label: 'Aggregate Production' },
  ];

  const handleNav = (id: string) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    setShowServices(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-white border-b border-brand-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Branding Group */}
        <div className="flex items-center gap-3 md:gap-6 cursor-pointer group" onClick={() => handleNav('home')}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary flex items-center justify-center text-brand-white font-bold text-xl md:text-2xl shadow-lg shrink-0 border-b-4 border-brand-accent group-hover:bg-brand-secondary transition-colors">
            TF
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-lg md:text-2xl font-bold text-brand-primary tracking-tight leading-none uppercase truncate">
              Top Floor Industries
            </span>
            <span className="text-[10px] md:text-xs text-brand-secondary font-medium tracking-[0.2em] uppercase mt-1 truncate">
              Infrastructure & Manufacturing
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <button onClick={() => handleNav('home')} className={`text-xs font-bold tracking-widest uppercase transition-all h-full ${isActive('home')}`}>Home</button>
          <button onClick={() => handleNav('about-us')} className={`text-xs font-bold tracking-widest uppercase transition-all h-full ${isActive('about-us')}`}>About</button>
          
          <div className="relative group h-full flex items-center" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
            <button 
              className={`text-xs font-bold tracking-widest uppercase transition-all h-full flex items-center gap-1 ${currentPage.includes('service') ? 'text-brand-primary border-b-4 border-brand-accent' : 'text-brand-secondary hover:text-brand-primary'}`}
            >
              Services
              <svg className={`w-3 h-3 transition-transform ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {showServices && (
              <div className="absolute top-full left-0 w-64 bg-brand-white border-x border-b border-brand-accent shadow-2xl py-4 flex flex-col animate-in fade-in slide-in-from-top-2">
                {services.map(item => (
                  <button 
                    key={item.id} 
                    onClick={() => handleNav(item.id)}
                    className={`px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest transition-all ${currentPage === item.id ? 'bg-brand-muted text-brand-primary border-l-4 border-brand-primary' : 'text-brand-secondary hover:bg-brand-muted hover:text-brand-primary hover:border-l-4 hover:border-brand-accent'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => handleNav('projects-capabilities')} className={`text-xs font-bold tracking-widest uppercase transition-all h-full ${isActive('projects-capabilities')}`}>Projects</button>
          <button onClick={() => handleNav('contact-us')} className={`text-xs font-bold tracking-widest uppercase transition-all h-full ${isActive('contact-us')}`}>Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-primary p-2 focus:outline-none border-2 border-brand-accent"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
           <button onClick={() => handleNav('contact-us')} className="bg-brand-primary text-brand-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-md border-b-4 border-brand-accent">
             Tender Center
           </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-white pt-24 flex flex-col animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex-grow overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {['home', 'about-us', 'projects-capabilities', 'contact-us'].map(item => (
                <button 
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`text-lg font-bold uppercase tracking-[0.2em] text-left border-b-2 pb-4 ${currentPage === item ? 'text-brand-primary border-brand-accent' : 'text-brand-secondary border-brand-muted'}`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 border-t border-brand-accent bg-brand-muted">
            <button 
              onClick={() => handleNav('contact-us')}
              className="w-full bg-brand-primary text-brand-white py-4 font-bold uppercase tracking-widest text-xs border-b-4 border-brand-accent shadow-lg"
            >
              Contact Support Center
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
