const socialBrands = {
  linkedin: { type: 'social', id: 'linkedin', label: 'LinkedIn', background: '#0A66C2' },
  github: { type: 'social', id: 'github', label: 'GitHub', background: '#111827' },
};

const logoBrands = {
  wave: {
    type: 'image',
    label: 'Wave Solutions',
    src: 'https://logo.clearbit.com/wavesolutions.pt',
  },
  ipca: {
    type: 'image',
    label: 'Universidade Politécnica do Cávado e do Ave (IPCA)',
    src: 'https://logo.clearbit.com/ipca.pt',
  },
  ofp: {
    type: 'icon',
    id: 'hammer',
    label: 'OFP Carpintaria',
    background: 'linear-gradient(135deg, #7c5a3f 0%, #5b3d28 100%)',
  },
  sleico: {
    type: 'icon',
    id: 'factory',
    label: 'SLEICO, SAS',
    background: 'linear-gradient(135deg, #35536f 0%, #223548 100%)',
  },
  chalet: {
    type: 'image',
    label: 'Hotel Chalet Mounier',
    src: 'https://logo.clearbit.com/chalet-mounier.com',
  },
  ceramica: {
    type: 'icon',
    id: 'layers',
    label: 'Cerâmica Laurindo Lopes',
    background: 'linear-gradient(135deg, #8a5a45 0%, #63392c 100%)',
  },
};

export const uiCopy = {
  nav: {
    portfolio: { pt: 'CV Interativo', en: 'Interactive CV' },
    overview: { pt: 'Início', en: 'Overview' },
    profile: { pt: 'Perfil', en: 'Profile' },
    sections: { pt: 'Secções', en: 'Sections' },
    contact: { pt: 'Contacto', en: 'Contact' },
  },
  toggles: {
    theme: { pt: 'Tema', en: 'Theme' },
    light: { pt: 'Claro', en: 'Light' },
    dark: { pt: 'Escuro', en: 'Dark' },
    language: { pt: 'Idioma', en: 'Language' },
    english: { pt: 'Inglês', en: 'English' },
    portuguese: { pt: 'Português', en: 'Portuguese' },
  },
  hero: {
    eyebrow: { pt: 'Perfil profissional', en: 'Professional profile' },
    primaryCta: { pt: 'Explorar secções', en: 'Explore sections' },
    downloadCta: { pt: 'Descarregar CV', en: 'Download CV' },
    githubCta: { pt: 'Ver GitHub', en: 'View GitHub' },
    linkedinCta: { pt: 'LinkedIn', en: 'LinkedIn' },
    quickPanel: { pt: 'Resumo executivo', en: 'Executive summary' },
    metricsTitle: { pt: 'Indicadores de perfil', en: 'Profile highlights' },
    timelineTitle: { pt: 'Organizações e redes', en: 'Organizations and networks' },
  },
  profilePanel: {
    eyebrow: { pt: 'Navegação do perfil', en: 'Profile navigation' },
    title: { pt: 'Percurso, competências e contacto', en: 'Career, skills, and contact' },
    text: {
      pt: 'Selecione uma secção para ver a informação essencial de forma clara, objetiva e preparada para recrutamento em tecnologia.',
      en: 'Select a section to review the most relevant information in a clear, recruiter-ready format.',
    },
  },
  contentPanel: {
    institution: { pt: 'Instituição', en: 'Institution' },
    links: { pt: 'Ligações relevantes', en: 'Relevant links' },
  },
  footer: {
    title: { pt: 'Vamos falar sobre oportunidades em tecnologia', en: 'Let’s discuss technology opportunities' },
    text: {
      pt: 'Desenvolvido com dedicação e tecnologia.',
      en: 'Built with dedication and technology.',
    },
    location: { pt: 'Barcelos, Portugal', en: 'Barcelos, Portugal' },
  },
};

