
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LayoutSection from './components/LayoutSection';
import ContentCard from './components/ContentCard';
import PlaceholderImage from './components/PlaceholderImage';
import MetaDataPanel from './components/MetaDataPanel';

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
          TOP FLOOR INDUSTRIES is an infrastructure development and materials manufacturing company specialising in crushing and screening services, asphalt production, chrome concentrate processing, and aggregate supply. We operate modern, high-capacity plant and equipment to deliver consistent material quality at scale — on time, to specification, and in the volumes your project demands.
        </p>
      </div>
    </div>

    <LayoutSection title="Core Services">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: 'crushing-screening', title: 'Crushing & Screening Services', desc: 'Professional crushing and screening for quarries, mines, and large-scale infrastructure projects. Mobile and fixed plant solutions sized to your operation.' },
          { id: 'asphalt-manufacturing', title: 'Asphalt Manufacturing', desc: 'Road-authority compliant asphalt production with custom mix capability. From national highways to municipal resurfacing, we manufacture to specification.' },
          { id: 'chrome-concentrate', title: 'Chrome Concentrate Production', desc: 'Beneficiation and processing of chrome ore into consistent, export-grade concentrate. Quality-controlled from feedstock to final product.' },
          { id: 'aggregate-production', title: 'Aggregate Supply (G1–G5)', desc: 'Graded aggregates for base, sub-base, and fill applications. Produced, tested, and delivered to civil engineering standards.' }
        ].map((s, idx) => (
          <div 
            key={s.id} 
            className={`p-8 hover:translate-y-[-4px] transition-all group flex flex-col cursor-pointer border-t-4 ${idx % 2 === 0 ? 'bg-brand-white border-brand-primary shadow-md' : 'bg-brand-muted border-brand-secondary shadow-sm'}`}
            onClick={() => setPage(s.id)}
          >
            <h3 className="text-brand-primary font-bold uppercase tracking-wider mb-4 h-12 flex items-center">{s.title}</h3>
            <p className={`text-base sm:text-xs leading-relaxed mb-6 flex-grow ${idx % 2 === 0 ? 'text-brand-secondary' : 'text-brand-primary'}`}>{s.desc}</p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary group-hover:pl-2 transition-all">→ Learn More</span>
          </div>
        ))}
      </div>
    </LayoutSection>

    <section className="bg-brand-primary py-24 px-4 md:px-6 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 border-8 border-brand-accent rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-brand-white uppercase tracking-widest mb-12 text-center">Why Choose TOP FLOOR INDUSTRIES</h2>
        <p className="text-center text-brand-accent mb-16 max-w-3xl mx-auto text-lg md:text-base">When the margin for error is measured in tonnes and the cost of delay is measured in contract penalties, you need a supply partner that delivers. Here is what sets us apart:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            'Modern, high-capacity plant and equipment built for sustained production runs',
            'Mobile and fixed crushing solutions deployable to remote or on-site locations',
            'Consistent material quality backed by grading and laboratory testing',
            'Reliable turnaround times — we plan around your project schedule, not ours',
            'Full compliance with industry, safety, and environmental standards',
            'Scalable supply capacity for projects ranging from local developments to national infrastructure'
          ].map((v, i) => (
            <div key={i} className="flex gap-4 items-start bg-brand-white/5 p-6 border border-brand-accent/20">
              <div className="w-8 h-8 bg-brand-accent shrink-0 flex items-center justify-center text-xs text-brand-primary font-bold">{i+1}</div>
              <p className="text-base md:text-sm font-semibold text-brand-white leading-snug">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LayoutSection title="Industries We Serve">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-secondary mb-12 text-center font-medium text-lg md:text-base">Our materials and services support a wide range of infrastructure and development sectors:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Road Construction', desc: 'national, provincial, and municipal road networks' },
            { title: 'Mining Operations', desc: 'haul roads, processing plant feed, and site infrastructure' },
            { title: 'Civil Infrastructure', desc: 'bridges, dams, bulk earthworks, and water reticulation' },
            { title: 'Municipal Development', desc: 'township roads, service delivery infrastructure, and public works' },
            { title: 'Commercial Developments', desc: 'retail parks, industrial estates, and residential complexes' }
          ].map(ind => (
            <div key={ind.title} className="flex flex-col border-l-4 border-brand-accent bg-brand-muted p-6 hover:border-brand-primary transition-all">
              <span className="text-base font-bold text-brand-primary uppercase tracking-widest">{ind.title}</span>
              <span className="text-sm text-brand-secondary mt-1">{ind.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </LayoutSection>

    <section className="bg-brand-primary py-24 px-4 md:px-6 text-brand-white text-center border-t-8 border-brand-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-6">Let’s build from the ground up.</h2>
        <p className="text-brand-accent mb-12 text-xl md:text-lg">Whether you need a bulk aggregate supplier, an on-site crushing partner, or a manufacturing solution for your next infrastructure project, we are ready to deliver. Get in touch to discuss your requirements.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button onClick={() => setPage('contact-us')} className="bg-brand-white text-brand-primary px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-muted transition-all border-b-4 border-brand-accent shadow-lg">Contact Us</button>
        </div>
      </div>
    </section>
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
          TOP FLOOR INDUSTRIES is an infrastructure development and materials manufacturing company operating across Southern Africa. Founded on the principle that reliable infrastructure begins with reliable materials, we have built our operations around the disciplines that matter most in heavy industry: precision, consistency, and delivery at scale.
        </p>
        <p className="text-base">
          Our core focus areas span crushing and screening services, asphalt manufacturing, chrome concentrate processing, and graded aggregate production. We operate both mobile and fixed plant, giving us the flexibility to service quarries, mining operations, and construction projects wherever they are located.
        </p>
        <p className="bg-brand-muted p-6 border border-brand-accent font-medium text-brand-primary text-base">
          We are not a company that trades on promises. We trade on performance. Every tonne we produce, every project we service, and every deadline we meet builds the operational track record that our clients depend on.
        </p>
      </div>
    </LayoutSection>

    <section className="bg-brand-muted py-24 px-4 md:px-6 border-y border-brand-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-brand-white p-12 border-l-8 border-brand-primary shadow-xl">
          <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-widest mb-6">Our Vision</h3>
          <p className="text-brand-secondary leading-relaxed border-t border-brand-muted pt-6 text-base">To be a leading provider of infrastructure materials and processing solutions in Southern Africa — recognised for operational excellence, consistent quality, and the ability to deliver at the scale that national development demands.</p>
        </div>
        <div className="bg-brand-white p-12 border-l-8 border-brand-secondary shadow-xl">
          <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-widest mb-6">Our Mission</h3>
          <p className="text-brand-secondary leading-relaxed border-t border-brand-muted pt-6 text-base">To deliver high-quality materials and services that support sustainable infrastructure development through efficient operations, advanced manufacturing processes, and an unwavering commitment to safety and environmental responsibility.</p>
        </div>
      </div>
    </section>

    <LayoutSection title="What Drives Us">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {[
          { title: 'Safety First', desc: 'Every operation begins and ends with safety. We maintain a zero-harm culture across all sites, with comprehensive safety protocols, ongoing training, and full compliance with occupational health and safety regulations.' },
          { title: 'Quality Assurance', desc: 'Our materials are produced to specification and graded to standard. We invest in testing, quality control processes, and plant maintenance to ensure consistency.' },
          { title: 'Reliability', desc: 'In infrastructure, delays cascade. We plan, resource, and operate to ensure that our commitments translate into consistent, on-time delivery — regardless of project scale.' },
          { title: 'Environmental Responsibility', desc: 'We recognise that our operations take place in natural environments and that we have a duty to minimise our impact.' },
          { title: 'Operational Excellence', desc: 'Efficiency is not a slogan — it is an economic necessity. We continuously assess our processes and invest in modern equipment.' }
        ].map(v => (
          <div key={v.title} className="flex flex-col bg-brand-white border border-brand-accent p-6 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-bold text-brand-primary uppercase tracking-widest text-sm mb-4 border-b-2 border-brand-accent pb-2">{v.title}</h4>
            <p className="text-base sm:text-xs text-brand-secondary leading-loose">{v.desc}</p>
          </div>
        ))}
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

    <LayoutSection title="Core Capabilities">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContentCard title="High-Capacity Production">
          Our plant is configured for continuous production runs. We manage the logistics of high-volume aggregate and asphalt supply for Tier-1 contractors and government bodies, ensuring stockpiles are maintained to meet peak demand periods.
        </ContentCard>
        <ContentCard title="Strategic Mobility">
          Our fleet of mobile crushing and screening units can be deployed rapidly to greenfield sites or existing operations. This reduces haulage costs and allows for the processing of on-site materials into engineering-grade products.
        </ContentCard>
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
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary border-b-2 border-brand-accent pb-2 mb-6">Regional Operations</h3>
            <p className="text-brand-secondary text-sm leading-relaxed">
              Southern Region: Cape Town Hub<br />
              Northern Region: Polokwane Site Office
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary border-b-2 border-brand-accent pb-2 mb-6">Digital Enquiries</h3>
            <p className="text-brand-secondary text-sm leading-relaxed">
              Tenders: tender@topfloorindustries.com<br />
              Logistics: transport@topfloorindustries.com
            </p>
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
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Company</label>
                <div className="w-full h-12 bg-brand-white border border-brand-accent px-4 flex items-center text-xs text-brand-accent">Placeholder Input</div>
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Required Service</label>
                <div className="w-full h-12 bg-brand-white border border-brand-accent px-4 flex items-center text-xs text-brand-accent">Select Service Model...</div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Project Description</label>
                <div className="w-full h-32 bg-brand-white border border-brand-accent p-4 text-xs text-brand-accent">Outline project volumes and delivery timelines...</div>
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

// --- Page 5: Generic Service Detail ---
const ServiceDetailPage = ({ id }: { id: string }) => {
  const serviceMap: Record<string, any> = {
    'crushing-screening': { title: 'Crushing & Screening Services', subtitle: 'Mobile & Fixed Plant Processing' },
    'asphalt-manufacturing': { title: 'Asphalt Manufacturing', subtitle: 'HMA & Cold-Mix Solutions' },
    'chrome-concentrate': { title: 'Chrome Concentrate Production', subtitle: 'Mineral Processing & Beneficiation' },
    'aggregate-production': { title: 'Aggregate Supply (G1–G5)', subtitle: 'Sub-base & Road Construction Materials' },
    'services-overview': { title: 'Operational Overview', subtitle: 'Full Infrastructure Capability' },
  };

  const current = serviceMap[id] || serviceMap['services-overview'];

  return (
    <>
      <div className="bg-brand-primary py-16 text-brand-white border-b-8 border-brand-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">{current.title}</h1>
          <p className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">{current.subtitle}</p>
        </div>
      </div>
      
      <LayoutSection title="Service Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-tighter">High-Performance Output</h3>
            <p className="text-brand-secondary text-base leading-relaxed">
              We leverage the latest in industrial automation and heavy-duty processing equipment to ensure that every metric tonne produced meets the rigorous standards of modern infrastructure. Our quality control cycle is integrated into the production line, with regular material sampling and laboratory verification.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-brand-muted border-l-4 border-brand-accent">
                <span className="block text-2xl font-bold text-brand-primary">100%</span>
                <span className="text-[10px] font-bold uppercase text-brand-secondary">Compliance Rate</span>
              </div>
              <div className="p-4 bg-brand-muted border-l-4 border-brand-accent">
                <span className="block text-2xl font-bold text-brand-primary">24/7</span>
                <span className="text-[10px] font-bold uppercase text-brand-secondary">Production Capability</span>
              </div>
            </div>
          </div>
          <PlaceholderImage height="h-[500px]" label={`${current.title} Asset`} />
        </div>
      </LayoutSection>
    </>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'about-us': return <AboutUsPage />;
      case 'projects-capabilities': return <ProjectsPage />;
      case 'contact-us': return <ContactPage />;
      case 'services-overview':
      case 'crushing-screening':
      case 'asphalt-manufacturing':
      case 'chrome-concentrate':
      case 'aggregate-production':
        return <ServiceDetailPage id={currentPage} />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      <Header setPage={setCurrentPage} currentPage={currentPage} />
      
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
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-accent/30 pb-2">Menu</h4>
             <ul className="space-y-3 text-sm md:text-xs uppercase tracking-widest font-semibold">
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => setCurrentPage('home')}>Home</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => setCurrentPage('about-us')}>About</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => setCurrentPage('services-overview')}>Services</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => setCurrentPage('projects-capabilities')}>Projects</li>
                <li className="cursor-pointer hover:text-brand-accent transition-colors" onClick={() => setCurrentPage('contact-us')}>Contact</li>
             </ul>
          </div>
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-accent/30 pb-2">Stay Connected</h4>
             <p className="text-sm md:text-xs text-brand-accent mb-4">Receive industrial insights and quarterly updates.</p>
             <div className="flex border-b-2 border-brand-accent pb-2 mt-4">
                <input type="email" placeholder="Email Address" className="bg-transparent text-sm md:text-xs w-full outline-none text-brand-white placeholder:text-brand-secondary" />
                <button className="text-[10px] font-bold uppercase text-brand-accent hover:text-brand-white transition-colors">Join</button>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-accent text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; 2026 TOP FLOOR INDUSTRIES. All Rights Reserved. ISO 9001:2015.
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] uppercase tracking-widest text-brand-secondary">
            <span className="cursor-pointer hover:text-white transition-colors">Safety Portal</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Supply</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
