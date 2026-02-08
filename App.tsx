
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import LayoutSection from './components/LayoutSection.tsx';
import ContentCard from './components/ContentCard.tsx';
import PlaceholderImage from './components/PlaceholderImage.tsx';
import MetaDataPanel from './components/MetaDataPanel.tsx';

// --- Page 1: Home ---
const HomePage = ({ setPage }: { setPage: (p: string) => void }) => (
  <>
    <section className="bg-brand-primary py-20 md:py-32 px-4 md:px-6 relative overflow-hidden border-b-8 border-brand-accent">
      <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <div className="mb-6 inline-block bg-brand-accent/20 px-4 py-1 border-l-4 border-brand-accent">
             <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Engineering Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-white leading-tight uppercase tracking-tighter">
            Infrastructure Materials. <br />Engineered for Performance.
          </h1>
          <p className="mt-8 text-xl md:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Crushing, screening, and manufacturing solutions for quarries, mines, and road networks across Southern Africa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => setPage('contact-us')} className="bg-brand-white text-brand-primary px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-muted transition-all shadow-lg border-b-4 border-brand-accent">
              Request a Quote
            </button>
            <button onClick={() => setPage('projects-capabilities')} className="border-2 border-brand-accent text-brand-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-white/10 transition-all">
              View Our Capabilities
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2">
           <MetaDataPanel />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-accent opacity-5 -skew-x-12 translate-x-1/2"></div>
    </section>

    <div className="bg-brand-muted border-b border-brand-accent py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-brand-primary text-lg md:text-lg leading-relaxed font-medium">
          TOP FLOOR INDUSTRIES is an infrastructure development and materials manufacturing company specialising in crushing and screening services, asphalt production, chrome concentrate processing, and aggregate supply. We operate modern, high-capacity plant and equipment to deliver consistent material quality at scale.
        </p>
      </div>
    </div>

    <LayoutSection title="Core Services">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: 'crushing-screening', title: 'Crushing & Screening Services', desc: 'Professional crushing and screening for quarries, mines, and large-scale infrastructure projects. Mobile and fixed plant solutions.' },
          { id: 'asphalt-manufacturing', title: 'Asphalt Manufacturing', desc: 'Road-authority compliant asphalt production with custom mix capability. From national highways to municipal resurfacing.' },
          { id: 'chrome-concentrate', title: 'Chrome Concentrate Production', desc: 'Beneficiation and processing of chrome ore into consistent, export-grade concentrate. Quality-controlled from feedstock to product.' },
          { id: 'aggregate-production', title: 'Aggregate Supply (G1–G5)', desc: 'Manufacturing of graded stone and sand aggregates for civil construction. All materials are laboratory tested for grading and durability compliance.' }
        ].map((s, idx) => (
          <div 
            key={s.id} 
            className={`p-8 hover:translate-y-[-4px] transition-all group flex flex-col cursor-pointer border-t-4 ${idx % 2 === 0 ? 'bg-brand-white border-brand-primary shadow-md' : 'bg-brand-muted border-brand-secondary shadow-sm'}`}
            onClick={() => setPage(s.id)}
          >
            <h3 className="text-brand-primary font-bold uppercase tracking-wider mb-4 h-12 flex items-center">{s.title}</h3>
            <p className={`text-sm leading-relaxed mb-6 flex-grow ${idx % 2 === 0 ? 'text-brand-secondary' : 'text-brand-primary'}`}>{s.desc}</p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary group-hover:pl-2 transition-all">→ Learn More</span>
          </div>
        ))}
      </div>
    </LayoutSection>
  </>
);

