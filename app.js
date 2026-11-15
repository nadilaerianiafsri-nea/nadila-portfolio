/* Nadila Portfolio — bilingual content and accessible interactions.
 * This file contains only public project information; no API keys or secrets.
 */
(() => {
  'use strict';

  const LINKEDIN = 'https://www.linkedin.com/in/nadila-eriani-afsri-a661a6403/';
  const PROJECTS = {
    sibapak: {
      name: 'SiBapak',
      url: 'https://sibapak.pocari.id/',
      tags: ['Web Platform', 'Collaboration', 'Public Information'],
    },
    library: {
      name: 'Library Portal',
      url: 'https://portalperpusriau.tech/',
      tags: ['Next.js', 'NestJS', 'MariaDB', 'Docker Compose', 'Linux VPS'],
    },
  };

  const translations = {
    en: {
      skip: 'Skip to content',
      navAbout: 'About', navWork: 'Projects', navExperience: 'Experience', navSkills: 'Expertise', navContact: 'Contact',
      status: 'Building, learning & collaborating',
      heroTitle: "Hi, I'm Nadila.<span class='line-break'></span><em>I build for people.</em>",
      heroIntro: "I'm <strong>Nadila Eriani Afsri</strong>, an Informatics Engineering student and Full-Stack Developer Intern working with web applications, Docker, and Linux server deployment.",
      seeWork: 'Explore my work', heroMeta: 'Full-Stack Development · Docker & VPS',
      stickerTitle: 'Building & learning', stickerSub: 'One meaningful project at a time.',
      stripTitle: 'Areas of focus',
      aboutEyebrow: '01 / About me', aboutTitle: "Curious by nature.<span class='line-break'></span>Purposeful in practice.",
      aboutP1: "I'm an <strong>Informatics Engineering student at Politeknik Caltex Riau</strong>, currently building practical experience through software development and an internship at Kementerian Hukum Riau.",
      aboutP2: 'I enjoy connecting accessible interfaces with backend services, working with databases, and understanding how applications run beyond a local development environment.',
      factEducation: 'Education', factLocation: 'Based in',
      workEyebrow: '02 / Selected projects', workTitle: "A closer look at<span class='line-break'></span>what I've worked on.",
      workIntro: 'Selected projects from academic collaboration and hands-on internship experience.',
      p1Label: 'PROJECT 01 / ACADEMIC COLLABORATION',
      p2Label: 'PROJECT 02 / INTERNSHIP',
      p1Desc: 'Sistem Informasi Posbankum Berdampak — a collaborative web platform supporting access to Posbankum-related information.',
      p2Desc: 'Full-stack development of the Kemenkum Riau Library Portal using Next.js, NestJS, and MariaDB; containerized with Docker Compose and deployed to a Linux VPS.',
      projectDetails: 'Explore project details',
      expEyebrow: '03 / Experience & education', expTitle: "Learning through<span class='line-break'></span>real experiences.",
      expIntro: 'From classroom foundations to contributing to real web applications.',
      expInternTitle: 'Full-Stack Developer Intern', internDate: 'Aug 2026 – Present · On-site',
      expInternText: 'Contributing to frontend and backend development, application deployment using Docker Compose and Linux VPS, and troubleshooting during internship projects.',
      expEduTitle: 'Informatics Engineering', eduDate: 'Aug 2023 – Present',
      expEduText: 'Diploma IV / Bachelor of Applied Science, applying software development knowledge through academic and collaborative projects.',
      skillsEyebrow: '04 / Areas of expertise', skillsTitle: "What I do<span class='line-break'></span>and keep learning.",
      skillsIntro: 'Practical skills from real work, with room to keep growing.',
      s1Text: 'Building responsive interfaces and user-facing experiences using Next.js and React.',
      s2Text: 'Integrating frontend, NestJS backend services, and MariaDB.',
      s3Text: 'Managing multi-service local environments with Docker Compose and deploying to a Linux VPS.',
      s4Title: 'Collaboration', s4Text: 'Learning through teamwork, practical problem solving, and project delivery.',
      contactEyebrow: '05 / Get in touch', contactTitle: "Let's build something<span class='line-break'></span>meaningful.",
      contactDesc: 'Interested in software development, collaboration, or sharing ideas? Feel free to connect.',
      connectLinkedIn: 'Connect on LinkedIn', copyProfile: 'Copy profile link', footerMade: 'Made with care.', backTop: 'Back to top ↑',
      modalEyebrow: 'Project overview', modalLink: 'Visit project website ↗',
      copied: 'LinkedIn profile link copied', copyFailed: 'Could not copy the link. Please open LinkedIn directly.',
      sibapakDetails: 'SiBapak (Sistem Informasi Posbankum Berdampak) is a web platform developed through academic collaboration with Kantor Wilayah Kementerian Hukum Riau. I participated in its development as a collaborative project. Specific responsibilities and technology choices are not presented as verified individual claims.',
      libraryDetails: 'The Kemenkum Riau Library Portal is a digital library web project developed during my internship. I contributed to frontend and backend work using Next.js, NestJS, and MariaDB, as well as Docker Compose containerization and deployment to a Linux VPS. The project card displays an actual screenshot of the public homepage. The source repository remains private.',
    },
    id: {
      skip: 'Lewati ke konten',
      navAbout: 'Tentang', navWork: 'Proyek', navExperience: 'Pengalaman', navSkills: 'Keahlian', navContact: 'Kontak',
      status: 'Terus membangun, belajar & berkolaborasi',
      heroTitle: "Halo, aku Nadila.<span class='line-break'></span><em>Membangun untuk manusia.</em>",
      heroIntro: 'Aku <strong>Nadila Eriani Afsri</strong>, mahasiswa Teknik Informatika dan Full-Stack Developer Intern yang mengerjakan aplikasi web, Docker, dan deployment server Linux.',
      seeWork: 'Lihat proyek saya', heroMeta: 'Full-Stack Development · Docker & VPS',
      stickerTitle: 'Terus berkarya & belajar', stickerSub: 'Satu proyek bermakna pada satu waktu.',
      stripTitle: 'Bidang yang ditekuni',
      aboutEyebrow: '01 / Tentang saya', aboutTitle: "Selalu ingin tahu.<span class='line-break'></span>Berkarya dengan tujuan.",
      aboutP1: 'Aku adalah <strong>mahasiswa Teknik Informatika di Politeknik Caltex Riau</strong> yang sedang menambah pengalaman pengembangan perangkat lunak melalui proyek dan magang di Kementerian Hukum Riau.',
      aboutP2: 'Aku senang menghubungkan antarmuka yang mudah digunakan dengan layanan backend, bekerja dengan database, dan memahami bagaimana aplikasi dijalankan di luar lingkungan lokal.',
      factEducation: 'Pendidikan', factLocation: 'Domisili',
      workEyebrow: '02 / Proyek pilihan', workTitle: 'Melihat lebih dekat<span class="line-break"></span>hasil pekerjaan saya.',
      workIntro: 'Proyek pilihan dari kolaborasi akademik dan pengalaman pengembangan selama magang.',
      p1Label: 'PROYEK 01 / KOLABORASI AKADEMIK',
      p2Label: 'PROYEK 02 / MAGANG',
      p1Desc: 'Sistem Informasi Posbankum Berdampak — platform web kolaboratif untuk mendukung akses informasi terkait Posbankum.',
      p2Desc: 'Pengembangan full-stack Portal Perpustakaan Kemenkum Riau dengan Next.js, NestJS, dan MariaDB; menggunakan Docker Compose dan deployment ke VPS Linux.',
      projectDetails: 'Lihat detail proyek',
      expEyebrow: '03 / Pengalaman & pendidikan', expTitle: 'Belajar dari<span class="line-break"></span>pengalaman nyata.',
      expIntro: 'Dari dasar perkuliahan hingga kontribusi dalam pengembangan aplikasi web nyata.',
      expInternTitle: 'Full-Stack Developer Intern', internDate: 'Agu 2026 – Sekarang · On-site',
      expInternText: 'Berkontribusi pada pengembangan frontend dan backend, deployment aplikasi menggunakan Docker Compose dan VPS Linux, serta troubleshooting selama magang.',
      expEduTitle: 'Teknik Informatika', eduDate: 'Agu 2023 – Sekarang',
      expEduText: 'Diploma IV / Sarjana Terapan, menerapkan pembelajaran pengembangan perangkat lunak melalui proyek akademik dan kolaboratif.',
      skillsEyebrow: '04 / Bidang keahlian', skillsTitle: 'Hal yang dikerjakan<span class="line-break"></span>dan terus dipelajari.',
      skillsIntro: 'Keahlian dari pengalaman praktik yang terus dikembangkan.',
      s1Text: 'Membangun antarmuka responsif menggunakan Next.js dan React.',
      s2Text: 'Mengintegrasikan frontend, backend NestJS, dan MariaDB.',
      s3Text: 'Mengelola lingkungan multi-service dengan Docker Compose dan melakukan deployment ke VPS Linux.',
      s4Title: 'Kolaborasi', s4Text: 'Belajar melalui kerja tim, pemecahan masalah, dan pengerjaan proyek.',
      contactEyebrow: '05 / Hubungi saya', contactTitle: 'Mari membangun sesuatu<span class="line-break"></span>yang bermanfaat.',
      contactDesc: 'Tertarik berdiskusi tentang pengembangan software, kolaborasi, atau berbagi ide? Mari terhubung.',
      connectLinkedIn: 'Hubungi lewat LinkedIn', copyProfile: 'Salin tautan profil', footerMade: 'Dibuat dengan sepenuh hati.', backTop: 'Kembali ke atas ↑',
      modalEyebrow: 'Ringkasan proyek', modalLink: 'Kunjungi website proyek ↗',
      copied: 'Tautan profil LinkedIn tersalin', copyFailed: 'Tautan gagal disalin. Silakan buka LinkedIn secara langsung.',
      sibapakDetails: 'SiBapak (Sistem Informasi Posbankum Berdampak) adalah platform web hasil kolaborasi akademik dengan Kantor Wilayah Kementerian Hukum Riau. Aku turut berkontribusi dalam proses pengembangannya. Detail kontribusi individu dan teknologi tidak diklaim sebagai fakta yang belum terverifikasi.',
      libraryDetails: 'Portal Perpustakaan Kemenkum Riau adalah proyek web perpustakaan digital dalam kegiatan magang. Aku berkontribusi pada pengembangan frontend dan backend menggunakan Next.js, NestJS, dan MariaDB, containerization dengan Docker Compose, serta deployment ke VPS Linux. Kartu proyek memakai screenshot asli landing page publik. Repository kode sumber tetap private.',
    }
  };

  const nav = document.getElementById('primaryNav');
  const menuBtn = document.getElementById('menuBtn');
  const modal = document.getElementById('projectModal');
  const toastBox = document.getElementById('toast');
  let lang = 'en';
  let currentProject = 'sibapak';
  let toastTimer;

  const escapeHtml = text => text.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  function closeMenu() {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
    document.body.classList.remove('menu-open');
  }
  menuBtn.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(opened));
    menuBtn.textContent = opened ? '×' : '☰';
    document.body.classList.toggle('menu-open', opened);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  function applyLanguage(next) {
    if (!translations[next]) return;
    lang = next;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = translations[lang][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const value = translations[lang][element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('[data-lang]').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (modal.open) showProject(currentProject);
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));

  function showProject(id) {
    if (!PROJECTS[id]) return;
    currentProject = id;
    const project = PROJECTS[id];
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalDescription').textContent = translations[lang][id === 'sibapak' ? 'sibapakDetails' : 'libraryDetails'];
    document.getElementById('modalTags').innerHTML = project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
    const link = document.createElement('a');
    link.className = 'button button-primary';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.href = project.url;
    link.textContent = translations[lang].modalLink;
    document.getElementById('modalAction').replaceChildren(link);
  }
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    showProject(button.dataset.project);
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  }));
  document.getElementById('closeModal').addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

  function toast(message) {
    toastBox.textContent = message;
    toastBox.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastBox.classList.remove('show'), 3000);
  }
  document.getElementById('copyLink').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(LINKEDIN);
      toast(translations[lang].copied);
    } catch {
      const field = document.createElement('textarea');
      field.value = LINKEDIN;
      field.style.position = 'fixed';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      toast(translations[lang][copied ? 'copied' : 'copyFailed']);
    }
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());
  applyLanguage('en');
})();
