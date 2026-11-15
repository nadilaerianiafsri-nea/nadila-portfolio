import { useEffect, useRef, useState } from 'react';

const LINKEDIN = 'https://www.linkedin.com/in/nadila-eriani-afsri-a661a6403/';
const IMAGE_ROOT = `${import.meta.env.BASE_URL}images/`;

const PROJECTS = [
  {
    id: 'sibapak',
    number: '01',
    name: 'SiBapak',
    image: `${IMAGE_ROOT}sibapak.png`,
    live: 'https://sibapak.pocari.id/',
    stack: ['Web platform', 'Collaboration', 'Public information'],
  },
  {
    id: 'library',
    number: '02',
    name: 'Library Portal',
    image: `${IMAGE_ROOT}library.png`,
    live: 'https://portalperpusriau.tech/',
    stack: ['Next.js', 'NestJS', 'MariaDB', 'Docker Compose'],
  },
];

const CONTENT = {
  en: {
    nav: { work: 'Work', about: 'About', experience: 'Experience', stack: 'Stack', contact: 'Contact' },
    contactButton: 'Get in touch',
    heroIndex: 'PERSONAL PORTFOLIO / 2026',
    greeting: "Hi, I'm Nadila.",
    heroAccent: 'I build for the web.',
    heroText: 'I’m a Full-Stack Developer Intern and Informatics Engineering student. I enjoy bringing interfaces, backend services, and deployment together into useful web applications.',
    explore: 'Explore selected work',
    linkedin: 'LinkedIn profile',
    location: 'Based in Pekanbaru, Indonesia',
    portraitCaption: 'Nadila Eriani Afsri',
    portraitSub: 'Full-Stack Developer Intern',
    workEyebrow: '01 / SELECTED WORK',
    workTitleA: 'Work that',
    workTitleB: 'speaks for itself.',
    workIntro: 'Two web projects developed through academic collaboration and an internship at Kementerian Hukum Riau.',
    projectCategory: { sibapak: 'Academic collaboration', library: 'Internship project' },
    projectDescription: {
      sibapak: 'Sistem Informasi Posbankum Berdampak — a collaborative web platform providing access to Posbankum-related information in Riau.',
      library: 'A digital library portal developed across frontend and backend, containerized with Docker Compose, and deployed to a Linux VPS.',
    },
    website: 'Visit website',
    enlarge: 'View screenshot',
    previewAlt: {
      sibapak: 'Screenshot of the SiBapak public web platform',
      library: 'Screenshot of the Kemenkum Riau Library Portal homepage',
    },
    aboutEyebrow: '02 / ABOUT ME',
    aboutTitleA: 'More than',
    aboutTitleB: 'just the interface.',
    aboutP1: 'I study Informatics Engineering at Politeknik Caltex Riau and gained practical experience through web projects at Kantor Wilayah Kementerian Hukum Riau.',
    aboutP2: 'My interests connect frontend development, backend systems, and deployment. I like understanding not only how a page looks, but how it works and how people can access it reliably.',
    aboutSideTitle: 'What I focus on',
    aboutFocus: ['Thoughtful user interfaces', 'Backend integration', 'Practical deployment'],
    experienceEyebrow: '03 / THE JOURNEY',
    experienceTitle: 'Experience & education',
    experienceIntro: 'Building a stronger foundation through real assignments and continuous learning.',
    internTitle: 'Full-Stack Developer Intern',
    internCompany: 'Kantor Wilayah Kementerian Hukum Riau',
    internDate: '2026 — Present',
    internDesc: 'Contributed to frontend and backend development for a library portal, Docker Compose environments, deployment to a Linux VPS, and troubleshooting.',
    eduTitle: 'Informatics Engineering',
    eduCompany: 'Politeknik Caltex Riau',
    eduDate: '2023 — Present',
    eduDesc: 'Applied software development skills through academic projects and teamwork.',
    stackEyebrow: '04 / TOOLS & TECHNOLOGIES',
    stackTitle: 'The tools behind the work.',
    stackIntro: 'Technologies used in projects and areas I continue to develop.',
    stackGroups: [
      { name: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'] },
      { name: 'Backend & Data', items: ['NestJS', 'REST APIs', 'MariaDB'] },
      { name: 'Development & Deployment', items: ['Docker', 'Docker Compose', 'Linux VPS', 'Git'] },
    ],
    contactEyebrow: '05 / CONTACT',
    contactA: 'Have something',
    contactB: 'in mind?',
    contactText: 'I’m always happy to connect, exchange ideas, and learn from opportunities in software development.',
    contactLink: 'Connect on LinkedIn',
    footerNote: 'Designed and developed with care.',
    backTop: 'Back to top',
    imageClose: 'Close image preview',
    imageDescription: 'Project screenshot. Open the live website to explore the full interface.',
    imageLive: 'Open live website',
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation',
  },
  id: {
    nav: { work: 'Proyek', about: 'Tentang', experience: 'Pengalaman', stack: 'Teknologi', contact: 'Kontak' },
    contactButton: 'Hubungi saya',
    heroIndex: 'PORTOFOLIO PRIBADI / 2026',
    greeting: 'Halo, aku Nadila.',
    heroAccent: 'Membangun untuk web.',
    heroText: 'Aku mahasiswa Teknik Informatika dan Full-Stack Developer Intern. Aku senang menggabungkan antarmuka, layanan backend, dan deployment menjadi aplikasi web yang bermanfaat.',
    explore: 'Lihat proyek pilihan',
    linkedin: 'Profil LinkedIn',
    location: 'Berdomisili di Pekanbaru, Indonesia',
    portraitCaption: 'Nadila Eriani Afsri',
    portraitSub: 'Full-Stack Developer Intern',
    workEyebrow: '01 / PROYEK PILIHAN',
    workTitleA: 'Hasil kerja',
    workTitleB: 'yang nyata.',
    workIntro: 'Dua proyek web yang dikembangkan melalui kolaborasi akademik dan pengalaman magang di Kementerian Hukum Riau.',
    projectCategory: { sibapak: 'Kolaborasi akademik', library: 'Proyek magang' },
    projectDescription: {
      sibapak: 'Sistem Informasi Posbankum Berdampak — platform web kolaboratif yang memudahkan akses informasi terkait Posbankum di Riau.',
      library: 'Portal perpustakaan digital yang dikembangkan dari sisi frontend dan backend, dijalankan dengan Docker Compose dan di-deploy ke VPS Linux.',
    },
    website: 'Kunjungi website',
    enlarge: 'Lihat screenshot',
    previewAlt: {
      sibapak: 'Screenshot antarmuka website publik SiBapak',
      library: 'Screenshot halaman utama Portal Perpustakaan Kemenkum Riau',
    },
    aboutEyebrow: '02 / TENTANG SAYA',
    aboutTitleA: 'Bukan hanya',
    aboutTitleB: 'tampilan.',
    aboutP1: 'Aku menempuh pendidikan Teknik Informatika di Politeknik Caltex Riau dan mendapatkan pengalaman langsung melalui proyek web di Kantor Wilayah Kementerian Hukum Riau.',
    aboutP2: 'Aku tertarik pada pengembangan frontend, sistem backend, dan deployment. Aku ingin memahami bukan hanya seperti apa tampilannya, tetapi juga bagaimana sistem bekerja dan dapat diakses dengan baik.',
    aboutSideTitle: 'Fokus yang terus dikembangkan',
    aboutFocus: ['Antarmuka yang mudah digunakan', 'Integrasi backend', 'Deployment yang praktis'],
    experienceEyebrow: '03 / PERJALANAN',
    experienceTitle: 'Pengalaman & pendidikan',
    experienceIntro: 'Mengembangkan kemampuan melalui tugas nyata dan proses belajar berkelanjutan.',
    internTitle: 'Full-Stack Developer Intern',
    internCompany: 'Kantor Wilayah Kementerian Hukum Riau',
    internDate: '2026 — Sekarang',
    internDesc: 'Berkontribusi pada pengembangan frontend dan backend portal perpustakaan, lingkungan Docker Compose, deployment ke VPS Linux, dan troubleshooting.',
    eduTitle: 'Teknik Informatika',
    eduCompany: 'Politeknik Caltex Riau',
    eduDate: '2023 — Sekarang',
    eduDesc: 'Menerapkan kemampuan pengembangan perangkat lunak melalui proyek kuliah dan kerja sama tim.',
    stackEyebrow: '04 / TOOLS & TEKNOLOGI',
    stackTitle: 'Teknologi di balik proyek.',
    stackIntro: 'Teknologi yang digunakan dalam proyek dan bidang yang terus aku pelajari.',
    stackGroups: [
      { name: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'] },
      { name: 'Backend & Data', items: ['NestJS', 'REST API', 'MariaDB'] },
      { name: 'Development & Deployment', items: ['Docker', 'Docker Compose', 'Linux VPS', 'Git'] },
    ],
    contactEyebrow: '05 / KONTAK',
    contactA: 'Ada ide yang',
    contactB: 'ingin dibahas?',
    contactText: 'Aku senang berdiskusi, bertukar ide, dan mempelajari peluang baru di bidang pengembangan perangkat lunak.',
    contactLink: 'Terhubung di LinkedIn',
    footerNote: 'Dirancang dan dikembangkan dengan sepenuh hati.',
    backTop: 'Kembali ke atas',
    imageClose: 'Tutup pratinjau gambar',
    imageDescription: 'Screenshot proyek. Buka website publik untuk melihat antarmuka secara langsung.',
    imageLive: 'Buka website',
    menuOpen: 'Buka navigasi',
    menuClose: 'Tutup navigasi',
  },
};

function Arrow({ diagonal = false, size = 17 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <><path d="M5 19 19 5" /><path d="M8 5h11v11" /></> : <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>}
    </svg>
  );
}

function SectionMark({ children }) {
  return <div className="section-mark">{children}</div>;
}

function ProjectCard({ project, t, onPreview }) {
  return (
    <article className={`project-card project-card--${project.id}`}>
      <button type="button" className="project-image-action" onClick={() => onPreview(project)} aria-label={`${t.enlarge}: ${project.name}`}>
        <div className="project-image-stage">
          <div className="browser-shell">
            <div className="browser-shell-bar"><span className="browser-lights"><i /><i /><i /></span><span>{new URL(project.live).hostname}</span><span className="browser-shell-dummy" /></div>
            <img src={project.image} alt={t.previewAlt[project.id]} loading="lazy" />
          </div>
        </div>
        <span className="preview-label">{t.enlarge} <Arrow diagonal size={14} /></span>
      </button>
      <div className="project-body">
        <div className="project-meta"><span>{project.number} / {t.projectCategory[project.id]}</span><span>2026</span></div>
        <h3>{project.name}<span className="project-dot">.</span></h3>
        <p>{t.projectDescription[project.id]}</p>
        <div className="project-bottom">
          <div className="project-stack" aria-label="Technologies and project focus">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a className="project-visit" href={project.live} target="_blank" rel="noopener noreferrer">{t.website} <Arrow diagonal size={16} /></a>
        </div>
      </div>
    </article>
  );
}

function ImagePreview({ project, t, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [onClose]);
  return (
    <div className="image-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="image-dialog" role="dialog" aria-modal="true" aria-labelledby="preview-title" aria-describedby="preview-desc">
        <div className="image-dialog-header">
          <div><span className="tiny-label">SELECTED WORK</span><h2 id="preview-title">{project.name}</h2></div>
          <button ref={closeRef} type="button" className="close-btn" onClick={onClose} aria-label={t.imageClose}>×</button>
        </div>
        <div className="image-dialog-image"><img src={project.image} alt={t.previewAlt[project.id]} /></div>
        <div className="image-dialog-bottom"><p id="preview-desc">{t.imageDescription}</p><a href={project.live} target="_blank" rel="noopener noreferrer">{t.imageLive} <Arrow diagonal size={15} /></a></div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const t = CONTENT[lang];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen); return () => document.body.classList.remove('menu-open'); }, [menuOpen]);
  const closePreview = () => setPreview(null);
  const navLinks = [
    ['#work', t.nav.work],
    ['#about', t.nav.about],
    ['#experience', t.nav.experience],
    ['#stack', t.nav.stack],
  ];

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-row">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)} aria-label="Nadila — home">nadila<span>.</span></a>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            {navLinks.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          </nav>
          <div className="header-controls">
            <div className="language-control" aria-label="Choose language">
              <button type="button" className={lang === 'en' ? 'current' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button><span aria-hidden="true">/</span><button type="button" className={lang === 'id' ? 'current' : ''} onClick={() => setLang('id')} aria-pressed={lang === 'id'}>ID</button>
            </div>
            <a className="header-contact" href="#contact">{t.contactButton}<Arrow diagonal size={14} /></a>
            <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? t.menuClose : t.menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : <><span /><span /></>}</button>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-square" />{t.heroIndex}</div>
            <h1 id="hero-heading"><span>{t.greeting}</span><em>{t.heroAccent}</em></h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-actions"><a className="primary-action" href="#work">{t.explore}<Arrow size={17} /></a><a className="text-action" href={LINKEDIN} target="_blank" rel="noopener noreferrer">{t.linkedin}<Arrow diagonal size={17} /></a></div>
            <p className="hero-location"><span className="small-location-dot" />{t.location}</p>
          </div>
          <div className="hero-photo-column">
            <div className="hero-photo-back" aria-hidden="true" />
            <div className="hero-photo-frame"><img src={`${IMAGE_ROOT}profile.png`} alt="Portrait of Nadila Eriani Afsri" fetchPriority="high" /></div>
            <div className="hero-photo-credit"><strong>{t.portraitCaption}</strong><span>{t.portraitSub}</span></div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading work-heading"><div><SectionMark>{t.workEyebrow}</SectionMark><h2 id="work-title">{t.workTitleA}<br /><em>{t.workTitleB}</em></h2></div><p>{t.workIntro}</p></div>
            <div className="project-grid">{PROJECTS.map(project => <ProjectCard key={project.id} project={project} t={t} onPreview={setPreview} />)}</div>
          </div>
        </section>

        <section className="about-section shell section-padding" id="about" aria-labelledby="about-title">
          <div className="about-heading"><SectionMark>{t.aboutEyebrow}</SectionMark><h2 id="about-title">{t.aboutTitleA}<br /><em>{t.aboutTitleB}</em></h2></div>
          <div className="about-text"><p className="about-lead">{t.aboutP1}</p><p>{t.aboutP2}</p><div className="about-principles"><span>{t.aboutSideTitle}</span>{t.aboutFocus.map((item, i) => <div key={item}><b>0{i+1}</b><span>{item}</span><Arrow diagonal size={14} /></div>)}</div></div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title"><div className="shell experience-layout">
          <div><SectionMark>{t.experienceEyebrow}</SectionMark><h2 id="experience-title">{t.experienceTitle}</h2><p className="experience-intro">{t.experienceIntro}</p></div>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-date">{t.internDate}</div><div className="timeline-content"><h3>{t.internTitle}</h3><p className="timeline-org">{t.internCompany}</p><p>{t.internDesc}</p></div></article>
            <article className="timeline-item"><div className="timeline-date">{t.eduDate}</div><div className="timeline-content"><h3>{t.eduTitle}</h3><p className="timeline-org">{t.eduCompany}</p><p>{t.eduDesc}</p></div></article>
          </div>
        </div></section>

        <section className="stack-section shell section-padding" id="stack" aria-labelledby="stack-title"><div className="stack-heading"><SectionMark>{t.stackEyebrow}</SectionMark><h2 id="stack-title">{t.stackTitle}</h2><p>{t.stackIntro}</p></div><div className="stack-list">{t.stackGroups.map((group, i) => <div className="stack-row" key={group.name}><span className="stack-counter">0{i+1}</span><h3>{group.name}</h3><div className="stack-tools">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout"><div><SectionMark>{t.contactEyebrow}</SectionMark><h2 id="contact-title">{t.contactA}<br /><em>{t.contactB}</em></h2></div><div className="contact-right"><p>{t.contactText}</p><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-big-link">{t.contactLink}<Arrow diagonal size={22} /></a></div></div></section>
      </main>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Nadila Eriani Afsri</span><span>{t.footerNote}</span><a href="#top">{t.backTop}<Arrow diagonal size={13} /></a></footer>
      {preview && <ImagePreview project={preview} t={t} onClose={closePreview} />}
    </>
  );
}
