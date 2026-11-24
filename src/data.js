// Centralized bilingual data, workflow, services, and verified case studies for aalij.dev (Hussien Ghazal)

export const BRAND_DATA = {
  profile: {
    name: {
      ar: "حسين غزال",
      en: "Hussien Ghazal"
    },
    title: {
      ar: "مهندس برمجيات ومطور أنظمة متكاملة",
      en: "Software Engineer & Full-Spectrum Systems Developer"
    },
    brandDomain: "aalij.dev",
    email: "hussien.ghazal98@gmail.com",
    phone: "+963949359837",
    whatsappUrl: "https://wa.me/963949359837",
    linkedinUrl: "https://www.linkedin.com/in/hussien-ghazal-548813286",
    githubUrl: "https://github.com/HussienGhazal",
    location: {
      ar: "حماة، سوريا • متاح للعمل عن بُعد مع الشركات ورواد الأعمال عالمياً",
      en: "Hama, Syria • Available Remotely for Companies & Founders Worldwide"
    }
  },

  i18n: {
    ar: {
      metaTitle: "aalij.dev | حسين غزال — تطوير تطبيقات Flutter والأنظمة السحابية المتكاملة",
      nav: {
        services: "الخدمات",
        workflow: "آلية العمل",
        projects: "دراسة الحالات",
        contact: "تواصل معي",
        cta: "ابدأ مشروعك"
      },
      hero: {
        badge: "متاح لاستلام مشاريع جديدة — تطوير متكامل من الفكرة للإطلاق",
        title_prefix: "حسين غزال",
        title_tag: "aalij.dev",
        title_highlight: "نحوّل أفكارك وعملياتك التجارية إلى تطبيقات ومنصات سحابية مستقرة وجاهزة للإنتاج.",
        description: "أطوّر تطبيقات Flutter للموبايل والديسكتوب، أنظمة الويب والـ APIs ولوحات التحكم، مع تجهيز السيرفرات والبنية السحابية وربط نقاط البيع — لتحصل على نظام عملي موحّد يعالج احتياجات عملك ويزيد كفاءته دون تعقيد تقني.",
        cta_primary: "ابدأ مشروعك الآن",
        cta_secondary: "استعراض الأعمال والنتائج",
        trust_points: [
          { value: "10+", label: "منظومة وتطبيق مكتمل وجاهز للإنتاج" },
          { value: "Flutter", label: "تطبيقات iOS و Android وديسكتوب بكود موحد" },
          { value: "Web & API", label: "أنظمة Go و Laravel ولوحات تحكم" },
          { value: "100%", label: "تسليم منظم وتملّك كامل للكود والسيرفر" }
        ],
        blueprint: {
          header: "خارطة تسليم مشروعك • aalij.dev",
          status: "جاهز للإطلاق",
          layers: [
            {
              title: "تجربة المستخدم والتطبيقات",
              sub: "تطبيقات Flutter (iOS / Android / Desktop) سريعة وتعمل دون انقطاع"
            },
            {
              title: "النظام الخلفي ولوحات الإدارة",
              sub: "خوادم Go و Laravel وواجهات React لإدارة العمليات والمبيعات والمالية"
            },
            {
              title: "الأتمتة والربط مع العتاد",
              sub: "نقاط بيع POS، طابعات حرارية صامتة، إشعارات فورية، وتقارير PDF"
            },
            {
              title: "الاستضافة والأمان السحابي",
              sub: "خوادم Linux VPS، حاويات Docker، نشر Coolify، ونسخ احتياطي آلي"
            }
          ],
          footer_left: "إشراف هندسي مباشر من التحليل للدعم",
          footer_right: "حسين غزال"
        }
      },
      manifesto: {
        tag: "لماذا aalij.dev؟ (المعالجة الهندسية للأعمال)",
        quote: "الهدف من البرمجة ليس كتابة أكواد معقدة، بل معالجة مشكلات العمل الفعلية وبناء نظام واضح ومستقر يعتمد عليه فريقك وعملاؤك يومياً دون أعطال أو بطء.",
        author: "حسين غزال • مهندس برمجيات وأنظمة متكاملة"
      },
      services: {
        badge: "الخدمات والحلول البرمجية",
        title: "حلول تقنية متكاملة مصممة لنمو أعمالك",
        subtitle: "أقدّم حلولاً واضحة وعملية لأصحاب الأعمال والشركات الناشئة، تغطي التطبيق، النظام الخلفي، البنية السحابية، وربط الأجهزة تحت سقف واحد.",
        deliverable_label: "المخرج النهائي:",
        items: [
          {
            id: "mobile",
            icon: "Smartphone",
            title: "تطوير تطبيقات Flutter للموبايل والديسكتوب",
            desc: "بناء تطبيقات احترافية لأنظمة iOS و Android و Windows بقاعدة كود موحدة تقلل التكلفة وتسرّع الإطلاق، مع واجهات عربية مريحة، ودعم العمل دون إنترنت ومزامنة البيانات عند عودة الاتصال.",
            deliverable: "تطبيقات منشورة على المتاجر + واجهة كاشير وميدان سريعة",
            tags: ["Flutter", "iOS & Android", "Desktop POS", "Offline SQLite", "BLoC / Riverpod"]
          },
          {
            id: "web",
            icon: "Server",
            title: "تطوير أنظمة الويب، الـ APIs ولوحات التحكم",
            desc: "تطوير منصات SaaS، أنظمة إدارة المبيعات والمخزون والمحاسبة (ERP/CRM)، وواجهات برمجة التطبيقات (APIs) الآمنة بـ Go و Laravel و React لإدارة كل تفاصيل مشروعك من لوحة تحكم واحدة لحظياً.",
            deliverable: "لوحة تحكم إدارية + API سريع ومحصّن + قاعدة بيانات منظمة",
            tags: ["Laravel", "Go (Golang)", "React", "PostgreSQL / MySQL", "REST APIs"]
          },
          {
            id: "pos",
            icon: "Printer",
            title: "أنظمة نقاط البيع وربط العتاد والطباعة الصامتة",
            desc: "حلول مخصصة للمتاجر والمطاعم ومراكز الطباعة والمكتبات تربط النظام السحابي بالطابعات الحرارية وقارئات الباركود عبر جسور برمجية ذكية لطباعة الفواتير فوراً دون نوافذ المتصفح المزعجة.",
            deliverable: "كاشير مستقر حتى عند انقطاع النت + طباعة فورية صامتة",
            tags: ["POS Systems", "Python / CUPS Bridge", "ESC/POS", "Barcode Scanners", "KDS"]
          },
          {
            id: "cloud",
            icon: "Cloud",
            title: "إدارة السيرفرات والبنية التحتية السحابية",
            desc: "تجهيز وتأمين خوادم Linux VPS، بناء حاويات Docker، إعداد النشر التلقائي عبر Coolify، ربط الدومينات وشهادات SSL، وأتمتة النسخ الاحتياطي لضمان بقاء مشروعك متاحاً وآمناً 24/7.",
            deliverable: "بيئة إنتاج مستقرة ومؤمّنة مع نشر سهل وقابلية توسع",
            tags: ["Linux VPS", "Docker", "Coolify", "Nginx / Traefik", "SSL & Backups"]
          }
        ]
      },
      workflow: {
        badge: "آلية العمل",
        title: "كيف نعمل معاً لتحويل فكرتك إلى نظام فعلي؟",
        subtitle: "خطوات واضحة ومنظمة تقلل المخاطر وتضمن لك رؤية كاملة للتقدم في كل مرحلة حتى استلام النظام وتشغيله.",
        steps: [
          {
            number: "01",
            icon: "ClipboardList",
            title: "تحليل المتطلبات وتحديد النطاق",
            desc: "نجلس معاً لفهم طبيعة عملك وأهدافك، ثم نحدد الميزات الأساسية، وهيكلة النظام، وخارطة التنفيذ، والتكلفة والمدة الزمنية بوضوح تام قبل البدء."
          },
          {
            number: "02",
            icon: "Code2",
            title: "التطوير والمعاينة المستمرة",
            desc: "أبدأ بتطوير النظام على دفعات أسبوعية منتظمة، مع توفير روابط ونسخ تجريبية مستمرة لتجرّب الواجهات وتتابع تقدم المشروع أولاً بأول دون انتظار النهاية."
          },
          {
            number: "03",
            icon: "Rocket",
            title: "الاختبار والنشر والدعم",
            desc: "يُختبر النظام بعناية لضمان السرعة والأمان، ثم يُرفع على السيرفرات السحابية ومتاجر التطبيقات مع تدريب فريقك وتقديم دعم فني مستمر بعد الإطلاق."
          }
        ],
        cta_prompt: "هل لديك فكرة مشروع أو نظام قائم يحتاج إلى تطوير أو إعادة هيكلة؟",
        cta_btn: "اطلب استشارة تقنية مجانية"
      },
      projects: {
        badge: "دراسة الحالات والمشاريع المكتملة",
        title: "مشاريع حقيقية تحل مشكلات تشغيلية وتعمل في الإنتاج",
        subtitle: "كل مشروع هنا بُني لحل حاجة تجارية واضحة: من تطبيقات المتاجر الرسمية إلى أنظمة الصرافة ونقاط البيع والـ ERP.",
        filters: {
          all: "جميع المشاريع",
          mobile: "تطبيقات الموبايل",
          saas: "الويب والأنظمة الإدارية",
          pos: "نقاط البيع والعتاد"
        },
        status_ready: "مكتمل • جاهز للإنتاج",
        status_live: "منشور ويعمل ميدانياً",
        labels: {
          problem: "المشكلة أو الحاجة",
          solution: "الحل البرمجي المنفذ",
          outcome: "القيمة والنتيجة النهائية للعمل",
          stack: "التقنيات المستخدمة"
        },
        view_screenshots: "معاينة الشاشات",
        request_similar: "اطلب نظاماً مشابهاً",
        live_preview: "زيارة الموقع",
        fallback_notice: "مشروع مكتمل • تفاصيل المعمارية"
      },
      lightbox: {
        close: "إغلاق المعاينة (Esc)",
        prev: "الصورة السابقة",
        next: "الصورة التالية",
        slide_info: "لقطة {current} من {total}",
        request_cta: "تحتاج نظاماً مشابهاً لعملك؟ اطلب عرضك الآن"
      },
      contact: {
        badge: "ابدأ مشروعك",
        title: "تواصل معي لبدء بناء نظامك القادم",
        subtitle: "أخبرني باختصار عن فكرتك أو التحدي التشغيلي الذي تواجهه، وسأرد عليك بتصور واضح وخطة تنفيذ عملية دون أي وسطاء.",
        direct_channels: "قنوات التواصل المباشر",
        direct_desc: "اختر الوسيلة الأنسب لك للتواصل الفوري عبر الهاتف أو البريد أو الشبكات المهنية:",
        form_title: "نموذج طلب مشروع سريع",
        form_desc: "املأ البيانات المختصرة وسيتم تجهيز رسالتك وإرسالها مباشرة عبر واتساب أو البريد الإلكتروني.",
        name_label: "الاسم الكامل",
        name_placeholder: "مثال: أحمد محمد / شركة الأفق",
        channel_label: "وسيلة التواصل المفضلة للرد عليك",
        channel_whatsapp: "واتساب",
        channel_email: "بريد إلكتروني",
        contact_value_whatsapp_label: "رقم الواتساب الخاص بك",
        contact_value_whatsapp_placeholder: "+963 9XX XXX XXX",
        contact_value_email_label: "بريدك الإلكتروني",
        contact_value_email_placeholder: "name@company.com",
        service_label: "نوع المشروع المطلوب",
        service_options: {
          mobile: "تطبيق موبايل / ديسكتوب (Flutter)",
          web: "نظام ويب / لوحة تحكم / API",
          pos: "نظام نقاط بيع (POS) وربط طابعات",
          cloud: "إعداد سيرفر سحابي / Docker / Coolify",
          full: "منظومة متكاملة (تطبيق + لوحة + سيرفر)"
        },
        ref_label: "مشروع مرجعي من المعرض (اختياري)",
        ref_placeholder: "اختر مشروعاً مشابهاً لطلبك (اختياري)...",
        notes_label: "وصف مختصر للمشروع أو الحاجة",
        notes_placeholder: "اشرح باختصار فكرة المشروع، الفئة المستهدفة، أو المشكلة التي تريد حلها...",
        btn_whatsapp: "إرسال الطلب عبر واتساب",
        btn_email: "إرسال الطلب عبر البريد الإلكتروني",
        validation_hint: "يرجى كتابة اسمك ووصف مختصر للمشروع لإرسال طلب واضح ودقيق.",
        dispatched_notice: "تم تجهيز طلبك وفتح قناة التواصل المختارة بنجاح.",
        guarantee: "رد مباشر من المهندس حسين غزال خلال ساعات — خصوصية تامة لفكرة مشروعك."
      },
      footer: {
        brand_tag: "aalij.dev — تطوير تطبيقات Flutter والأنظمة السحابية المتكاملة",
        nav_title: "روابط سريعة",
        rights: "جميع الحقوق محفوظة © {year} حسين غزال (Hussien Ghazal).",
        motto: "بناء أنظمة مستقرة تحل مشكلات الأعمال الحقيقية."
      }
    },
    en: {
      metaTitle: "aalij.dev | Hussien Ghazal — Production Flutter Apps & Full-Spectrum Systems",
      nav: {
        services: "Services",
        workflow: "How We Work",
        projects: "Case Studies",
        contact: "Contact",
        cta: "Start Project"
      },
      hero: {
        badge: "Available for New Projects — End-to-End Engineering to Production",
        title_prefix: "Hussien Ghazal",
        title_tag: "aalij.dev",
        title_highlight: "Turning Business Ideas & Operations into Reliable, Production-Ready Apps and Cloud Systems.",
        description: "I architect and build cross-platform Flutter mobile & desktop apps, scalable web platforms, admin dashboards, and APIs—paired with cloud server setup and POS hardware integration so your business runs on one dependable system.",
        cta_primary: "Start Your Project",
        cta_secondary: "View Work & Results",
        trust_points: [
          { value: "10+", label: "Completed Production-Ready Systems" },
          { value: "Flutter", label: "Unified iOS, Android & Desktop Apps" },
          { value: "Web & API", label: "Go, Laravel & React Admin Platforms" },
          { value: "100%", label: "Structured Delivery & Full Code Ownership" }
        ],
        blueprint: {
          header: "Project Delivery Blueprint • aalij.dev",
          status: "PRODUCTION READY",
          layers: [
            {
              title: "Client Apps & Interfaces",
              sub: "Smooth Flutter mobile & desktop apps with offline resilience"
            },
            {
              title: "Backend, APIs & Dashboards",
              sub: "Fast Go, Laravel & React portals for sales, inventory & accounting"
            },
            {
              title: "POS & Hardware Integration",
              sub: "Barcode scanners, silent thermal receipt printing & PDF generation"
            },
            {
              title: "Cloud Servers & Deployment",
              sub: "Hardened Linux VPS, Docker, Coolify pipelines & automated backups"
            }
          ],
          footer_left: "Direct engineering ownership from scoping to support",
          footer_right: "Hussien Ghazal"
        }
      },
      manifesto: {
        tag: "WHY AALIJ.DEV",
        quote: "Great software isn't about complex jargon—it's about solving real operational bottlenecks and giving your team and customers a fast, dependable system every single day.",
        author: "Hussien Ghazal • Software Engineer & Systems Architect"
      },
      services: {
        badge: "CORE SERVICES",
        title: "End-to-End Software Engineering Built for Growth",
        subtitle: "Clear, practical software solutions tailored for founders, startups, and established businesses—from mobile screens to cloud servers.",
        deliverable_label: "Deliverable:",
        items: [
          {
            id: "mobile",
            icon: "Smartphone",
            title: "Flutter Mobile & Desktop Apps",
            desc: "Production iOS, Android, and Windows apps built from a single codebase to lower costs and ship faster, with native RTL/LTR support, offline storage, and real-time sync.",
            deliverable: "Store-ready mobile apps + fast desktop cashier terminals",
            tags: ["Flutter", "iOS & Android", "Desktop POS", "Offline SQLite", "BLoC / Riverpod"]
          },
          {
            id: "web",
            icon: "Server",
            title: "Web Systems, APIs & Admin Dashboards",
            desc: "Multi-tenant SaaS platforms, ERP/CRM systems, and secure REST APIs engineered with Go, Laravel, and React so you can manage orders, teams, and finances in real time.",
            deliverable: "Control panel + fast secured API + clean relational database",
            tags: ["Laravel", "Go (Golang)", "React", "PostgreSQL / MySQL", "REST APIs"]
          },
          {
            id: "pos",
            icon: "Printer",
            title: "POS & Silent Cloud Printing Bridges",
            desc: "Custom retail and print-center point-of-sale solutions connecting web ERPs directly to thermal printers and barcode scanners for zero-dialog instant receipt printing.",
            deliverable: "Offline-resilient cashiers + silent automated thermal printing",
            tags: ["POS Systems", "Python / CUPS Bridge", "ESC/POS", "Barcode Scanners", "KDS"]
          },
          {
            id: "cloud",
            icon: "Cloud",
            title: "Cloud Servers & Infrastructure (DevOps)",
            desc: "Linux VPS provisioning and hardening, Docker containerization, Coolify CI/CD pipelines, custom domain & SSL routing, and automated database backups for 24/7 reliability.",
            deliverable: "Hardened production server with effortless deployment & scaling",
            tags: ["Linux VPS", "Docker", "Coolify", "Nginx / Traefik", "SSL & Backups"]
          }
        ]
      },
      workflow: {
        badge: "HOW WE WORK",
        title: "A Clear 3-Step Process from Idea to Launch",
        subtitle: "A transparent workflow designed to keep scope predictable, give you live visibility every week, and deliver a rock-solid product.",
        steps: [
          {
            number: "01",
            icon: "ClipboardList",
            title: "Requirements Analysis & Scoping",
            desc: "We align on your business goals, essential features, architecture plan, timeline, and budget upfront—zero guesswork before coding begins."
          },
          {
            number: "02",
            icon: "Code2",
            title: "Iterative Development & Live Previews",
            desc: "Development runs in structured milestones with regular staging previews so you can test features, review interfaces, and share feedback continuously."
          },
          {
            number: "03",
            icon: "Rocket",
            title: "Testing, Deployment & Support",
            desc: "Thorough performance and security checks followed by smooth deployment to cloud servers and app stores, plus ongoing technical support."
          }
        ],
        cta_prompt: "Ready to turn your idea or operational bottleneck into a dependable system?",
        cta_btn: "Request a Technical Consultation"
      },
      projects: {
        badge: "PROVEN CASE STUDIES",
        title: "Completed Systems Built for Real Business Operations",
        subtitle: "Every project solves a concrete business challenge—structured by Problem, Solution, and Business Outcome.",
        filters: {
          all: "All Projects",
          mobile: "Mobile Apps",
          saas: "Web, SaaS & ERP",
          pos: "POS & Hardware"
        },
        status_ready: "Completed • Production Ready",
        status_live: "Live in Production",
        labels: {
          problem: "Problem / Business Need",
          solution: "Implemented Solution",
          outcome: "Final Business Outcome",
          stack: "Core Stack"
        },
        view_screenshots: "Preview Screens",
        request_similar: "Request Similar System",
        live_preview: "Visit Live Site",
        fallback_notice: "Completed System • Architecture Specs"
      },
      lightbox: {
        close: "Close Gallery (Esc)",
        prev: "Previous Screenshot",
        next: "Next Screenshot",
        slide_info: "Screen {current} of {total}",
        request_cta: "Need a similar system for your business? Request it now"
      },
      contact: {
        badge: "START YOUR PROJECT",
        title: "Let's Build Your Next System Together",
        subtitle: "Share a brief overview of your project or operational challenge, and I'll reply directly with a clear technical approach and next steps.",
        direct_channels: "Direct Contact Channels",
        direct_desc: "Reach out directly on your preferred platform—mobile and desktop friendly:",
        form_title: "Quick Project Inquiry Form",
        form_desc: "Fill out these quick fields to generate and send your structured project brief via WhatsApp or Email.",
        name_label: "Full Name",
        name_placeholder: "e.g., Ahmad / Horizon Co.",
        channel_label: "Preferred Reply Channel",
        channel_whatsapp: "WhatsApp",
        channel_email: "Email",
        contact_value_whatsapp_label: "Your WhatsApp Number",
        contact_value_whatsapp_placeholder: "e.g., +963 9XX XXX XXX",
        contact_value_email_label: "Your Email Address",
        contact_value_email_placeholder: "name@company.com",
        service_label: "Project Type",
        service_options: {
          mobile: "Mobile / Desktop App (Flutter)",
          web: "Web Platform / Dashboard / API",
          pos: "POS System & Printer Integration",
          cloud: "Cloud Server / Docker / Coolify Setup",
          full: "Full Ecosystem (App + Dashboard + Server)"
        },
        ref_label: "Reference Project from Portfolio (Optional)",
        ref_placeholder: "Select a similar reference project (optional)...",
        notes_label: "Brief Project Description",
        notes_placeholder: "Briefly describe your business idea, main users, or problem you want solved...",
        btn_whatsapp: "Send via WhatsApp",
        btn_email: "Send via Email",
        validation_hint: "Please enter your name and a short project description for an accurate response.",
        dispatched_notice: "Your project brief is ready and opened in your selected channel.",
        guarantee: "Direct reply from engineer Hussien Ghazal within hours — complete confidentiality."
      },
      footer: {
        brand_tag: "aalij.dev — Full-Spectrum Flutter, Web/Backend & Cloud Engineering",
        nav_title: "Quick Links",
        rights: "All rights reserved © {year} Hussien Ghazal.",
        motto: "Building stable software that solves real business problems."
      }
    }
  },

  projects: [
    {
      id: "delivery-app",
      category: "mobile",
      categories: ["mobile", "saas"],
      live: true,
      title: {
        ar: "منظومة التوصيل والطلبات (ZD Delivery)",
        en: "ZD Delivery Full Logistics Ecosystem"
      },
      clientTag: {
        ar: "تطبيق عملاء iOS/Android + تطبيق كباتن + لوحة إدارة",
        en: "Customer Apps (iOS/Android) + Driver App + Dispatch"
      },
      problem: {
        ar: "الحاجة إلى منظومة توصيل متكاملة تربط المتاجر والزبائن والسائقين دون تأخير في تحديث الطلبات أو ضياع العناوين الدقيقة، مع إدارة مركزية للتسعير حسب المسافة.",
        en: "Local merchants and couriers needed a unified ordering and delivery system eliminating order delays, address confusion, and manual distance fee calculation."
      },
      solution: {
        ar: "تطوير 3 تطبيقات مترابطة بـ Flutter (تطبيق الزبائن لـ Android و iOS، وتطبيق السائقين) مدعومة بنواة مشتركة (zd_shared) ولوحة تحكم، مع تحديد المواقع على الخرائط والإشعارات الفورية.",
        en: "Engineered linked Flutter apps (Android/iOS Customer Apps + Captain Driver App) sharing a unified core module, interactive map address selection, and real-time order status notifications."
      },
      outcome: {
        ar: "إطلاق رسمي متكامل للمنظومة على الهواتف، مما سهّل استقبال الطلبات وتوزيعها على السائقين آلياً وتتبّع كل طلب من لحظة الإنشاء حتى التسليم.",
        en: "Successfully shipped a store-ready delivery ecosystem automating merchant order intake, courier assignment, and live end-to-end delivery tracking."
      },
      stack: ["Flutter", "Dart", "iOS & Android", "Google Maps", "Push Notifications", "REST API"],
      screenshots: [
        {
          src: "/images/projects/delivery-app/home_screen.png",
          fit: "contain",
          caption: {
            ar: "الشاشة الرئيسية لتطبيق العملاء (ZD Delivery) — استعراض المطاعم، البحث، والتقييم والوقت المتوقع",
            en: "Customer App Home Screen — Store catalog, search, and delivery time estimation"
          }
        },
        {
          src: "/images/projects/delivery-app/feature_banner.png",
          fit: "cover",
          caption: {
            ar: "الهوية البصرية الرسمية لتطبيق التوصيل على متجر Google Play",
            en: "Official Play Store Feature Graphic for ZD Delivery"
          }
        },
        {
          src: "/images/projects/delivery-app/zd_logo.png",
          fit: "contain",
          caption: {
            ar: "الشعار المعتمد لمنظومة ZD Delivery",
            en: "Master Brand Identity for ZD Delivery"
          }
        }
      ]
    },
    {
      id: "fadi-library",
      category: "pos",
      categories: ["pos", "saas"],
      live: true,
      domain: "https://fadi-library.top",
      title: {
        ar: "نظام إدارة مكتبة فادي والطباعة الصامتة (Fadi Library ERP)",
        en: "Fadi Library ERP & Silent Cloud Print System"
      },
      clientTag: {
        ar: "يعمل ميدانياً • fadi-library.top",
        en: "Live System • fadi-library.top"
      },
      problem: {
        ar: "ازدحام المبيعات اليومي في مركز الطباعة والقرطاسية، وتأخير الكاشير بسبب نافذة الطباعة اليدوية في المتصفح، مع صعوبة ضبط حسابات المحاضرات، محافظ الطلاب، ونسب الأساتذة والمواد الأولية.",
        en: "High cashier congestion caused by manual browser print prompts, alongside complex tracking of print jobs, paper waste, student wallets, and instructor royalties."
      },
      solution: {
        ar: "بناء نظام ERP سحابي بـ Laravel و Livewire وفق معمارية Modular Monolith (يضم أكثر من 20 جدولاً مترابطاً)، مع جسر محلي بلغة Python و CUPS يستقبل أوامر الطباعة السحابية ويوجهها مباشرة للطابعات بصمت تام.",
        en: "Built a modular Laravel & Livewire ERP backed by a normalized relational schema (print jobs, student wallets, inventory, teacher earnings, audits) paired with a Python/CUPS daemon for silent automated printing."
      },
      outcome: {
        ar: "إزالة نوافذ الطباعة اليدوية بالكامل، وتسريع خدمة الزبائن، وضبط الجرد الآلي للورق والأحبار والحسابات المالية في سجل تدقيق موثق.",
        en: "Eliminated manual print dialog delays, accelerated front-desk checkout, and established accurate automated inventory, wallet, and royalty accounting."
      },
      stack: ["Laravel", "Livewire", "Python CUPS Bridge", "MySQL", "Linux CUPS", "Tailwind CSS"],
      screenshots: [
        {
          src: "/images/projects/fadi-library/erd_schema.png",
          fit: "contain",
          caption: {
            ar: "المخطط الهيكلي الكامل لقاعدة البيانات (ERD) — يوضح جداول أوامر الطباعة، المخزون، المحافظ، وأرباح الأساتذة والتدقيق",
            en: "Full Relational Database Schema (ERD) covering print jobs, inventory, student wallets, teacher earnings & audits"
          }
        },
        {
          src: "/images/projects/fadi-library/fadi_logo.png",
          fit: "contain",
          caption: {
            ar: "شعار وهوية مكتبة فادي السحابية",
            en: "Fadi Library Print & Stationery Identity"
          }
        }
      ]
    },
    {
      id: "sham-link",
      category: "mobile",
      categories: ["mobile", "saas"],
      live: true,
      title: {
        ar: "منصة شام لينك للصرافة الرقمية (Sham Link)",
        en: "Sham Link Digital Currency Exchange Platform"
      },
      clientTag: {
        ar: "تطبيق عملاء Flutter + لوحة إدارة React + Laravel API",
        en: "Flutter App + React Dashboard + Laravel 12 API"
      },
      problem: {
        ar: "حاجة العملاء والوسطاء إلى منصة آمنة وموثوقة لتنفيذ طلبات التحويل والصرافة بأسعار حية متغيرة، مع معالجة سريعة لإيصالات الدفع وحماية صارمة ضد التلاعب بالطلبات.",
        en: "Exchangers and clients needed a trustworthy mobile platform for live-rate currency conversions with friction-free receipt submission and strict transaction security."
      },
      solution: {
        ar: "تطوير منظومة ثلاثية: تطبيق عملاء بـ Flutter و Riverpod، لوحة إدارة بـ React.js و Laravel Echo، وواجهة خلفية بـ Laravel 12 و MySQL 8، مع التقاط تلقائي لإيصالات PDF/صور عبر Share Intent وحماية عبر البصمة وتوقيع HMAC و SSL Pinning.",
        en: "Built a 3-tier platform: Flutter + Riverpod client app, React.js + Laravel Echo admin dashboard, and Laravel 12 + MySQL 8 API featuring Share Intent receipt capture, Biometrics, SSL Pinning, and HMAC request signing."
      },
      outcome: {
        ar: "تقليص خطوات إنشاء طلب التحويل وإرفاق الإيصال، وتحديث الأسعار والطلبات لحظياً أمام الموظفين مع حماية أمنية عالية لبيانات الجلسات والمعاملات.",
        en: "Streamlined order submission with automatic receipt capture, enabled real-time rate updates on the admin panel, and enforced banking-grade mobile API security."
      },
      stack: ["Flutter", "Riverpod", "Laravel 12 API", "React.js", "MySQL 8", "HMAC & SSL Pinning"],
      screenshots: []
    },
    {
      id: "farawla",
      category: "pos",
      categories: ["pos", "mobile"],
      live: true,
      title: {
        ar: "نظام فراولة لنقاط البيع (Strawberry POS)",
        en: "Farawla — Strawberry Offline-First POS"
      },
      clientTag: {
        ar: "كاشير متجاوب لمحلات الحلويات والعصائر",
        en: "Touchscreen Retail POS • Offline-First"
      },
      problem: {
        ar: "توقف عمليات البيع والفوترة في محلات العصائر والحلويات عند انقطاع الإنترنت أو بطئه، مع الحاجة لواجهة عربية سريعة تناسب شاشات اللمس والديسكتوب.",
        en: "Dessert shops and juice bars risked halted checkouts during internet dropouts and struggled with clunky interfaces unsuitable for high-speed touchscreens."
      },
      solution: {
        ar: "تصميم نظام نقاط بيع بـ Flutter 3.8 ومعمارية Clean Architecture و BLoC مع قاعدة بيانات محلية Drift SQLite للعمل 100% دون إنترنت، ومحرك مزامنة سحابي يعالج تعارض البيانات ودعم التقويم الهجري والميلادي.",
        en: "Architected an Offline-First Flutter POS powered by BLoC and Drift SQLite, providing zero-downtime local checkouts with conflict-aware background cloud sync and dual Hijri/Gregorian support."
      },
      outcome: {
        ar: "استمرارية بيع مستمرة بدون أي توقف بسبب الإنترنت، وسرعة استجابة عالية للكاشير أثناء ساعات الذروة مع تطابق كامل للبيانات على السحابة.",
        en: "Guaranteed uninterrupted retail operations regardless of internet availability, with rapid peak-hour cashier throughput and clean cloud synchronization."
      },
      stack: ["Flutter 3.8+", "BLoC", "Drift SQLite", "Clean Architecture", "Offline Sync", "Thermal POS"],
      screenshots: []
    },
    {
      id: "exchanger-pro",
      category: "saas",
      categories: ["saas"],
      live: true,
      domain: "https://yusef.wcar.fun",
      title: {
        ar: "منظومة الصرافة والوساطة المالية (Exchanger Pro SaaS)",
        en: "Exchanger Pro Multi-Tenant Financial SaaS"
      },
      clientTag: {
        ar: "سحابي متعدد المستأجرين • yusef.wcar.fun",
        en: "Multi-Tenant SaaS • yusef.wcar.fun"
      },
      problem: {
        ar: "صعوبة إدارة عدة مكاتب وحسابات صرافة وديون في منصة واحدة دون اختلاط البيانات، وخطر تضارب الأرصدة عند تنفيذ التحويلات المتزامنة.",
        en: "Managing multiple exchange desks and debt ledgers in one cloud app risked data leakage across tenants and race-condition balance discrepancies under concurrent entries."
      },
      solution: {
        ar: "بناء منصة سحابية متعددة المستأجرين بواجهة React و Vite، وخلفية عالية الأداء بلغة Go (Golang) مع عزل بيانات كل مستأجر في PostgreSQL واستخدام Redis لمنع التضارب وتأمين القيود المحاسبية.",
        en: "Developed a Multi-Tenant SaaS with a React/Vite interface and a concurrent Go REST API backed by PostgreSQL tenant isolation and Redis locking for strict ACID ledger safety."
      },
      outcome: {
        ar: "إدارة دقيقة للعملات والذمم المالية في بيئة سحابية سريعة ومعزولة لكل مكتب، مما يحمي الحسابات من الأخطاء المزدوجة ويسهّل المتابعة اليومية.",
        en: "Delivered fast, isolated multi-desk currency and receivable management that protects ledger accuracy and simplifies daily reconciliation."
      },
      stack: ["Go (Golang)", "React", "Vite", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
      screenshots: []
    },
    {
      id: "sahabite",
      category: "mobile",
      categories: ["mobile", "saas"],
      live: true,
      domain: "https://sahabite.top",
      title: {
        ar: "منصة صحابايت للوجبات الصحية والتغذية الذكية (SahaBite)",
        en: "SahaBite Healthy Meals & Smart Nutrition Platform"
      },
      clientTag: {
        ar: "تطبيق متكامل • sahabite.top",
        en: "Live Ecosystem • sahabite.top"
      },
      problem: {
        ar: "حاجة المستخدمين المهتمين بالصحة إلى منصة تجمع طلب الوجبات الصحية، التواصل مع الطهاة وأخصائيي التغذية، وتتبع التحديات والمكافآت والمدفوعات في تجربة واحدة.",
        en: "Health-conscious users lacked a unified platform combining healthy meal ordering, chef & nutritionist discovery, challenges, wallet payments, and AI nutrition assistance."
      },
      solution: {
        ar: "تطوير تطبيق Flutter شامل يضم أقسام الوجبات الصحية، البوفيه، الطهاة، أخصائيي التغذية، التحديات، المحفظة، تتبع الطلبات، ومزايا الذكاء الاصطناعي، مربوطاً بواجهة API عبر sahabite.top وإشعارات Firebase.",
        en: "Built a comprehensive Flutter client connecting users with chefs, nutritionists, healthy meal plans, challenges, digital wallet, live order tracking, and AI nutrition tools over the sahabite.top API."
      },
      outcome: {
        ar: "تجربة متكاملة تحفّز العملاء على الاستمرار عبر التحديات ونقاط المكافآت وتسهّل إدارة الطلبات والاشتراكات الصحية من مكان واحد.",
        en: "Created an engaging digital wellness & food ordering hub driving user retention through challenges, loyalty rewards, and seamless meal tracking."
      },
      stack: ["Flutter", "Provider", "AI Features", "Firebase", "REST API", "Wallet & Tracking"],
      screenshots: [
        {
          src: "/images/projects/sahabite/sahabite_logo.png",
          fit: "contain",
          caption: {
            ar: "هوية وشعار تطبيق صحابايت للوجبات الصحية",
            en: "Official Brand Identity for SahaBite"
          }
        }
      ]
    },
    {
      id: "car-inspection",
      category: "mobile",
      categories: ["mobile", "saas"],
      live: false,
      title: {
        ar: "نظام الفحص الفني للسيارات وإصدار التقارير (Car Inspection)",
        en: "Automotive Field Inspection & PDF Report System"
      },
      clientTag: {
        ar: "تطبيق فحص Flutter + خادم Go + تقارير PDF",
        en: "Flutter App + Go Backend + Certified PDF"
      },
      problem: {
        ar: "اعتماد مراكز فحص السيارات على استمارات ورقية بطيئة وصعوبة توثيق صور الأعطال وإصدار تقرير فني منسّق وموثوق للعميل فور انتهاء الفحص.",
        en: "Vehicle inspection centers relied on slow paper checklists and struggled to compile defect photos into clean, shareable technical certificates on the spot."
      },
      solution: {
        ar: "بناء تطبيق فحص ميداني بـ Flutter مع خادم خلفي بلغة Go وقاعدة SQLite/MySQL، يتيح تسجيل نتائج فحص المحرك والهيكل وإرفاق الصور وتوليد تقرير PDF منسّق مباشرة للمعاينة والمشاركة.",
        en: "Developed a Flutter inspection client paired with a Go backend that captures multi-point mechanical & body checkups with photos and compiles structured PDF reports on the fly."
      },
      outcome: {
        ar: "تحويل عملية الفحص إلى مسار رقمي منظم ينتج تقارير فنية احترافية جاهزة للإرسال الفوري للعميل عبر الهاتف والويب.",
        en: "Digitized the vehicle examination workflow into a fast, paperless pipeline outputting branded PDF inspection certificates immediately."
      },
      stack: ["Flutter", "Go (Golang)", "React", "Dart PDF", "Docker", "SQLite / MySQL"],
      screenshots: []
    },
    {
      id: "safanur",
      category: "mobile",
      categories: ["mobile"],
      live: false,
      title: {
        ar: "تطبيق صفا نور للتجارة الإلكترونية (Safanur Store)",
        en: "Safanur Modern E-Commerce Mobile App"
      },
      clientTag: {
        ar: "تطبيق متجر إلكتروني حديث بـ Flutter",
        en: "Flutter E-Commerce App • Clean Architecture"
      },
      problem: {
        ar: "حاجة العلامة التجارية إلى تطبيق تسوّق سريع وأنيق يعرض المنتجات والتصنيفات بوضوح باللغة العربية ويوفر تجربة تصفح وطلب سلسة على الهواتف.",
        en: "The retail brand needed a sleek, responsive Arabic-first shopping application with smooth product browsing, caching, and seamless order placement."
      },
      solution: {
        ar: "تطوير تطبيق متجر إلكتروني بـ Flutter وفق معمارية Clean Architecture وإدارة الحالة BLoC، مع دعم التوطين العربي الكامل، وتخزين الصور المؤقت (Cached Network Image)، وتأثيرات التحميل Shimmer.",
        en: "Built a modern Flutter e-commerce app using Clean Architecture and BLoC state management, complete Arabic localization, smart image caching, and polished skeleton loading states."
      },
      outcome: {
        ar: "واجهة تسوّق عصرية وخفيفة تمنح العملاء تجربة تصفح سريعة ومستقرة وجاهزة للربط المباشر مع المتجر والطلبات.",
        en: "Delivered a crisp, responsive mobile storefront providing fast product discovery and reliable checkout readiness."
      },
      stack: ["Flutter", "BLoC", "Clean Architecture", "Arabic RTL", "Cached Images", "REST API"],
      screenshots: [
        {
          src: "/images/projects/safanur/safanur_logo.png",
          fit: "contain",
          caption: {
            ar: "شعار وهوية متجر صفا نور للأزياء",
            en: "Safanur Retail Brand Identity"
          }
        }
      ]
    },
    {
      id: "adamtel",
      category: "saas",
      categories: ["saas", "mobile"],
      live: false,
      title: {
        ar: "منظومة آدم تيل للمكافآت وإدارة الموظفين (Adamtel)",
        en: "Adamtel Retail Loyalty & Employee Control System"
      },
      clientTag: {
        ar: "تطبيق عجلة هدايا تفاعلية + لوحة تحكم إدارية",
        en: "Interactive Spin-Wheel App + Admin Audit Panel"
      },
      problem: {
        ar: "رغبة متجر الاتصالات في تنشيط مبيعات الزبائن عبر عجلة جوائز تفاعلية، مع الحاجة الماسة لمنع التلاعب في الجوائز ومراقبة صلاحيات الموظفين وسجل الهدايا.",
        en: "The telecom retailer wanted to boost walk-in customer engagement with a prize wheel while preventing unauthorized draws and maintaining strict employee audit trails."
      },
      solution: {
        ar: "تطوير تطبيق Flutter يتضمن عجلة جوائز مخصصة (Custom Painter) مرتبطاً بواجهة خلفية PHP/MySQL تتحكم في أرصدة الهدايا وحسابات الموظفين وتوثّق كل سحب في سجل تاريخي محمي.",
        en: "Built a custom Flutter spin-the-wheel application integrated with a PHP/MySQL backend enforcing server-side prize control, employee authentication, and full gift history logs."
      },
      outcome: {
        ar: "رفع تفاعل الزبائن داخل المتجر مع ضمان رقابة إدارية كاملة وشفافة على كل جائزة يتم منحها.",
        en: "Increased in-store customer engagement while giving management full transparency and tamper-resistant control over prize distribution."
      },
      stack: ["Flutter", "Custom Painter", "PHP", "MySQL", "Admin Auth", "REST API"],
      screenshots: [
        {
          src: "/images/projects/adamtel/adamtel_header.png",
          fit: "contain",
          caption: {
            ar: "ترويسة وهوية نظام آدم تيل للمبيعات والمكافآت",
            en: "Adamtel Retail & Rewards Header"
          }
        },
        {
          src: "/images/projects/adamtel/adamtel_logo.png",
          fit: "contain",
          caption: {
            ar: "شعار آدم تيل الرسمي",
            en: "Official Adamtel Brand Logo"
          }
        }
      ]
    },
    {
      id: "juice-pos",
      category: "pos",
      categories: ["pos"],
      live: false,
      title: {
        ar: "نظام كاشير ومطبخ محلات العصائر (Juice Shop System)",
        en: "Juice Shop Cashier & Backend Management System"
      },
      clientTag: {
        ar: "تطبيق كاشير Flutter + خادم Laravel Livewire",
        en: "Flutter Cashier App + Laravel Livewire Backend"
      },
      problem: {
        ar: "الحاجة إلى نظام كاشير سريع وسهل التعلم لمحلات العصائر يقلل أخطاء الطلبات أثناء الازدحام ويربط الصندوق بالإدارة والمخزون مباشرة.",
        en: "Juice shops needed a fast, intuitive cashier interface to eliminate order errors during rush hours and keep sales synced directly with inventory management."
      },
      solution: {
        ar: "بناء تطبيق كاشير متعدد المنصات بـ Flutter متصل بلوحة تحكم خلفية مبنية بـ Laravel و Livewire لإدارة الأصناف والطلبات والتقارير اليومية.",
        en: "Created a cross-platform Flutter cashier application linked to a Laravel & Livewire backend for menu management, order processing, and daily sales reporting."
      },
      outcome: {
        ar: "تسريع تسجيل الطلبات عند الصندوق وتبسيط متابعة المبيعات اليومية لصاحب المحل في واجهة نظيفة وسلسة.",
        en: "Simplified front-counter order entry and gave shop owners clear visibility over daily sales and product movement."
      },
      stack: ["Flutter Desktop", "Laravel", "Livewire", "MySQL", "Tailwind CSS"],
      screenshots: [
        {
          src: "/images/projects/juice-pos/juice_logo.png",
          fit: "contain",
          caption: {
            ar: "شعار نظام كاشير محلات العصائر",
            en: "Juice Shop System Logo"
          }
        }
      ]
    }
  ]
};