// --- Page 2: About Us ---
const AboutUsPage = () => (
  <>
    <div className="bg-brand-primary py-16 text-brand-white border-b-8 border-brand-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">About Us</h1>
            <div className="h-1.5 w-24 bg-brand-accent"></div>
        </div>
    </div>
    
    <LayoutSection title="Company Overview">
      <div className="max-w-4xl mx-auto space-y-8 text-brand-secondary leading-loose">
        <p className="text-xl font-bold text-brand-primary leading-snug border-l-4 border-brand-accent pl-6 bg-brand-muted/50 py-4">
          TOP FLOOR INDUSTRIES is an infrastructure development and materials manufacturing company operating across Southern Africa. Founded on the principle that reliable infrastructure begins with reliable materials.
        </p>
        <p className="text-base">
          Our core focus areas span crushing and screening services, asphalt manufacturing, chrome concentrate processing, and graded aggregate production. We operate both mobile and fixed plant, giving us the flexibility to service quarries and mining operations wherever they are located.
        </p>
      </div>
    </LayoutSection>
  </>
);

// --- Page 3: Projects & Capabilities ---
const ProjectsPage = () => (
  <>
    <div className="bg-brand-primary py-16 text-brand-white border-b-8 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Projects & Capabilities</h1>
        <div className="h-1.5 w-24 bg-brand-accent"></div>
      </div>
    </div>
    
    <LayoutSection title="Delivery Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'National Highway Resurfacing', sector: 'Road Construction', label: 'Materials Supply' },
          { title: 'Mobile Crushing: Remote Mine Site', sector: 'Mining Infrastructure', label: 'On-site Services' },
          { title: 'Municipal Arterial Network', sector: 'Civil Infrastructure', label: 'Asphalt & Aggregates' },
          { title: 'Bulk Earthworks Aggregate', sector: 'Commercial Development', label: 'Graded Aggregate' },
          { title: 'Chrome Ore Processing Site', sector: 'Mining & Mineral', label: 'Beneficiation' },
          { title: 'Industrial Estate Logistics Road', sector: 'Logistics', label: 'Full Supply Chain' },
        ].map((proj, i) => (
          <div key={i} className="group">
            <PlaceholderImage height="h-64" label={proj.title} />
            <div className="mt-4 p-6 border-l-4 border-brand-primary bg-brand-muted">
              <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">{proj.sector}</span>
              <h3 className="text-lg font-bold text-brand-primary uppercase tracking-tight mt-1">{proj.title}</h3>
              <p className="text-xs text-brand-secondary mt-3 font-medium tracking-widest uppercase">{proj.label}</p>
            </div>
          </div>
        ))}
      </div>
    </LayoutSection>
  </>
);

// --- Page 4: Contact Us ---
const ContactPage = () => (
  <>
    <div className="bg-brand-primary py-16 text-brand-white border-b-8 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Contact Center</h1>
        <div className="h-1.5 w-24 bg-brand-accent"></div>
      </div>
    </div>
    
    <LayoutSection title="Get in Touch">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary border-b-2 border-brand-accent pb-2 mb-6">Head Office</h3>
            <p className="text-brand-secondary text-sm leading-relaxed">
              Top Floor Plaza, Suite 400<br />
              Industrial District East<br />
              Johannesburg, South Africa
            </p>
            <p className="text-brand-primary font-bold mt-4 text-sm">+27 (0) 11 555 0100</p>
          </div>
        </div>
        
        <div className="lg:col-span-3 bg-brand-muted p-10 border border-brand-accent shadow-xl">
          <h3 className="text-lg font-bold uppercase tracking-widest text-brand-primary mb-8">Request Project Quote</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Full Name</label>
                <div className="w-full h-12 bg-brand-white border border-brand-accent px-4 flex items-center text-xs text-brand-accent">Placeholder Input</div>
              </div>
            </div>
            <button className="w-full bg-brand-primary text-brand-white py-4 font-bold uppercase tracking-widest text-xs border-b-4 border-brand-accent hover:bg-brand-secondary transition-all">
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </LayoutSection>
  </>
);