export const profile = {
  name: 'Hugo Lopes',
  fullName: 'Hugo Filipe Ferreira Lopes',
  title: {
    pt: 'Engenheiro de Sistemas Informáticos',
    en: 'Computer Systems Engineer',
  },
  subtitle: {
    pt: 'Consultoria técnica | Sistemas de informação | Transformação digital',
    en: 'Technical consulting | Information systems | Digital transformation',
  },
  location: 'Barcelos, Portugal',
  phone: '+351 963 622 418',
  email: 'hugodecode@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hugolopesbcl',
  github: 'https://github.com/SepolBCL',
  summary: {
    pt: 'Licenciado em Engenharia de Sistemas Informáticos, com experiência recente em consultoria técnica e implementação de sistemas de informação e mobilidade empresarial. Conhecimentos de programação, bases de dados, Linux, redes e administração de sistemas, aliados a mais de uma década de experiência internacional em ambientes técnicos. Percurso marcado pela progressão para liderança de equipa, rigor operacional, capacidade de adaptação e orientação para a resolução de problemas tecnológicos.',
    en: 'Graduate in Computer Systems Engineering with recent experience in technical consulting and the implementation of information systems and business mobility solutions. Brings knowledge of programming, databases, Linux, networking, and systems administration, supported by more than a decade of international experience in technical environments. Career path marked by progression into team leadership, operational discipline, adaptability, and a practical approach to solving technology problems.',
  },
  spotlight: {
    pt: [
      'Licenciatura concluída em 2026',
      'Experiência recente em consultoria técnica',
      'Percurso internacional em Portugal e França',
      'Liderança de equipa em contexto industrial',
    ],
    en: [
      'Degree completed in 2026',
      'Recent experience in technical consulting',
      'International background in Portugal and France',
      'Team leadership in industrial environments',
    ],
  },
  quickFacts: {
    pt: [
      { label: 'Localização', value: 'Barcelos, Portugal' },
      { label: 'Disponibilidade', value: 'Consultoria, sistemas, software e operações digitais' },
      { label: 'Ferramentas', value: 'Power BI, GitHub, Visual Studio, VS Code' },
    ],
    en: [
      { label: 'Location', value: 'Barcelos, Portugal' },
      { label: 'Availability', value: 'Consulting, systems, software, and digital operations' },
      { label: 'Tools', value: 'Power BI, GitHub, Visual Studio, VS Code' },
    ],
  },
  featuredBrands: [
    {
      label: 'Wave Solutions',
      sublabel: { pt: 'Consultoria técnica', en: 'Technical consulting' },
      brand: logoBrands.wave,
      href: 'https://wavesolutions.pt/',
    },
    {
      label: 'IPCA',
      sublabel: { pt: 'Ensino superior', en: 'Higher education' },
      brand: logoBrands.ipca,
      href: 'https://ipca.pt/',
    },
    {
      label: 'LinkedIn',
      sublabel: { pt: 'Rede profissional', en: 'Professional network' },
      brand: socialBrands.linkedin,
      href: 'https://www.linkedin.com/in/hugolopesbcl',
    },
    {
      label: 'GitHub',
      sublabel: { pt: 'Portefólio técnico', en: 'Technical portfolio' },
      brand: socialBrands.github,
      href: 'https://github.com/SepolBCL',
    },
  ],
};

