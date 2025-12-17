import React, { useState, useEffect } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, ExternalLink,
  Code, Layout, Smartphone, Globe, ArrowRight,
  ChevronUp, Layers, Zap, CheckCircle, Database,
  Cpu, PenTool, Search, Sparkles, Terminal
} from 'lucide-react';

// --- Data & Content ---

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  { name: 'React', icon: <Code size={16} /> },
  { name: 'TypeScript', icon: <Cpu size={16} /> },
  { name: 'Tailwind CSS', icon: <Layout size={16} /> },
  { name: 'Node.js', icon: <Database size={16} /> },
  { name: 'Next.js', icon: <Globe size={16} /> },
  { name: 'UI/UX Design', icon: <PenTool size={16} /> },
  { name: 'SEO', icon: <Search size={16} /> },
  { name: 'Responsive', icon: <Smartphone size={16} /> },
];

const PROCESS_STEPS = [
  {
    title: 'Discover',
    desc: 'Understanding your business goals, target audience, and unique requirements.',
    icon: <Search className="text-violet-600" size={32} />
  },
  {
    title: 'Design',
    desc: 'Creating wireframes that align with your brand identity.',
    icon: <Layout className="text-violet-600" size={32} />
  },
  {
    title: 'Develop',
    desc: 'Writing clean, semantic, and performant code to bring the design to life.',
    icon: <Code className="text-violet-600" size={32} />
  },
  {
    title: 'Deploy',
    desc: 'Testing across devices, optimizing speed, and deploying the live site.',
    icon: <Zap className="text-violet-600" size={32} />
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'UAAP Sports Platform',
    category: 'Business',
    image: '/images/UAAP.png',
    description: 'A high-performance sports platform focused on user experience and interaction',
    tech: ['React', 'Next.js', 'Netlify'],
    link: 'https://uaap-platform.netlify.app/sports/basketball',
    featured: true
  },
  {
    id: 2,
    title: 'ComponentCore',
    category: 'E-commerce',
    image: '/images/CC.png',
    description: 'High-performance computer e-commerce store with an interactive PC Builder feature.',
    tech: ['HTML', 'TailwindCSS', 'Netlify'],
    link: 'https://componentcore.netlify.app',
    featured: true
  },
  {
    id: 3,
    title: 'MOVE 2025 Conference',
    category: 'Landing Pages',
    image: '/images/MOVE.png',
    description: 'A sleek landing page with smooth animations and engaging visuals for a youth conference event.',
    tech: ['HTML5', 'TailwindCSS', 'Netlify'],
    link: 'https://move2025-conference.netlify.app',
    featured: false
  },
  {
    id: 4,
    title: 'NOVA Dashboard',
    category: 'Educational',
    image: '/images/Dashboard.png',
    description: 'Dashboard web application for personal and everyday use.',
    tech: ['HTML', 'TailwindCSS', 'Netlify'],
    link: 'https://nova-app-dashboard.netlify.app',
    featured: false
  },
  {
    id: 5,
    title: 'Grace & Growth Blog',
    category: 'Personal',
    image: '/images/Blog.png',
    description: 'Real-time cryptocurrency price tracker using public APIs and dark mode UI.',
    tech: ['HTML', 'TailwindCSS', 'Netlify'],
    link: 'https://grace-growth-blog.netlify.app',
    featured: false
  },
  {
    id: 6,
    title: 'CyberGuardiansPH Pagbunga',
    category: 'Non-profit',
    image: '/images/CGPH.png',
    description: 'A landing page for the CyberGuardiansPH non-profit organization to promote cybersecurity awareness.',
    tech: ['HTML', 'TailwindCSS', 'Netlify'],
    link: 'https://cgph-pagbunga.netlify.app',
    featured: false
  }
];

