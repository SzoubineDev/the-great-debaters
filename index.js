// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme preference or use system preference
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
} else {
  document.documentElement.classList.remove('dark');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', function () {
  // Toggle icon
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');

  // Toggle theme
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});
// Active Navigation Highlighter - Robust Version
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop();
  const allNavItems = document.querySelectorAll('nav a');

  // Reset all nav items to default state
  allNavItems.forEach(item => {
    item.classList.remove('text-primary', 'dark:text-secondary', 'font-semibold');
    item.classList.add(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
  });
  function applyActiveStyles(element) {
    element.classList.remove(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
    element.classList.add('text-primary', 'dark:text-secondary', 'font-semibold');
  }
  // Highlight current page
  allNavItems.forEach(item => {
    const href = item.getAttribute('href');

    // Handle index.html and root path
    if (
      (currentPage === 'index.html' || currentPage === '' || currentPage === '/') &&
      href === 'index.html'
    ) {
      applyActiveStyles(item);
      return;
    }

    // Handle other pages
    if (href === currentPage) {
      applyActiveStyles(item);
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', highlightActiveNav);

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

// Enhanced Language Manager with Full Page Translations

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferred-language') || 'en';
    this.translations = {
      en: {
        // Stats Section
        'active-members': 'Active Members',
        'tournaments-won': 'Tournaments Won',
        'years-excellence': 'Years of Excellence',
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-team': 'Our Team',
        'nav-events': 'Latest Events',
        'nav-contact': 'Contact',
        //what we do section
        'what-we-do': 'What We Do',
        'training-title': 'Comprehensive Training',
        'training-desc-1':
          'We provide structured training sessions that cover argument construction, rebuttal techniques, public speaking, and critical thinking. Our curriculum is designed for debaters of all skill levels.',
        'training-desc-2':
          'Our experienced coaches work with you to develop your unique voice and style while mastering the fundamentals of persuasive communication.',
        'competition-title': 'Competitive Experience',
        'competition-desc-1':
          'We participate in regional, national, and international debate tournaments, giving our members opportunities to test their skills against the best.',
        'competition-desc-2':
          'Our teams have consistently placed in top positions, earning recognition and building a legacy of excellence in competitive debating.',
        'community-title': 'Community Engagement',
        'community-desc-1':
          'We organize public debates, workshops, and community discussions on important contemporary issues, fostering dialogue and civic engagement.',
        'community-desc-2':
          'Our outreach programs introduce debating skills to schools and community centers, empowering more people to engage in constructive discourse.',

        // Hero Sections
        'hero-title': 'Master the Art of Persuasion',
        'hero-desc':
          'Join our community of critical thinkers and eloquent speakers. Develop your debating skills, engage in intellectual discourse, and make your voice heard.',
        'join-btn': 'Join Now',
        'learn-btn': 'Learn More',

        // About Page
        'about-hero': 'About The Great Debaters',
        'about-desc':
          'The premier debating society at FST Errachidia, fostering critical thinking, eloquent expression, and intellectual discourse since 2018.',
        'who-we-are': 'Who We Are',
        'about-content-1':
          'The Great Debaters is the official debating club of the Faculty of Sciences and Techniques (FST) in Errachidia, established to cultivate a culture of intellectual discourse and critical thinking among students.',
        'about-content-2':
          "As part of FST Errachidia's vibrant student life, we provide a platform for students to develop their communication skills, engage with diverse perspectives, and build confidence in public speaking.",
        'about-content-3':
          'Our club brings together students from various scientific and technical backgrounds, creating a unique interdisciplinary environment where different viewpoints converge and intellectual growth flourishes.',
        'our-mission': 'Our Mission',
        'mission-desc':
          'To empower FST Errachidia students with the skills of critical thinking, articulate expression, and confident public speaking through structured debate training and competitive experiences.',
        'our-vision': 'Our Vision',
        'vision-desc':
          'To establish FST Errachidia as a regional hub for intellectual discourse and debate excellence, producing graduates who are not only technically proficient but also exceptional communicators and critical thinkers.',

        // What We Do Sections
        'what-we-do': 'What We Do',
        'training-title': 'Comprehensive Training',
        'training-desc':
          'We provide structured training sessions that cover argument construction, rebuttal techniques, public speaking, and critical thinking. Our curriculum is designed for debaters of all skill levels.',
        'competition-title': 'Competitive Experience',
        'competition-desc':
          'We participate in regional, national, and international debate tournaments, giving our members opportunities to test their skills against the best.',
        'community-title': 'Community Engagement',
        'community-desc':
          'We organize public debates, workshops, and community discussions on important contemporary issues, fostering dialogue and civic engagement.',

        // Team Page
        'team-hero': 'Meet Our Team',
        'team-desc':
          'The passionate students behind The Great Debaters FST Errachidia - dedicated to fostering intellectual discourse and critical thinking on campus.',
        'executive-board': 'Executive Board',
        'management-team': 'Management Team',
        'language-chiefs': 'Language Cells Chiefs',
        'join-team': 'Want to Join Our Team?',
        'join-team-desc':
          "We're always looking for passionate students to help us grow The Great Debaters community at FST Errachidia.",

        // Events Page
        'events-hero': 'Latest Events',
        'events-desc': 'Stay tuned for our upcoming debates, workshops, and tournaments',
        'coming-soon': 'Exciting Events Coming Soon!',
        'coming-desc':
          "We're preparing something special for our debating community. New events, tournaments, and workshops will be announced shortly.",
        'stay-connected': 'Stay Connected for Updates',
        'what-to-expect': 'What to Expect',
        'expect-1': 'Inter-university debate tournaments',
        'expect-2': 'Public speaking workshops',
        'expect-3': 'Multilingual debate sessions',
        'expect-4': 'Expert-led training sessions',
        'expect-5': 'Community engagement events',
        'get-notified': 'Get Notified First',
        'notified-desc': 'Be the first to know when we announce our upcoming events',
        'enter-email': 'Enter your email',
        'notify-me': 'Notify Me',
        'while-wait': 'While You Wait...',
        'past-events': 'Past Events',
        'past-desc':
          'Check out photos and highlights from our previous successful events and tournaments',
        resources: 'Resources',
        'resources-desc':
          'Access our debate training materials and improve your skills while waiting',
        'join-sessions': 'Join Sessions',
        'sessions-desc': 'Participate in our weekly practice sessions to stay sharp and connected',

        // Testimonials
        testimonials: 'What Our Members Say',

        // Footer
        'club-desc':
          'Developing critical thinkers and eloquent speakers since 2018. Join us in fostering meaningful dialogue and persuasive communication.',
        'contact-title': 'Contact Us',
        'connect-title': 'Connect With Us',
        'rights-reserved': 'All rights reserved.',

        // Common
        'read-more': 'Read More',
        'apply-now': 'Apply Now',
        'view-all': 'View All',
        'see-more': 'See More',
      },
      fr: {
        // Stats Section
        'active-members': 'Membres Actifs',
        'tournaments-won': 'Tournois Gagnés',
        'years-excellence': "Années d'Excellence",
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-team': 'Notre Équipe',
        'nav-events': 'Événements',
        'nav-contact': 'Contact',
        // What We Do Section
        'what-we-do': 'Ce Que Nous Faisons',
        'training-title': 'Formation Complète',
        'training-desc-1':
          "Nous proposons des sessions de formation structurées couvrant la construction d'arguments, les techniques de réplique, la prise de parole en public et la pensée critique. Notre programme est conçu pour les débateurs de tous niveaux.",
        'training-desc-2':
          'Nos coachs expérimentés travaillent avec vous pour développer votre voix et style uniques tout en maîtrisant les fondamentaux de la communication persuasive.',
        'competition-title': 'Expérience Compétitive',
        'competition-desc-1':
          "Nous participons à des tournois de débat régionaux, nationaux et internationaux, offrant à nos membres l'opportunité de tester leurs compétences contre les meilleurs.",
        'competition-desc-2':
          "Nos équipes se sont constamment classées dans les premières positions, gagnant une reconnaissance et construisant un héritage d'excellence en débat compétitif.",
        'community-title': 'Engagement Communautaire',
        'community-desc-1':
          "Nous organisons des débats publics, des ateliers et des discussions communautaires sur des questions contemporaines importantes, favorisant le dialogue et l'engagement civique.",
        'community-desc-2':
          "Nos programmes de sensibilisation introduisent les compétences de débat dans les écoles et les centres communautaires, permettant à plus de personnes de s'engager dans un discours constructif.",

        // Hero Sections
        'hero-title': "Maîtrisez l'Art de la Persuasion",
        'hero-desc':
          "Rejoignez notre communauté de penseurs critiques et d'orateurs éloquents. Développez vos compétences en débat, engagez-vous dans un discours intellectuel et faites entendre votre voix.",
        'join-btn': 'Rejoindre',
        'learn-btn': 'En Savoir Plus',

        // About Page
        'about-hero': 'À Propos des Grands Débatteurs',
        'about-desc':
          "La principale société de débat de la FST Errachidia, favorisant la pensée critique, l'expression éloquente et le discours intellectuel depuis 2018.",
        'who-we-are': 'Qui Nous Sommes',
        'about-content-1':
          "Les Grands Débatteurs est le club de débat officiel de la Faculté des Sciences et Techniques (FST) d'Errachidia, créé pour cultiver une culture de débat intellectuel et de pensée critique parmi les étudiants.",
        'about-content-2':
          "Dans le cadre de la vie étudiante dynamique de la FST Errachidia, nous offrons une plateforme aux étudiants pour développer leurs compétences en communication, s'engager avec des perspectives diverses et renforcer leur confiance en prise de parole en public.",
        'about-content-3':
          "Notre club rassemble des étudiants de divers horizons scientifiques et techniques, créant un environnement interdisciplinaire unique où différentes perspectives convergent et la croissance intellectuelle s'épanouit.",
        'our-mission': 'Notre Mission',
        'mission-desc':
          'Donner aux étudiants de la FST Errachidia les compétences en pensée critique, expression articulée et prise de parole en public grâce à une formation structurée au débat et des expériences compétitives.',
        'our-vision': 'Notre Vision',
        'vision-desc':
          "Établir la FST Errachidia comme un centre régional d'excellence en discours intellectuel et en débat, formant des diplômés non seulement compétents techniquement mais aussi exceptionnels en communication et pensée critique.",

        // What We Do Sections
        'what-we-do': 'Ce Que Nous Faisons',
        'training-title': 'Formation Complète',
        'training-desc':
          "Nous proposons des sessions de formation structurées couvrant la construction d'arguments, les techniques de réplique, la prise de parole en public et la pensée critique. Notre programme est conçu pour les débateurs de tous niveaux.",
        'competition-title': 'Expérience Compétitive',
        'competition-desc':
          "Nous participons à des tournois de débat régionaux, nationaux et internationaux, offrant à nos membres l'opportunité de tester leurs compétences contre les meilleurs.",
        'community-title': 'Engagement Communautaire',
        'community-desc':
          "Nous organisons des débats publics, des ateliers et des discussions communautaires sur des questions contemporaines importantes, favorisant le dialogue et l'engagement civique.",

        // Team Page
        'team-hero': 'Rencontrez Notre Équipe',
        'team-desc':
          'Les étudiants passionnés derrière Les Grands Débatteurs FST Errachidia - dédiés à favoriser le discours intellectuel et la pensée critique sur le campus.',
        'executive-board': 'Comité Exécutif',
        'management-team': 'Équipe de Gestion',
        'language-chiefs': 'Chefs des Cellules Linguistiques',
        'join-team': 'Voulez-vous Rejoindre Notre Équipe?',
        'join-team-desc':
          'Nous recherchons toujours des étudiants passionnés pour nous aider à développer la communauté des Grands Débatteurs à la FST Errachidia.',

        // Events Page
        'events-hero': 'Derniers Événements',
        'events-desc': "Restez à l'écoute pour nos prochains débats, ateliers et tournois",
        'coming-soon': 'Événements Passionnants à Venir!',
        'coming-desc':
          'Nous préparons quelque chose de spécial pour notre communauté de débat. De nouveaux événements, tournois et ateliers seront annoncés prochainement.',
        'stay-connected': 'Restez Connecté pour les Mises à Jour',
        'what-to-expect': "À Quoi S'attendre",
        'expect-1': 'Tournois de débat interuniversitaires',
        'expect-2': 'Ateliers de prise de parole en public',
        'expect-3': 'Sessions de débat multilingues',
        'expect-4': 'Sessions de formation dirigées par des experts',
        'expect-5': "Événements d'engagement communautaire",
        'get-notified': 'Soyez le Premier Informé',
        'notified-desc':
          'Soyez le premier à savoir quand nous annoncerons nos prochains événements',
        'enter-email': 'Entrez votre email',
        'notify-me': 'Me Notifier',
        'while-wait': 'En Attendant...',
        'past-events': 'Événements Passés',
        'past-desc':
          'Découvrez les photos et les temps forts de nos précédents événements et tournois réussis',
        resources: 'Ressources',
        'resources-desc':
          'Accédez à nos matériels de formation au débat et améliorez vos compétences en attendant',
        'join-sessions': 'Rejoignez les Sessions',
        'sessions-desc':
          'Participez à nos sessions de pratique hebdomadaires pour rester affûté et connecté',

        // Testimonials
        testimonials: 'Ce Que Disent Nos Membres',

        // Footer
        'club-desc':
          "Développement de penseurs critiques et d'orateurs éloquents depuis 2018. Rejoignez-nous pour favoriser un dialogue significatif et une communication persuasive.",
        'contact-title': 'Contactez-Nous',
        'connect-title': 'Connectez-Vous avec Nous',
        'rights-reserved': 'Tous droits réservés.',

        // Common
        'read-more': 'Lire Plus',
        'apply-now': 'Postuler Maintenant',
        'view-all': 'Voir Tout',
        'see-more': 'Voir Plus',
      },
      ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-team': 'فريقنا',
        'nav-events': 'الأحداث',
        'nav-contact': 'اتصل بنا',
        // What We Do Section
        'what-we-do': 'ما نقوم به',
        'training-title': 'تدريب شامل',
        'training-desc-1':
          'نقدم جلسات تدريبية منظمة تغطي بناء الحجج، وتقنيات الرد، والتحدث أمام الجمهور، والتفكير النقدي. تم تصميم منهجنا للمتناقشين من جميع المستويات.',
        'training-desc-2':
          'يعمل مدربونا ذوو الخبرة معك لتطوير صوتك وأسلوبك الفريدين أثناء إتقان أساسيات التواصل المقنع.',
        'competition-title': 'تجربة تنافسية',
        'competition-desc-1':
          'نشارك في بطولات النقاش الإقليمية والوطنية والدولية، مما يمنح أعضائنا فرصة لاختبار مهاراتهم ضد الأفضل.',
        'competition-desc-2':
          'احتلت فرقنا باستمرار مراكز متقدمة، مما أكسبها اعترافًا وبناء إرث من التميز في النقاش التنافسي.',
        'community-title': 'مشاركة مجتمعية',
        'community-desc-1':
          'ننظم مناقشات عامة وورش عمل ومناقشات مجتمعية حول القضايا المعاصرة الهامة، وتعزيز الحوار والمشاركة المدنية.',
        'community-desc-2':
          'تقدم برامجنا التوعوية مهارات النقاش إلى المدارس والمراكز المجتمعية، مما يمكن المزيد من الأشخاص من الانخراط في خطاب بناء.',

        // Hero Sections
        'hero-title': 'أتقن فن الإقناع',
        'hero-desc':
          'انضم إلى مجتمعنا من المفكرين النقديين والمتحدثين البليغين. طور مهاراتك في النقاش، وانخرط في الخطاب الفكري، واجعل صوتك مسموعًا.',
        'join-btn': 'انضم الآن',
        'learn-btn': 'اعرف المزيد',
        //stats
        'active-members': 'أعضاء نشطون',
        'tournaments-won': 'البطولات التي فزنا بها',
        'years-excellence': 'سنوات من التميز',
        // About Page
        'about-hero': 'عن المتحدثين العظماء',
        'about-desc':
          'أول جمعية للنقاش في كلية العلوم والتقنيات بالرشيدية، تعزز التفكير النقدي والتعبير البليغ والخطاب الفكري منذ عام 2018.',
        'who-we-are': 'من نحن',
        'about-content-1':
          'المتحدثون العظماء هو النادي الرسمي للنقاش في كلية العلوم والتقنيات بالرشيدية، أنشئ لتعزيز ثقافة الخطاب الفكري والتفكير النقدي بين الطلاب.',
        'about-content-2':
          'كجزء من الحياة الطلابية النشطة في كلية العلوم والتقنيات بالرشيدية، نقدم منصة للطلاب لتطوير مهارات الاتصال لديهم، والانخراط مع وجهات نظر متنوعة، وبناء الثقة في التحدث أمام الجمهور.',
        'about-content-3':
          'يجمع نادينا طلابًا من خلفيات علمية وتقنية متنوعة، مما يخلق بيئة متعددة التخصصات فريدة تلتقي فيها وجهات النظر المختلفة وتزدهر النمو الفكري.',
        'our-mission': 'مهمتنا',
        'mission-desc':
          'تمكين طلاب كلية العلوم والتقنيات بالرشيدية بمهارات التفكير النقدي، والتعبير الواضح، والتحدث بثقة أمام الجمهور من خلال التدريب المنظم على النقاش والتجارب التنافسية.',
        'our-vision': 'رؤيتنا',
        'vision-desc':
          'إنشاء كلية العلوم والتقنيات بالرشيدية كمركز إقليمي للخطاب الفكري والتميز في النقاش، وإنتاج خريجين ليسوا متمكنين تقنيًا فحسب، بل أيضًا متواصلين استثنائيين ومفكرين نقديين.',

        // What We Do Sections
        'what-we-do': 'ما نقوم به',
        'training-title': 'تدريب شامل',
        'training-desc':
          'نقدم جلسات تدريبية منظمة تغطي بناء الحجج، وتقنيات الرد، والتحدث أمام الجمهور، والتفكير النقدي. تم تصميم منهجنا للمتناقشين من جميع المستويات.',
        'competition-title': 'تجربة تنافسية',
        'competition-desc':
          'نشارك في بطولات النقاش الإقليمية والوطنية والدولية، مما يمنح أعضائنا فرصة لاختبار مهاراتهم ضد الأفضل.',
        'community-title': 'مشاركة مجتمعية',
        'community-desc':
          'ننظم مناقشات عامة وورش عمل ومناقشات مجتمعية حول القضايا المعاصرة الهامة، وتعزيز الحوار والمشاركة المدنية.',

        // Team Page
        'team-hero': 'تعرف على فريقنا',
        'team-desc':
          'الطلاب المتحمسون وراء المتحدثين العظماء في كلية العلوم والتقنيات بالرشيدية - مكرسون لتعزيز الخطاب الفكري والتفكير النقدي في الحرم الجامعي.',
        'executive-board': 'المجلس التنفيذي',
        'management-team': 'فريق الإدارة',
        'language-chiefs': 'رؤساء الخلايا اللغوية',
        'join-team': 'هل تريد الانضمام إلى فريقنا؟',
        'join-team-desc':
          'نحن نبحث دائمًا عن طلاب متحمسين لمساعدتنا في تنمية مجتمع المتحدثين العظماء في كلية العلوم والتقنيات بالرشيدية.',

        // Events Page
        'events-hero': 'آخر الأحداث',
        'events-desc': 'ترقبوا مناقشاتنا وورش العمل والبطولات القادمة',
        'coming-soon': 'أحداث مثيرة قريبًا!',
        'coming-desc':
          'نحن نعد شيئًا خاصًا لمجتمع النقاش لدينا. سيتم الإعلان عن أحداث وبطولات وورش عمل جديدة قريبًا.',
        'stay-connected': 'ابق على اتصال للتحديثات',
        'what-to-expect': 'ما يمكن توقعه',
        'expect-1': 'بطولات النقاش بين الجامعات',
        'expect-2': 'ورش عمل التحدث أمام الجمهور',
        'expect-3': 'جلسات النقاش متعددة اللغات',
        'expect-4': 'جلسات تدريبية بقيادة خبراء',
        'expect-5': 'أحداث المشاركة المجتمعية',
        'get-notified': 'كن أول من يعلم',
        'notified-desc': 'كن أول من يعرف عندما نعلن عن أحداثنا القادمة',
        'enter-email': 'أدخل بريدك الإلكتروني',
        'notify-me': 'أخبرني',
        'while-wait': 'بينما تنتظر...',
        'past-events': 'الأحداث السابقة',
        'past-desc': 'اطلع على الصور وأبرز الأحداث من فعالياتنا وبطولاتنا الناجحة السابقة',
        resources: 'الموارد',
        'resources-desc':
          'الوصول إلى مواد التدريب على النقاش الخاصة بنا وتحسين مهاراتك أثناء الانتظار',
        'join-sessions': 'انضم إلى الجلسات',
        'sessions-desc': 'شارك في جلسات التدريب الأسبوعية لدينا للبقاء حادًا ومتصلًا',

        // Testimonials
        testimonials: 'ما يقوله أعضاؤنا',

        // Footer
        'club-desc':
          'تطوير مفكرين نقديين ومتحدثين بليغين منذ عام 2018. انضم إلينا في تعزيز الحوار الهادف والتواصل المقنع.',
        'contact-title': 'اتصل بنا',
        'connect-title': 'تواصل معنا',
        'rights-reserved': 'جميع الحقوق محفوظة.',

        // Common
        'read-more': 'اقرأ المزيد',
        'apply-now': 'قدم الآن',
        'view-all': 'عرض الكل',
        'see-more': 'شاهد المزيد',
      },
    };
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyLanguage(this.currentLang);
  }

  setupEventListeners() {
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle dropdown
    if (langToggle) {
      langToggle.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });
    }

    // Language selection
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        this.switchLanguage(lang);
        langDropdown.classList.remove('show');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      if (langDropdown) {
        langDropdown.classList.remove('show');
      }
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    this.applyLanguage(lang);
    this.updateActiveState();

    // Show language change feedback
    this.showLanguageFeedback(lang);
  }

  applyLanguage(lang) {
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
      const key = element.dataset.translate;
      if (this.translations[lang] && this.translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = this.translations[lang][key];
        } else {
          element.textContent = this.translations[lang][key];
        }
      }
    });

    // Update current language display
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
      currentLangElement.textContent = lang.toUpperCase();
    }

    // Update HTML attributes for RTL/LTR
    this.updateDocumentDirection(lang);

    // Update any dynamic content
    this.updateDynamicContent(lang);
  }

  updateDocumentDirection(lang) {
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  updateDynamicContent(lang) {
    // Update any content that might not have data-translate attributes
    // This is a fallback for dynamically generated content
    console.log(`Language switched to: ${lang}`);
  }

  updateActiveState() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.lang === this.currentLang) {
        option.classList.add('active');
      }
    });
  }

  showLanguageFeedback(lang) {
    // Optional: Show a subtle feedback message
    const feedback = document.createElement('div');
    feedback.className =
      'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    feedback.textContent = `Language changed to ${this.getLanguageName(lang)}`;

    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(feedback);
      }, 300);
    }, 2000);
  }

  getLanguageName(lang) {
    const names = {
      en: 'English',
      fr: 'Français',
      ar: 'العربية',
    };
    return names[lang] || lang;
  }

  // Method to add translations dynamically
  addTranslations(newTranslations) {
    Object.keys(newTranslations).forEach(lang => {
      if (!this.translations[lang]) {
        this.translations[lang] = {};
      }
      Object.assign(this.translations[lang], newTranslations[lang]);
    });
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});