const experiencePt = [
  {
    role: 'Consultor',
    company: 'Wave Solutions - Portugal',
    period: 'Jan. 2026 - Jun. 2026',
    brand: logoBrands.wave,
    points: [
      'Atuação na consultoria técnica e implementação de sistemas de informação e mobilidade empresarial.',
      'Otimização de processos e fluxos de trabalho, gestão de projetos e resolução de problemas.',
      'Aplicação dos conhecimentos de engenharia para apoiar a transição digital e a eficiência operacional dos clientes.',
    ],
  },
  {
    role: 'Carpinteiro',
    company: 'OFP Carpintaria - Portugal',
    period: 'Out. 2020 - Jan. 2026',
    brand: logoBrands.ofp,
    points: [
      'Reintegração bem-sucedida no mercado português, aplicando competências técnicas e manuais em diversos projetos de carpintaria.',
      'Execução rigorosa, disciplina de trabalho e forte capacidade de adaptação em contexto operacional exigente.',
    ],
  },
  {
    role: 'Construtor de Estruturas Metálicas',
    company: 'SLEICO, SAS - Saint-Étienne, França',
    period: 'Nov. 2010 - Out. 2020',
    brand: logoBrands.sleico,
    points: [
      'Evolução de operário para líder de equipa ao longo de uma década em ambiente industrial.',
      'Coordenação de projetos técnicos, garantindo qualidade de execução e cumprimento de prazos.',
      'Desenvolvimento consolidado de liderança operacional e gestão de equipas.',
    ],
  },
  {
    role: 'Ajudante de Cozinha',
    company: 'Hotel Chalet Mounier - Les Deux Alpes, França',
    period: 'Jun. 2009 - Ago. 2010',
    brand: logoBrands.chalet,
    points: [
      'Adaptação a uma nova cultura e a um ambiente profissional exigente.',
      'Desenvolvimento de competências interpessoais, ritmo de trabalho e espírito de equipa.',
    ],
  },
  {
    role: 'Gerente',
    company: 'Cerâmica Laurindo Lopes - Barcelos, Portugal',
    period: '2003 - 2008',
    brand: logoBrands.ceramica,
    points: [
      'Gestão das operações diárias, liderança de equipa, controlo de inventário e melhoria de processos internos.',
      'Base sólida em organização, responsabilidade e coordenação operacional.',
    ],
  },
];

const experienceEn = [
  {
    role: 'Consultant',
    company: 'Wave Solutions - Portugal',
    period: 'Jan. 2026 - Jun. 2026',
    brand: logoBrands.wave,
    points: [
      'Worked in technical consulting and in the implementation of information systems and business mobility solutions.',
      'Focused on process optimization, workflow improvement, project coordination, and problem solving.',
      'Applied engineering knowledge to support clients in digital transition and operational efficiency.',
    ],
  },
  {
    role: 'Carpenter',
    company: 'OFP Carpintaria - Portugal',
    period: 'Oct. 2020 - Jan. 2026',
    brand: logoBrands.ofp,
    points: [
      'Successfully re-entered the Portuguese labour market while delivering technical and manual carpentry work.',
      'Demonstrated discipline, adaptability, and hands-on problem solving in demanding project environments.',
    ],
  },
  {
    role: 'Metal Structure Builder',
    company: 'SLEICO, SAS - Saint-Étienne, France',
    period: 'Nov. 2010 - Oct. 2020',
    brand: logoBrands.sleico,
    points: [
      'Progressed from operator to team leader over a decade in an industrial environment.',
      'Coordinated technical projects, ensuring execution quality and respect for deadlines.',
      'Built strong operational leadership and team management experience.',
    ],
  },
  {
    role: 'Kitchen Assistant',
    company: 'Hotel Chalet Mounier - Les Deux Alpes, France',
    period: 'Jun. 2009 - Aug. 2010',
    brand: logoBrands.chalet,
    points: [
      'Adapted to a new culture and to a demanding hospitality environment.',
      'Developed interpersonal skills, teamwork, and reliability under pressure.',
    ],
  },
  {
    role: 'Manager',
    company: 'Cerâmica Laurindo Lopes - Barcelos, Portugal',
    period: '2003 - 2008',
    brand: logoBrands.ceramica,
    points: [
      'Managed daily operations, team leadership, inventory control, and operational improvements.',
      'Built an early foundation in organization, accountability, and business coordination.',
    ],
  },
];