// --- Component: Services Overview Content (Enhanced industrial cards) ---
const ServicesOverviewContent = ({ setPage }: { setPage: (p: string) => void }) => {
  const serviceCategories = [
    {
      id: 'crushing-screening',
      code: 'DIV-CS',
      title: 'Crushing & Screening Services',
      desc: 'Mobile and static crushing solutions for mining and heavy infrastructure. Our high-throughput fleet handles primary, secondary, and tertiary processing requirements.',
      tags: ['Mobile Plant', 'Jaw/Cone', 'Quarrying'],
      metric: '500+ Tonnes/hr'
    },
    {
      id: 'asphalt-manufacturing',
      code: 'DIV-AM',
      title: 'Asphalt Manufacturing',
      desc: 'Sourcing and production of high-grade Hot Mix Asphalt (HMA) and specialized road-surfacing materials tailored for national and municipal specifications.',
      tags: ['HMA Production', 'Mix Design', 'Roads'],
      metric: 'ISO Certified'
    },
    {
      id: 'chrome-concentrate',
      code: 'DIV-CC',
      title: 'Chrome Concentrate Production',
      desc: 'Expert mineral processing and beneficiation services. We specialize in converting chrome ore into high-yield concentrate for export and smelting markets.',
      tags: ['Beneficiation', 'Mining', 'Processing'],
      metric: 'Export Grade'
    },
    {
      id: 'aggregate-production',
      code: 'DIV-AP',
      title: 'Aggregate Supply (G1–G5)',
      desc: 'Manufacturing of graded stone and sand aggregates for civil construction. All materials are laboratory tested for grading and durability compliance.',
      tags: ['Graded Stones', 'Civil Works', 'Lab Tested'],
      metric: 'G1-G5 Standards'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {serviceCategories.map((service, idx) => (
          <div 
            key={service.id} 
            onClick={() => setPage(service.id)}
            className="bg-brand-white border-2 border-brand-accent p-8 relative group cursor-pointer hover:border-brand-primary transition-all shadow-sm hover:shadow-2xl overflow-hidden"
          >
            {/* Technical Detail Corner */}
            <div className="absolute top-0 right-0 bg-brand-muted border-l-2 border-b-2 border-brand-accent px-4 py-2">
              <span className="text-[9px] font-bold text-brand-primary tracking-widest uppercase">{service.code}</span>
            </div>

            {/* Industrial Aesthetic Icon/Background */}
            <div className="absolute bottom-0 right-0 opacity-[0.05] -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none group-hover:scale-110 transition-transform">
               <span className="text-[14rem] font-bold uppercase tracking-tighter leading-none">{service.id.charAt(0)}</span>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-brand-primary"></div>
                <h3 className="text-xl font-bold text-brand-primary uppercase tracking-tight">{service.title}</h3>
              </div>
              
              <p className="text-brand-secondary text-sm leading-relaxed mb-10 flex-grow">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-brand-muted text-brand-secondary px-3 py-1 border border-brand-accent/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-brand-muted flex justify-between items-center">
                <div className="flex flex-col">
                   <span className="text-[8px] font-bold uppercase text-brand-accent tracking-[0.2em] mb-1">Operational Capacity</span>
                   <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{service.metric}</span>
                </div>
                <button className="bg-brand-primary text-brand-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest group-hover:bg-brand-secondary transition-all border-b-4 border-brand-accent">
                   Detailed View +
                </button>
              </div>
            </div>
            
            {/* Corner Bracket Accents */}
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-brand-accent group-hover:border-brand-primary transition-colors"></div>
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-brand-accent group-hover:border-brand-primary transition-colors"></div>
          </div>
        ))}
      </div>

      <div className="bg-brand-primary p-12 text-brand-white border-b-8 border-brand-accent relative">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
               <h3 className="text-2xl font-bold uppercase tracking-widest mb-2">Technical Consultancy</h3>
               <p className="text-brand-accent text-sm leading-relaxed">Our engineering team provides comprehensive material assessment and production planning for large-scale operations.</p>
            </div>
            <button onClick={() => setPage('contact-us')} className="shrink-0 bg-brand-white text-brand-primary px-10 py-4 font-bold uppercase tracking-widest text-xs border-b-4 border-brand-accent hover:bg-brand-muted transition-all">
               Speak to an Engineer
            </button>
         </div>
      </div>
    </>
  );
};

// --- Detailed Service Component: Crushing & Screening ---
const CrushingScreeningContent = () => (
  <>
    <LayoutSection title="Core Capabilities">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-brand-secondary leading-relaxed">
            TOP FLOOR INDUSTRIES provides end-to-end crushing and screening solutions for some of the most demanding infrastructure and mining projects in Southern Africa. Our fleet consists of state-of-the-art mobile and modular units.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Mobile Crushing Units', detail: 'Rapid-deployment Jaw and Cone crushers for on-site material processing.' },
              { title: 'Vibrating Screen Decks', detail: 'Multi-stage screening for precise particle size distribution to G1-G7 standards.' },
              { title: 'Bulk Stockpiling', detail: 'Automated conveyor systems for massive volume management.' },
              { title: 'Mineral Beneficiation', detail: 'Primary and secondary crushing for mining ore, optimized for downstream processing.' }
            ].map(cap => (
              <div key={cap.title} className="bg-brand-white p-5 border border-brand-accent/30 shadow-sm border-l-4 border-brand-primary">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">{cap.title}</h4>
                <p className="text-[11px] text-brand-secondary leading-relaxed">{cap.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <PlaceholderImage height="h-full min-h-[400px]" label="Primary Crusher Site" />
      </div>
    </LayoutSection>

    <div className="bg-brand-muted py-20 px-4 md:px-6 border-y border-brand-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-tighter text-brand-primary mb-12 flex items-center gap-4">
          <div className="w-2 h-6 bg-brand-primary"></div>
          Strategic Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Mining Operations', icon: 'M', desc: 'Processing of overburden and ore feed. We operate under strict MQA safety standards.' },
            { title: 'Road Infrastructure', icon: 'R', desc: 'Manufacturing of high-grade road stones and aggregates for highways.' },
            { title: 'Civil Construction', icon: 'C', desc: 'Custom aggregate mixes for dams and commercial foundations.' }
          ].map(app => (
            <div key={app.title} className="bg-brand-white p-8 border border-brand-accent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-4xl font-bold text-brand-muted group-hover:text-brand-accent/20 transition-colors">{app.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">{app.title}</h3>
              <p className="text-xs text-brand-secondary leading-loose">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <LayoutSection title="Process Workflow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-accent/30 -translate-y-1/2 z-0"></div>
        {[
          { step: '01', title: 'Site Assessment', desc: 'Geological analysis and logistical mapping.' },
          { step: '02', title: 'Mobilization', desc: 'Rapid deployment of modular circuits.' },
          { step: '03', title: 'Production & QC', desc: 'Continuous processing with lab testing.' },
          { step: '04', title: 'Load & Logistics', desc: 'Stockpile management and coordinated load-out.' }
        ].map((item, idx) => (
          <div key={item.step} className="bg-brand-white border border-brand-accent p-6 z-10 flex flex-col items-center text-center hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-brand-primary text-brand-white flex items-center justify-center font-bold text-lg mb-4 border-b-4 border-brand-accent">
              {item.step}
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">{item.title}</h4>
            <p className="text-[11px] text-brand-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </LayoutSection>
  </>
);

// --- Page 5: Generic Service Detail ---
const ServiceDetailPage = ({ id, setPage }: { id: string, setPage: (p: string) => void }) => {
  const serviceMap: Record<string, any> = {
    'crushing-screening': { 
        title: 'Crushing & Screening Services', 
        subtitle: 'High-Throughput Material Processing',
        detail: <CrushingScreeningContent />
    },
    'asphalt-manufacturing': { title: 'Asphalt Manufacturing', subtitle: 'HMA & Cold-Mix Solutions' },
    'chrome-concentrate': { title: 'Chrome Concentrate Production', subtitle: 'Mineral Processing & Beneficiation' },
    'aggregate-production': { title: 'Aggregate Supply (G1–G5)', subtitle: 'Sub-base & Road Construction Materials' },
    'services-overview': { 
        title: 'Our Divisions', 
        subtitle: 'Specialized Industrial Capability',
        detail: <ServicesOverviewContent setPage={setPage} />
    },
  };

  const current = serviceMap[id] || serviceMap['services-overview'];

  return (
    <>
      <div className="bg-brand-primary py-16 text-brand-white border-b-8 border-brand-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">{current.title}</h1>
          <p className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">{current.subtitle}</p>
        </div>
        <div className="absolute inset-0 opacity-10 flex items-center justify-end pointer-events-none">
            <div className="text-[12rem] font-bold uppercase select-none translate-x-1/4 translate-y-1/4">TFI</div>
        </div>
      </div>
      
      {current.detail ? current.detail : (
        <LayoutSection title="Technical Overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-tighter">Industrial Scale Output</h3>
              <p className="text-brand-secondary text-base leading-relaxed">
                We leverage the latest in industrial automation and heavy-duty processing equipment to ensure that every metric tonne produced meets the rigorous standards of modern infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-brand-muted border-l-4 border-brand-accent">
                  <span className="block text-2xl font-bold text-brand-primary">100%</span>
                  <span className="text-[10px] font-bold uppercase text-brand-secondary">Compliance</span>
                </div>
                <div className="p-4 bg-brand-muted border-l-4 border-brand-accent">
                  <span className="block text-2xl font-bold text-brand-primary">24/7</span>
                  <span className="text-[10px] font-bold uppercase text-brand-secondary">Operations</span>
                </div>
              </div>
            </div>
            <PlaceholderImage height="h-[500px]" label={`${current.title} Division`} />
          </div>
        </LayoutSection>
      )}
    </>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  const navigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={navigate} />;
      case 'about-us': return <AboutUsPage />;
      case 'projects-capabilities': return <ProjectsPage />;
      case 'contact-us': return <ContactPage />;
      case 'services-overview':
      case 'crushing-screening':
      case 'asphalt-manufacturing':
      case 'chrome-concentrate':
      case 'aggregate-production':
        return <ServiceDetailPage id={currentPage} setPage={navigate} />;
      default: return <HomePage setPage={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      <Header setPage={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="bg-brand-primary text-brand-white py-20 px-4 md:px-6 border-t-8 border-brand-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-brand-white border-l-4 border-brand-accent pl-4">TOP FLOOR INDUSTRIES</h2>
            <p className="text-brand-accent text-base md:text-sm leading-relaxed">Infrastructure Development & Materials Manufacturing. Leading precision engineering since 1998.</p>
          </div>
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-accent/30 pb-2">Navigation</h4>
             <ul className="space-y-3 text-sm md:text-xs uppercase tracking-widest font-semibold">
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => navigate('home')}>Home</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => navigate('about-us')}>About</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => navigate('services-overview')}>Services</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => navigate('projects-capabilities')}>Projects</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => navigate('contact-us')}>Contact</li>
             </ul>
          </div>
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-accent/30 pb-2">Inquiries</h4>
             <p className="text-sm md:text-xs text-brand-accent mb-4">Subscribe for technical bulletins and news.</p>
             <div className="flex border-b-2 border-brand-accent pb-2 mt-4">
                <input type="email" placeholder="Corporate Email" className="bg-transparent text-sm md:text-xs w-full outline-none text-brand-white placeholder:text-brand-secondary" />
                <button className="text-[10px] font-bold uppercase text-brand-accent hover:text-brand-white transition-colors">Join</button>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-accent text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; 2026 TOP FLOOR INDUSTRIES. ISO 9001:2015 Registered.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