const CATEGORIES = ['All', 'Business', 'Landing Pages', 'E-commerce', 'Educational', 'Personal', 'Non-profit'];

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-0.5 focus:ring-violet-500",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-violet-600 hover:text-violet-600 focus:ring-violet-500 bg-transparent",
    ghost: "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
      {title}
    </h2>
    <div className="h-1.5 w-24 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full mb-6"></div>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden h-56 bg-gray-100">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-violet-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white text-violet-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-violet-50"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-bold tracking-wider text-fuchsia-600 uppercase bg-fuchsia-50 px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
        {project.tech.map((tech, index) => (
          <span key={index} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  const featuredProjects = PROJECTS.filter(p => p.featured);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-fuchsia-200 selection:text-violet-900">
     
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer group"
              onClick={scrollToTop}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center mr-0.5 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">athan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">DevFolio</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button
                variant="primary"
                className="px-6 py-2.5 text-sm shadow-md shadow-violet-500/20"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-violet-600 p-2 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block w-full text-left px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-2">
                 <Button
                  variant="primary"
                  className="w-full justify-center py-4 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-violet-100 shadow-sm text-violet-700 text-sm font-semibold mb-8 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Available for new opportunities
            </div>
           
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Crafting Digital
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
                Masterpieces
              </span>
            </h1>
           
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              I transform ideas into high-quality web experiences.
              Specializing in <span className="text-gray-900 font-semibold">React</span>, <span className="text-gray-900 font-semibold">Design Systems</span>, and <span className="text-gray-900 font-semibold">Interactive UI</span>.
            </p>
           
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => scrollToSection('portfolio')} className="text-lg px-8 py-4">
                View My Work <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-4">
                Contact Me
              </Button>
            </div>

            {/* Stats/Social Proof (Optional Interaction) */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 border-t border-gray-100 pt-8 max-w-3xl mx-auto">
              {[
                { label: 'Years Exp.', value: '2+' },
                { label: 'Projects', value: '20+' },
                { label: 'Coffee', value: '∞' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Interactive Image */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              {/* Decorative shapes behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-200 to-fuchsia-100 rounded-full blur-3xl opacity-60"></div>
             
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Main Profile Image - Placeholder */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 group">
                  <img
                    src="/Nath2.jpg"
                    alt="Profile Placeholder"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
               
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                  <Terminal size={32} className="text-violet-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow animation-delay-1500">
                  <Code size={32} className="text-fuchsia-500" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wide mb-6">
                <Sparkles size={14} className="mr-2" /> About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                More than just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">clean code.</span>
              </h2>
             
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hello! I'm a passionate Full Stack Developer who bridges the gap between functional code and aesthetic design.
                </p>
                <p>
                  With a background in multimedia arts, I bring a unique perspective to web development. I don't just build websites; I build <span className="text-violet-700 font-semibold">digital experiences</span> that tell a story and engage users from the very first click.
                </p>
                <p>
                  When I'm not coding, you can find me writing, reading, or contributing to open-source projects.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-10">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">My Toolkit</h4>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 shadow-sm text-gray-600 hover:border-violet-300 hover:shadow-md hover:text-violet-600 transition-all cursor-default"
                    >
                      <span className="mr-2 text-gray-400 group-hover:text-violet-500 transition-colors">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Works"
            subtitle="A curation of projects that demonstrate my ability to bring your ideas to life!"
          />
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                 
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/30">
                    Featured
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="h-1 w-12 bg-fuchsia-500 rounded-full mb-4"></div>
                  </div>
                </div>
               
                <div className="p-8 flex-1 flex flex-col relative">
                  <p className="text-gray-600 mb-6 flex-1 text-lg leading-relaxed">{project.description}</p>
                 
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-semibold px-3 py-1 bg-violet-50 text-violet-700 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                 
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-violet-700 font-bold hover:text-fuchsia-600 transition-colors group/link">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Recent Projects"
            subtitle="Explore the full range of my work across various industries."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
         
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
              <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-fuchsia-900/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I believe in a collaborative, transparent process that keeps you involved at every stage of the development cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors h-full flex flex-col">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-all">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-violet-50 rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-20 relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's build something <br/> <span className="text-violet-600">extraordinary.</span></h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Whether you have a specific project in mind or just want to chat about the latest tech trends, I'm always open to new opportunities.
                </p>

                <div className="space-y-8">
                  <a href="mailto:its.nathaniel.macalinao@gmail.com" className="flex items-center group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-violet-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email Me</h4>
                      <p className="text-xl font-medium text-gray-900">its.nathaniel.macalinao@gmail.com</p>
                    </div>
                  </a>
                 
                  <div className="flex gap-4 pt-4">
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-violet-500 focus:bg-white outline-none transition-all font-medium"
                      placeholder="What's your name?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-violet-500 focus:bg-white outline-none transition-all font-medium"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-violet-500 focus:bg-white outline-none transition-all font-medium resize-none"
                      placeholder="Tell me about your goals..."
                      required
                    ></textarea>
                  </div>
                  <Button variant="primary" className="w-full py-4 text-lg shadow-xl shadow-violet-500/20">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="font-bold text-xl tracking-tight text-gray-900">Nathan's <span className="text-violet-600">DevFolio</span></span>
              <p className="text-gray-500 text-sm mt-1">Designed & Built with ❤️ in React</p>
            </div>
            <div className="text-sm text-gray-400">
              © 2025. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:bg-violet-600 transition-all duration-500 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>

      {/* Tailwind Animation Utilities */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>

    </div>
  );
}