export const sections = [
  {
    id: 'about',
    label: { pt: 'Sobre mim', en: 'About me' },
    eyebrow: { pt: 'Perfil', en: 'Profile' },
    heading: {
      pt: 'Um percurso sólido, internacional e orientado para tecnologia',
      en: 'A solid international career path with a clear technology direction',
    },
    summary: {
      pt: 'Perfil profissional marcado por resiliência, maturidade, responsabilidade e uma transição consistente para funções de base tecnológica.',
      en: 'Professional profile defined by resilience, maturity, accountability, and a consistent move toward technology-driven roles.',
    },
    highlights: {
      pt: ['Rigor operacional', 'Capacidade de adaptação', 'Experiência internacional'],
      en: ['Operational discipline', 'Adaptability', 'International experience'],
    },
    bullets: {
      pt: [
        'Mais de uma década de experiência em ambientes técnicos e industriais.',
        'Evolução progressiva para funções de coordenação e liderança de equipa.',
        'Interesse claro em sistemas, software, dados e otimização de processos.',
      ],
      en: [
        'More than a decade of experience in technical and industrial environments.',
        'Progressive career development into coordination and team leadership roles.',
        'Strong interest in systems, software, data, and process optimization.',
      ],
    },
  },
  {
    id: 'experience',
    label: { pt: 'Experiência', en: 'Experience' },
    eyebrow: { pt: 'Percurso profissional', en: 'Career path' },
    heading: {
      pt: 'Experiência profissional apresentada com foco em execução, evolução e credibilidade',
      en: 'Professional experience presented through execution, progression, and credibility',
    },
    summary: {
      pt: 'Da operação à liderança e, mais recentemente, à consultoria técnica, o percurso demonstra consistência, resiliência e capacidade de entrega.',
      en: 'From operations to leadership and, more recently, technical consulting, the career path shows consistency, resilience, and delivery capability.',
    },
    highlights: {
      pt: ['Consultoria técnica recente', 'Liderança em ambiente industrial', 'Execução prática com forte disciplina'],
      en: ['Recent technical consulting', 'Leadership in industrial environments', 'Hands-on execution with strong discipline'],
    },
    timeline: { pt: experiencePt, en: experienceEn },
  },
  {
    id: 'education',
    label: { pt: 'Educação', en: 'Education' },
    eyebrow: { pt: 'Formação académica', en: 'Academic background' },
    heading: {
      pt: 'Licenciatura concluída em Engenharia de Sistemas Informáticos',
      en: 'Completed degree in Computer Systems Engineering',
    },
    summary: {
      pt: 'Formação superior orientada para software, sistemas, redes, bases de dados e administração de sistemas, concluída em 2026.',
      en: 'Higher education focused on software, systems, networking, databases, and systems administration, completed in 2026.',
    },
    highlights: {
      pt: ['Concluído em 2026', 'Base técnica estruturada', 'Ligação direta à prática profissional'],
      en: ['Completed in 2026', 'Structured technical foundation', 'Direct link to practical experience'],
    },
    institutionBrand: logoBrands.ipca,
    bullets: {
      pt: [
        'Licenciatura em Engenharia de Sistemas Informáticos',
        'Universidade Politécnica do Cávado e do Ave (IPCA) - Barcelos, Portugal',
        'Período: 2023 - concluído 2026',
        'Áreas de estudo: Sistemas Operativos, Arquitetura de Computadores, Programação, Redes, Bases de Dados, Administração de Sistemas e Engenharia de Software.',
      ],
      en: [
        'Bachelor in Computer Systems Engineering',
        'Polytechnic University of Cávado and Ave (IPCA) - Barcelos, Portugal',
        'Period: 2023 - completed in 2026',
        'Study areas: Operating Systems, Computer Architecture, Programming, Networking, Databases, Systems Administration, and Software Engineering.',
      ],
    },
  },
  {
    id: 'skills',
    label: { pt: 'Competências', en: 'Skills' },
    eyebrow: { pt: 'Competências técnicas e pessoais', en: 'Technical and soft skills' },
    heading: {
      pt: 'Competências relevantes para funções de tecnologia, consultoria e sistemas',
      en: 'Skills relevant to technology, consulting, and systems roles',
    },
    summary: {
      pt: 'Conjunto de competências técnicas e comportamentais construído pela formação académica e pela experiência prática em contexto exigente.',
      en: 'A combination of technical and professional skills developed through academic training and hands-on experience in demanding environments.',
    },
    highlights: {
      pt: ['Programação e bases de dados', 'Linux, redes e administração de sistemas', 'Responsabilidade e espírito de equipa'],
      en: ['Programming and databases', 'Linux, networking, and systems administration', 'Accountability and teamwork'],
    },
    groups: {
      pt: [
        { title: 'Programação', items: ['C', 'C#', 'C++', 'Python', 'Kotlin (projetos académicos)'] },
        { title: 'Ferramentas', items: ['Microsoft Power BI', 'GitHub', 'Visual Studio', 'Visual Studio Code'] },
        { title: 'Sistemas Operativos', items: ['Linux (Ubuntu)', 'Windows'] },
        { title: 'Redes', items: ['TCP/IP', 'Roteamento', 'DNS', 'Firewalls'] },
        { title: 'Bases de Dados', items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL'] },
        { title: 'Metodologias', items: ['Ágil', 'Scrum (contexto académico)'] },
        {
          title: 'Competências interpessoais',
          items: [
            'Forte sentido de responsabilidade',
            'Excelente organização e gestão do tempo',
            'Espírito de equipa e colaboração',
            'Motivação e orientação para resultados',
            'Resiliência e capacidade de adaptação',
            'Vontade de aprender e superar desafios',
          ],
        },
        { title: 'Línguas', items: ['Português (Nativo)', 'Francês (C1 - Avançado)', 'Inglês (B1 - Intermédio)'] },
      ],
      en: [
        { title: 'Programming', items: ['C', 'C#', 'C++', 'Python', 'Kotlin (academic projects)'] },
        { title: 'Tools', items: ['Microsoft Power BI', 'GitHub', 'Visual Studio', 'Visual Studio Code'] },
        { title: 'Operating Systems', items: ['Linux (Ubuntu)', 'Windows'] },
        { title: 'Networking', items: ['TCP/IP', 'Routing', 'DNS', 'Firewalls'] },
        { title: 'Databases', items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL'] },
        { title: 'Methodologies', items: ['Agile', 'Scrum (academic context)'] },
        {
          title: 'Soft Skills',
          items: [
            'Strong sense of responsibility',
            'Excellent organization and time management',
            'Team spirit and collaboration',
            'Motivation and results orientation',
            'Resilience and adaptability',
            'Willingness to learn and overcome challenges',
          ],
        },
        { title: 'Languages', items: ['Portuguese (Native)', 'French (C1 - Advanced)', 'English (B1 - Intermediate)'] },
      ],
    },
  },
  {
    id: 'contact',
    label: { pt: 'Contacto', en: 'Contact' },
    eyebrow: { pt: 'Vamos falar', en: 'Let’s connect' },
    heading: {
      pt: 'Disponível para oportunidades em consultoria, sistemas de informação e tecnologia',
      en: 'Available for opportunities in consulting, information systems, and technology',
    },
    summary: {
      pt: 'Perfil preparado para acrescentar valor em contextos que valorizem maturidade profissional, vontade de evolução e execução com rigor.',
      en: 'Prepared to contribute in environments that value professional maturity, steady growth, and disciplined execution.',
    },
    highlights: {
      pt: ['Barcelos, Portugal', 'Contacto direto disponível', 'Perfil adequado para equipas em crescimento'],
      en: ['Barcelos, Portugal', 'Direct contact available', 'Good fit for growth-oriented teams'],
    },
    links: {
      pt: [
        { label: 'Enviar email', href: 'mailto:hugodecode@gmail.com' },
        { label: 'Ligar', href: 'tel:+351963622418' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugolopesbcl', brand: socialBrands.linkedin },
        { label: 'GitHub', href: 'https://github.com/SepolBCL', brand: socialBrands.github },
      ],
      en: [
        { label: 'Send email', href: 'mailto:hugodecode@gmail.com' },
        { label: 'Call', href: 'tel:+351963622418' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugolopesbcl', brand: socialBrands.linkedin },
        { label: 'GitHub', href: 'https://github.com/SepolBCL', brand: socialBrands.github },
      ],
    },
  },
];

export const defaultSectionId = 'about';
