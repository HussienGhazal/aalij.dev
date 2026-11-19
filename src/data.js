// Centralized bilingual data and systems catalog for aalij.dev (Hussien Ghazal)

export const BRAND_DATA = {
  profile: {
    name: {
      ar: "حسين غزال",
      en: "Hussien Ghazal"
    },
    title: {
      ar: "مهندس برمجيات وأنظمة متكاملة",
      en: "Full-Spectrum Software & Systems Architect"
    },
    brandDomain: "aalij.dev",
    email: "hussien.ghazal98@gmail.com",
    phone: "+963949359837",
    whatsappUrl: "https://wa.me/963949359837",
    linkedinUrl: "https://www.linkedin.com/in/hussien-ghazal-548813286",
    githubUrl: "https://github.com/HussienGhazal",
    location: {
      ar: "حماة، سوريا 📍 متاح عالمياً للعمل عن بُعد",
      en: "Hama, Syria 📍 Available Worldwide Remotely"
    }
  },

  i18n: {
    ar: {
      nav: {
        philosophy: "فلسفة المعالجة",
        services: "القدرات الهندسية",
        projects: "الأنظمة الإنتاجية",
        contact: "طلب معالجة مشروع",
        cta: "تواصل واتساب"
      },
      hero: {
        badge: "متاح لاستلام الأنظمة الشاملة، المنصات السحابية، وتطبيقات الموبايل",
        title_prefix: "حسين غزال",
        title_tag: "aalij.dev",
        title_highlight: "حين تلتقي رشاقة المعمارية بدقة المعالجة الفائقة.",
        description: "في aalij.dev، نحمل المعنى الهندسي المزدوج للمُعالجة (Processing & Curing): نُعالِج تدفق البيانات والعمليات المتزامنة بسرعات قياسية، ونُعالِج الاختناقات التشغيلية الصعبة بمعمارية نظيفة وصامدة.",
        cta_primary: "اطلب استشارة لنظامك",
        cta_secondary: "استكشف الأنظمة الإنتاجية",
        stats_systems: "نظاماً إنتاجياً حقيقياً",
        stats_latency: "متوسط زمن معالجة الـ API",
        stats_ownership: "تملّك كامل من النواة للواجهة",
        stats_offline: "جاهزية 100% دون إنترنت (POS)"
      },
      manifesto: {
        tag: "البيان الهندسي",
        quote: "الكود العادي يعمل اليوم؛ أما المعمارية النظيفة فتصمد أمام المستقبل. من سيرفرات Linux وشبكات التوجيه، إلى السحابة وقواعد البيانات، وصولاً إلى شاشة الهاتف والعتاد الميداني — منظومة متصلة بلا انقطاع.",
        author: "حسين غزال | مؤسس aalij.dev"
      },
      services: {
        badge: "قدرات هندسية متكاملة",
        title: "تغطية شاملة لدورة حياة النظام البرمجي",
        subtitle: "لا حواجز بين طبقات التقنية. ننقل متطلبات عملك من مجرد فكرة إلى تطبيق هاتف سلس، وسيرفر عالي التزامن، وجسر مباشر مع أجهزة ونقاط البيع الميدانية.",
        items: [
          {
            id: "mobile",
            icon: "Smartphone",
            title: "تطبيقات الموبايل المتقدمة (Flutter)",
            desc: "تطبيقات إنتاجية لمنصات iOS و Android بمعمارية Clean Architecture و BLoC/MVVM. دعم كامل للعمل دون اتصال (Offline-First SQLite)، أداء فيزيائي فائق 60/120fps، وحماية مشفرة للمعلومات المحلية.",
            tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Offline SQLite", "Push Notifications"]
          },
          {
            id: "cloud",
            icon: "Server",
            title: "السحابة والأنظمة المالية عالية التزامن (Go & Laravel)",
            desc: "أنظمة Multi-Tenant SaaS ومنصات الصرافة والحوالات والديون المالية. نستخدم لغة Go (Golang) لتحقيق معالجة متزامنة خارقة بزمن أقل من 15ms، مع حلول Laravel و Livewire للمنظومات الإدارية والمحاسبية المعقدة.",
            tags: ["Go (Golang)", "Laravel", "Livewire", "Multi-Tenant SaaS", "REST APIs", "ACID Ledgers"]
          },
          {
            id: "hardware",
            icon: "Printer",
            title: "ربط العتاد، نقاط البيع، والطباعة الصامتة",
            desc: "ابتكار جسور برمجية متطورة (Python / CUPS HTTP Bridges) لطباعة الفواتير والملصقات تلقائياً وبشكل صامت من السحابة دون نوافذ متصفح. ربط أجهزة الكاشير، الموازين، وتخصيص أنظمة Android TV عبر ADB.",
            tags: ["Python Bridge", "CUPS", "ESC/POS", "Silent Cloud Print", "Thermal Printers", "ADB"]
          },
          {
            id: "database",
            icon: "Database",
            title: "معمارية قواعد البيانات والتخزين المؤقت اللحظي",
            desc: "تصميم جداول وعلاقات مرنة وموثوقة لقواعد البيانات (PostgreSQL, MySQL, SQLite) مع الفهرسة المركبة الفائقة، أقفال Redis الموزعة لمنع التضارب والقيود المزدوجة، وعزل كامل لبيانات المشتركين.",
            tags: ["PostgreSQL", "MySQL", "Redis Caching", "Distributed Locks", "ACID Compliance", "SQLite"]
          },
          {
            id: "devops",
            icon: "Cpu",
            title: "البنية التحتية، السيرفرات، وهندسة الشبكات",
            desc: "إدارة وتحصين خوادم Linux VPS (Ubuntu)، حاويات Docker، وتوجيه المسارات المتقدم عبر Traefik و CyberPanel. إعداد شبكات VPN آمنة وتجاوز القيود عبر WireGuard و Xray REALITY، مع أتمتة المزامنة.",
            tags: ["Linux Ubuntu", "Docker", "Traefik", "VPS Hardening", "WireGuard", "Bash Automation"]
          },
          {
            id: "ai",
            icon: "Sparkles",
            title: "الذكاء الاصطناعي واللوجستيات الميدانية الحية",
            desc: "دمج نماذج الرؤية الحاسوبية والذكاء الاصطناعي (مثل التعرف على الأطعمة وتحليل السعرات في SahaBite)، مقترناً بتتبع لحظي للسائقين والمواقع عبر الخرائط وبروتوكولات WebSockets خفيفة الاستهلاك.",
            tags: ["Gemini Vision AI", "WebSockets", "Live GPS Tracking", "Map Geocoding", "Background Sync"]
          }
        ]
      },
      projects: {
        badge: "معرض الأعمال والأنظمة المكتملة",
        title: "أنظمة برمجية أُنجزت بالكامل وتعمل في الميدان",
        subtitle: "نركز على القيمة التشغيلية الحقيقية التي يحققها كل نظام، مع دعم الصور الواقعية ودراسة المعمارية التحتية.",
        filters: {
          all: "جميع الأنظمة",
          mobile: "تطبيقات الموبايل",
          saas: "أنظمة SaaS و ERP",
          pos: "نقاط البيع والعتاد"
        },
        view_screenshots: "معاينة شاشات النظام",
        request_similar: "اطلب نظاماً مشابهاً",
        live_preview: "زيارة النطاق الحي",
        metrics_label: "الأثر التشغيلي:",
        tech_stack: "التقنيات المستخدمة:",
        fallback_notice: "نظام إنتاجي خاص — انقر للتفاصيل والمعمارية"
      },
      lightbox: {
        close: "إغلاق المعاينة (Esc)",
        prev: "الصورة السابقة",
        next: "الصورة التالية",
        slide_info: "صورة {current} من {total}",
        request_cta: "أعجبك هذا التصميم؟ اطلب نظاماً مشابهاً الآن"
      },
      contact: {
        badge: "جاهزون لبدء مشروعك",
        title: "لنبدأ في معالجة مشروعك القادم",
        subtitle: "سواء كنت تحتاج تطبيق موبايل عالي الجودة، منصة سحابية متعددة المستأجرين، أو نظام نقاط بيع متصل بالعتاد، سأكون معك من التخطيط حتى الإطلاق الميداني.",
        direct_channels: "قنوات التواصل المباشر",
        direct_whatsapp: "مراسلة فورية عبر واتساب",
        direct_email: "مراسلة رسمية عبر البريد الإلكتروني",
        direct_linkedin: "الملف الشخصي على لينكد إن",
        direct_github: "حساب GitHub والمشاريع",
        form_title: "منشئ طلب النظام المباشر",
        form_desc: "حدد متطلباتك وسنقوم بتجهيز رسالة فورية ومباشرة لواتساب أو البريد الإلكتروني دون تعقيد.",
        service_label: "نوع النظام أو الخدمة المطلوبة:",
        service_options: {
          mobile: "📱 تطبيق موبايل متكامل (Flutter iOS / Android)",
          saas: "☁️ نظام سحابي وإداري (Go / Laravel SaaS & ERP)",
          pos: "🖨️ نقطة بيع وربط عتاد وطباعة صامتة (POS & Hardware)",
          infra: "🔒 سيرفرات، استضافة، وبنية تحتية (Linux & VPS)",
          full: "⚡ منظومة متكاملة وشاملة من الصفر حتى الإطلاق"
        },
        ref_label: "نظام مرجعي من المعرض (اختياري):",
        ref_placeholder: "اختر أو انقر على 'اطلب نظاماً مشابهاً' من أي مشروع...",
        notes_label: "تفاصيل أو متطلبات إضافية:",
        notes_placeholder: "اكتب نبذة عن حجم المشروع، عدد المستخدمين المتوقع، أو الميزات المحددة التي ترغب بها...",
        btn_whatsapp: "إرسال الطلب عبر واتساب الآن",
        btn_email: "إرسال الطلب عبر البريد الإلكتروني",
        guarantee: "✓ رد هندسي مباشر خلال ساعات قليلة — بدون وسطاء أو تسويق وهمي."
      },
      footer: {
        brand_tag: "aalij.dev — هندسة ومعالجة الأنظمة المتكاملة",
        rights: "جميع الحقوق محفوظة © {year} حسين غزال (Hussien Ghazal).",
        motto: "مبني بأعلى معايير الأداء والاعتمادية."
      }
    },
    en: {
      nav: {
        philosophy: "Philosophy",
        services: "Capabilities",
        projects: "Production Systems",
        contact: "Contact & Order",
        cta: "WhatsApp Chat"
      },
      hero: {
        badge: "Available for End-to-End Systems, Cloud Platforms & Flutter Apps",
        title_prefix: "Hussien Ghazal",
        title_tag: "aalij.dev",
        title_highlight: "Where Architectural Agility Meets Sub-Millisecond Processing.",
        description: "At aalij.dev, we embrace the dual engineering essence of 'Aalij' (معالجة): processing high-concurrency data streams at blistering speeds, and curing deep operational bottlenecks with resilient, clean architecture.",
        cta_primary: "Request a System Audit",
        cta_secondary: "Explore Production Systems",
        stats_systems: "Production Systems Built",
        stats_latency: "Avg API Response Latency",
        stats_ownership: "Full Stack (Kernel to UI)",
        stats_offline: "100% Offline POS Reliability"
      },
      manifesto: {
        tag: "ENGINEERING MANIFESTO",
        quote: "Ordinary code works today; clean architecture survives the future. From Linux servers and edge routing, to cloud databases, down to the mobile screen and physical hardware—one unified resilient ecosystem.",
        author: "Hussien Ghazal | Founder of aalij.dev"
      },
      services: {
        badge: "FULL-SPECTRUM CAPABILITIES",
        title: "Complete System Lifecycle Ownership",
        subtitle: "No barriers between technical tiers. We translate your commercial operations into responsive mobile screens, ultra-low-latency servers, and direct hardware bridges.",
        items: [
          {
            id: "mobile",
            icon: "Smartphone",
            title: "Advanced Mobile Architecture (Flutter & Dart)",
            desc: "Production iOS and Android applications built with strict Clean Architecture and BLoC/MVVM. 100% Offline-First SQLite sync, 60/120fps fluid physics, and hardware-backed local data encryption.",
            tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Offline SQLite", "Push Notifications"]
          },
          {
            id: "cloud",
            icon: "Server",
            title: "High-Concurrency Cloud & Financial SaaS (Go & Laravel)",
            desc: "Multi-tenant SaaS platforms, currency exchange, remittances, and ledger accounting engines. We leverage Go (Golang) for sub-15ms concurrent processing alongside Laravel and Livewire for complex business ERPs.",
            tags: ["Go (Golang)", "Laravel", "Livewire", "Multi-Tenant SaaS", "REST APIs", "ACID Ledgers"]
          },
          {
            id: "hardware",
            icon: "Printer",
            title: "Hardware Bridges, POS & Silent Printing",
            desc: "Custom Python & CUPS HTTP bridges enabling instant, silent cloud invoice printing directly to thermal printers without browser dialog delays. Cash registers, scales, and Android TV customization via ADB.",
            tags: ["Python Bridge", "CUPS", "ESC/POS", "Silent Cloud Print", "Thermal Printers", "ADB"]
          },
          {
            id: "database",
            icon: "Database",
            title: "Database Engineering & Micro-Caching",
            desc: "Robust relational schemas for PostgreSQL, MySQL, and SQLite with composite indexing, distributed Redis mutex locking to eliminate race conditions, and absolute multi-tenant tenant isolation.",
            tags: ["PostgreSQL", "MySQL", "Redis Caching", "Distributed Locks", "ACID Compliance", "SQLite"]
          },
          {
            id: "devops",
            icon: "Cpu",
            title: "Linux VPS, Docker & Network Infrastructure",
            desc: "Hardened Ubuntu Linux servers, Docker container orchestration, and Traefik edge routing. Secure encrypted VPN tunnels (WireGuard, Xray REALITY), and automated Bash synchronization pipelines.",
            tags: ["Linux Ubuntu", "Docker", "Traefik", "VPS Hardening", "WireGuard", "Bash Automation"]
          },
          {
            id: "ai",
            icon: "Sparkles",
            title: "Computer Vision AI & Real-Time Logistics",
            desc: "Computer vision and nutritional AI pipelines (such as automated calorie and recipe breakdown in SahaBite), paired with low-latency live GPS fleet tracking and WebSocket notification brokers.",
            tags: ["Gemini Vision AI", "WebSockets", "Live GPS Tracking", "Map Geocoding", "Background Sync"]
          }
        ]
      },
      projects: {
        badge: "VERIFIED PRODUCTION SYSTEMS",
        title: "Battle-Tested Software Deployed in Production",
        subtitle: "We prioritize tangible business impact, proven architecture, and real screenshots over theoretical mockups.",
        filters: {
          all: "All Systems",
          mobile: "Mobile Apps",
          saas: "SaaS & ERP",
          pos: "POS & Hardware"
        },
        view_screenshots: "View Screenshots Gallery",
        request_similar: "Request Similar System",
        live_preview: "Live Production URL",
        metrics_label: "Operational Impact:",
        tech_stack: "Tech Stack:",
        fallback_notice: "Verified Production System — Click for full specs"
      },
      lightbox: {
        close: "Close Gallery (Esc)",
        prev: "Previous Screenshot",
        next: "Next Screenshot",
        slide_info: "Screenshot {current} of {total}",
        request_cta: "Need a similar application? Request your custom system now"
      },
      contact: {
        badge: "READY FOR COMMISSIONING",
        title: "Let's Diagnose and Build Your System",
        subtitle: "Whether you require a high-concurrency mobile application, a multi-tenant cloud SaaS, or a hardware-connected POS ecosystem, I provide end-to-end architectural ownership from day one.",
        direct_channels: "Direct Communication Channels",
        direct_whatsapp: "Instant Chat on WhatsApp",
        direct_email: "Official Inquiry via Email",
        direct_linkedin: "Professional Profile on LinkedIn",
        direct_github: "GitHub Repositories & Activity",
        form_title: "Direct System Inquiry Builder",
        form_desc: "Select your desired system type and customize details. This will format a ready-to-send brief directly to WhatsApp or Email.",
        service_label: "System or Architecture Type:",
        service_options: {
          mobile: "📱 Complete Mobile Application (Flutter iOS / Android)",
          saas: "☁️ Cloud Platform & ERP (Go / Laravel SaaS)",
          pos: "🖨️ POS, Hardware Bridge & Silent Printing",
          infra: "🔒 Linux VPS Hardening & Cloud Infrastructure",
          full: "⚡ Full-Spectrum End-to-End System (Kernel to UI)"
        },
        ref_label: "Reference System from Showcase (Optional):",
        ref_placeholder: "Select or click 'Request Similar System' on any card...",
        notes_label: "Additional Project Requirements:",
        notes_placeholder: "Brief overview of expected scale, target users, or key business features...",
        btn_whatsapp: "Dispatch Inquiry via WhatsApp",
        btn_email: "Dispatch Inquiry via Email",
        guarantee: "✓ Direct engineering response within hours — zero sales intermediaries."
      },
      footer: {
        brand_tag: "aalij.dev — High-Concurrency Architecture & Systems Engineering",
        rights: "All rights reserved © {year} Hussien Ghazal.",
        motto: "Engineered for maximum reliability, speed, and business continuity."
      }
    }
  },

  projects: [
    {
      id: "delivery-app",
      category: "mobile",
      categories: ["mobile", "saas"],
      title: {
        ar: "منظومة التوصيل والأسطول الميداني (Delivery Ecosystem)",
        en: "Full Delivery & Fleet Logistics Ecosystem"
      },
      clientTag: {
        ar: "تطبيقات منشورة على Play Store و App Store",
        en: "Production Apps on Play Store & App Store"
      },
      impact: {
        ar: "ربط فوري بين العملاء والسائقين والإدارة مع تتبع GPS وتحديثات لحظية بالثواني",
        en: "Real-time sync connecting customers, couriers, and central dispatch in seconds"
      },
      desc: {
        ar: "منظومة تجارية متكاملة تضم تطبيق العملاء (Flutter iOS/Android)، تطبيق الكباتن والسائقين (Driver App)، ولوحة تحكم مركزية للإدارة، مع حساب دقيق للأسعار، وتتبع حي للمسارات عبر الخرائط، وإشعارات فورية متقدمة.",
        en: "End-to-end commercial logistics ecosystem comprising Customer App (iOS/Android Flutter), Driver App, and central dispatch console with automatic distance-based pricing, live GPS telemetry, and WebSocket alerts."
      },
      stack: ["Flutter", "Dart", "Laravel / Go", "WebSockets", "Google Maps GPS", "Push Notifications", "PostgreSQL"],
      screenshots: [
        {
          src: "/images/projects/delivery-app/home_screen.png",
          caption: {
            ar: "واجهة تطبيق العملاء الرئيسية — استعراض المتاجر، السلة، والطلبات اللحظية",
            en: "Customer App Home Interface — Store catalogs, cart, and live tracking"
          }
        },
        {
          src: "/images/projects/delivery-app/feature_banner.png",
          caption: {
            ar: "بانر المتجر الرسمي ومنظومة التوصيل المتكاملة",
            en: "Official Play Store Feature Graphic & Delivery Branding"
          }
        },
        {
          src: "/images/projects/delivery-app/zd_logo.png",
          caption: {
            ar: "هوية وشعار منظومة التوصيل المعتمدة",
            en: "Official Master Brand Identity for Delivery Fleet"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "ضمان وصول التحديثات وموقع السائق دون تأخير وبأقل استهلاك ممكن لبطارية الهاتف، مع الحفاظ على تزامن الحالات عند انقطاع النت المؤقت.",
          en: "Maintaining sub-second courier telemetry and order state synchronization without draining mobile batteries or crashing during spotty connectivity."
        },
        solution: {
          ar: "تطبيق معمارية BLoC مع تدفقات WebSockets مضغوطة للإحداثيات، والتخزين المؤقت المحلي في SQLite لتسجيل التحركات وإعادة إرسالها تلقائياً.",
          en: "Built a BLoC-driven state layer with compressed delta coordinate streaming via WebSockets, supported by local SQLite sync queues."
        },
        metrics: {
          ar: "<100ms زمن بث الإحداثيات | عمل مستقر على مدار الساعة | توفير 40% من البطارية",
          en: "<100ms GPS Broadcast Latency | 24/7 Production Uptime | 40% Battery Conservation"
        }
      }
    },
    {
      id: "fadi-library",
      category: "pos",
      categories: ["pos", "saas"],
      title: {
        ar: "مكتبة فادي ومحرك الطباعة السحابية الصامتة (Fadi Library ERP)",
        en: "Fadi Library ERP & Silent Cloud Print Engine"
      },
      clientTag: {
        ar: "يعمل ميدانياً عبر fadi-library.top",
        en: "Active Production System at fadi-library.top"
      },
      domain: "https://fadi-library.top",
      impact: {
        ar: "طباعة سحابية صامتة فورية (160ms) دون نوافذ متصفح، وتوفير 70% من وقت الكاشير",
        en: "160ms zero-dialog silent thermal invoice printing, saving 70% of cashier transaction time"
      },
      desc: {
        ar: "نظام ERP متكامل لإدارة المكتبات ومراكز الطباعة والمبيعات بـ Laravel و Livewire، مع ابتكار جسر محلي (Python / CUPS HTTP Bridge) يستقبل أوامر الطباعة السحابية ويدفعها مباشرة للطابعات الحرارية والليزرية دون أي تدخل يدوي.",
        en: "Full-scale enterprise print center and inventory ERP powered by Laravel & Livewire. Features an innovative local Python / CUPS HTTP bridge that listens to cloud spool queues and outputs silent prints instantly bypassing OS dialogs."
      },
      stack: ["Laravel", "Livewire", "Python CUPS Bridge", "MySQL", "Thermal Printers", "Linux CUPS", "Tailwind CSS"],
      screenshots: [
        {
          src: "/images/projects/fadi-library/dashboard.png",
          caption: {
            ar: "لوحة التحكم المركزية لـ Fadi Library ERP — إدارة المبيعات، الفواتير، وطوابير الطباعة",
            en: "Central ERP Dashboard — Sales analytics, cloud invoicing, and print dispatch"
          }
        },
        {
          src: "/images/projects/fadi-library/print_queue.png",
          caption: {
            ar: "طابور الطباعة الصامت ومراقبة تدفق أوامر العتاد عبر جسر Python CUPS",
            en: "Silent Hardware Print Queue & Spool Monitoring via Python CUPS Bridge"
          }
        },
        {
          src: "/images/projects/fadi-library/erd_schema.png",
          caption: {
            ar: "المخطط الهيكلي لقاعدة البيانات (ERD) — سلامة العلاقات والقيود المحاسبية",
            en: "Complete Relational ERD Schema — Strict database constraints & accounting integrity"
          }
        },
        {
          src: "/images/projects/fadi-library/fadi_logo.png",
          caption: {
            ar: "شعار وهوية المنظومة الميدانية",
            en: "Official Fadi Library Brand Badge"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "توقف الكاشير المتكرر بسبب ظهور نافذة الطباعة اليدوية في المتصفح عند كل فاتورة ومستند.",
          en: "Cashiers suffered repetitive operational delays due to standard browser print preview prompts blocking high-throughput sales."
        },
        solution: {
          ar: "تطوير جسر خدمة محلي بلغة Python يستمع عبر Webhooks المشفرة للأوامر السحابية، ويغذي تيار البيانات مباشرة لـ CUPS والطابعات في 160ms.",
          en: "Engineered an on-premise Python daemon listening to authenticated cloud print webhooks and pumping raw PDF/ESC-POS streams to CUPS in 160ms."
        },
        metrics: {
          ar: "160ms من ضغط الزر لخروج الورقة | صفر تعليق في الطابعات | 70% سرعة أكبر في خدمة الزبائن",
          en: "160ms Cloud-to-Paper Speed | Zero Print Spool Crashes | 70% Accelerated Checkout"
        }
      }
    },
    {
      id: "exchanger-pro",
      category: "saas",
      categories: ["saas"],
      title: {
        ar: "منظومة الصرافة والوساطة المالية والديون (Exchanger Pro)",
        en: "Exchanger Pro High-Concurrency Financial SaaS"
      },
      clientTag: {
        ar: "سحابي متعدد المستأجرين (yusef.wcar.fun)",
        en: "Multi-Tenant SaaS at yusef.wcar.fun"
      },
      domain: "https://yusef.wcar.fun",
      impact: {
        ar: "أمان مالي صارم وزمن استجابة أقل من 15ms وحماية من أي قيد مزدوج عبر Go & Redis",
        en: "Sub-15ms response latency, double-entry ledger safety & distributed Redis locks"
      },
      desc: {
        ar: "نظام سحابي متعدد المستأجرين (Multi-Tenant SaaS) لإدارة الصرافة، تحويل العملات بأسعار متغيرة لحظياً، وإدارة دفاتر الديون والذمم المالية، مع واجهة React فائقة السرعة وخلفية مبنية بلغة Go (Golang) وقواعد بيانات PostgreSQL معزولة.",
        en: "High-concurrency multi-tenant financial SaaS managing real-time currency conversions, remittances, and complex accounts receivable. Powered by an ultra-fast Go REST API, PostgreSQL row-level security, and a React/Vite terminal UI."
      },
      stack: ["Go (Golang)", "React", "Vite", "PostgreSQL", "Redis Locks", "Docker", "Tailwind CSS"],
      screenshots: [
        {
          src: "/images/projects/fadi-library/erd_schema.png",
          caption: {
            ar: "معمارية القيود المزدوجة وعزل بيانات المستأجرين في PostgreSQL",
            en: "PostgreSQL Double-Entry Accounting Schema & Multi-Tenant Partitioning"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "منع أي احتمال لحدوث قيود مالية مزدوجة أو تضارب في الأرصدة عند تحويل العملات تحت ضغط آلاف المعاملات المتزامنة.",
          en: "Preventing race conditions, double-entry discrepancies, and balance desync during volatile currency swings across concurrent broker terminals."
        },
        solution: {
          ar: "تطبيق معمارية Go Concurrency مع قنوات آمنة وأقفال Redis الموزعة، وتنفيذ قيود الحسابات كمعاملات ACID صارمة في PostgreSQL.",
          en: "Implemented Go channels with distributed Redis mutex locks and executed double-entry transactions inside strict PostgreSQL ACID blocks."
        },
        metrics: {
          ar: "11.2ms متوسط زمن المعالجة | 0% أخطاء تسوية مالية | عزل تام لبيانات كل وسيط",
          en: "11.2ms Avg Execution Latency | 0% Ledger Discrepancy | Absolute Tenant Data Isolation"
        }
      }
    },
    {
      id: "sahabite",
      category: "mobile",
      categories: ["mobile", "saas"],
      title: {
        ar: "منظومة صحابايت الغذائية والذكاء الاصطناعي (SahaBite AI)",
        en: "SahaBite AI Nutrition & Lifestyle Ecosystem"
      },
      clientTag: {
        ar: "مربوط بالنطاق الحي sahabite.top",
        en: "Production System at sahabite.top"
      },
      domain: "https://sahabite.top",
      impact: {
        ar: "تحليل بصري للوجبات وتفكيك السعرات بالذكاء الاصطناعي مع مزامنة لحظية فائقة السرعة",
        en: "Computer Vision AI meal calorie breakdown with sub-second synchronization"
      },
      desc: {
        ar: "تطبيق موبايل متطور ونظام سحابي لإدارة التغذية والصحة اليومية، يعتمد على نماذج الذكاء الاصطناعي والرؤية الحاسوبية للتعرف على الوجبات من صور الهاتف وتفكيك السعرات والماكروز تلقائياً، مع دعم الخطط المخصصة ومزامنة البيانات في Go.",
        en: "Advanced mobile and cloud lifestyle ecosystem utilizing Gemini Computer Vision models to recognize dishes from phone snapshots, calculating calorie and macronutrient breakdowns in real time with a Go microservices backend."
      },
      stack: ["Flutter", "Go Backend", "Gemini Vision AI", "PostgreSQL", "Redis", "REST APIs"],
      screenshots: [
        {
          src: "/images/projects/sahabite/sahabite_logo.png",
          caption: {
            ar: "شعار وهوية منظومة صحابايت الذكية",
            en: "Official Brand Identity for SahaBite AI"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "معالجة صور الوجبات الكبيرة بسرعة واستخراج البيانات الغذائية دون تعليق واجهة المستخدم أو إرهاق السيرفر.",
          en: "Processing high-res food imagery through AI vision models without lagging the Flutter mobile interface or choking server bandwidth."
        },
        solution: {
          ar: "ضغط الصور على الجهاز قبل الرفع، واستخدام خط معالجة غير متزامن (Async Worker Pipeline) في Go يعيد النتائج عبر إشعار فوري.",
          en: "Implemented on-device image preprocessing and edge compression feeding an async Go worker pipeline returning instant AI inferences."
        },
        metrics: {
          ar: "زمن تحليل أقل من ثانيتين | دقة تصنيف غذائي عالية | تجربة مستخدم فائقة الرشاقة",
          en: "<2s Vision AI Inference | High Caloric Accuracy | 60fps Smooth Fluid Experience"
        }
      }
    },
    {
      id: "farawla",
      category: "pos",
      categories: ["pos", "mobile"],
      title: {
        ar: "منظومة فراولة ونقاط البيع الميدانية (Farawla & Farawla-POS)",
        en: "Farawla Commerce & Offline-First POS Engine"
      },
      clientTag: {
        ar: "نقاط بيع وتجارة سريعة للمتاجر",
        en: "Retail POS & Commerce Engine"
      },
      impact: {
        ar: "جاهزية 100% للعمل دون اتصال بالإنترنت (Offline-First SQLite) ومزامنة سحابية تلقائية",
        en: "100% Offline-First SQLite cash register uptime with zero-collision cloud sync"
      },
      desc: {
        ar: "منظومة متكاملة للتجارة ومنافذ البيع (POS): كاشير سريع مبني بـ Flutter للعمل على أجهزة الكمبيوتر والشاشات اللمسية، يدعم قارئات الباركود والطابعات الحرارية ويعمل بكفاءة 100% حتى مع انقطاع الإنترنت الكامل بفضل معمارية SQLite المحلية ومزامنة الطوابير الذكية.",
        en: "Retail cashier and mobile commerce solution: High-speed POS terminal running on desktop & tablet touchscreen hardware. Directly controls barcode scanners and thermal receipt printers with full offline autonomy via SQLite."
      },
      stack: ["Flutter Desktop/Mobile", "Offline-First SQLite", "REST API", "Barcode Scanners", "Thermal ESC/POS"],
      screenshots: [],
      caseStudy: {
        challenge: {
          ar: "انقطاع شبكة الإنترنت المتكرر في المتاجر الميدانية كان يوقف حركة البيع والفوترة بالكامل.",
          en: "Intermittent retail internet outages risked completely paralyzing customer checkouts and cash receipts."
        },
        solution: {
          ar: "بناء معمارية Offline-First تخزن وتفهرس المعاملات محلياً في SQLite مع طابور مزامنة آمن يعالج أي تعارضات تلقائياً عند عودة النت.",
          en: "Engineered an Offline-First architecture executing checkouts directly in local SQLite with an atomic sync queue resolving conflicts on reconnect."
        },
        metrics: {
          ar: "استمرارية عمل 100% أثناء انقطاع الإنترنت | مزامنة فورية غير محسوسة | قراءة باركود لحظية",
          en: "100% Checkout Continuity | Silent Auto-Sync on Reconnect | Instant Barcode Response"
        }
      }
    },
    {
      id: "adamtel",
      category: "saas",
      categories: ["saas", "mobile"],
      title: {
        ar: "منظومة آدم تل وعجلة المكافآت التفاعلية (Adamtel System)",
        en: "Adamtel Telecom & Interactive Rewards System"
      },
      clientTag: {
        ar: "نظام تفاعلي للمتاجر وإدارة الموظفين",
        en: "Interactive Retail & Employee Management"
      },
      impact: {
        ar: "إدارة رصيد، مكافآت زبائن تفاعلية، وسجل تدقيق مالي غير قابل للتلاعب",
        en: "Interactive customer engagement wheel with tamper-proof employee audit logs"
      },
      desc: {
        ar: "نظام تفاعلي لمتاجر الاتصالات وإدارة الموظفين يجمع بين تطبيق Flutter للألعاب والجوائز اليومية (Spin Wheel) ولوحة تحكم إدارية صارمة لإدارة أرصدة الموظفين والجوائز ومنع التلاعب مع تسجيل كل عملية في سجل تاريخي محمي.",
        en: "Interactive telecom engagement platform featuring a customized Flutter spin-the-wheel prize system paired with a secured administration portal managing employee accounts, gift quotas, and immutable audit logs."
      },
      stack: ["Flutter", "Dart", "PHP / MySQL", "Spin Wheel Canvas", "Admin RBAC", "REST API"],
      screenshots: [
        {
          src: "/images/projects/adamtel/adamtel_header.png",
          caption: {
            ar: "واجهة لوحة التحكم وسجلات العمليات والجوائز",
            en: "Administrative Overview & Transaction Logs Header"
          }
        },
        {
          src: "/images/projects/adamtel/adamtel_logo.png",
          caption: {
            ar: "الهوية الرسمية لشركة آدم تل",
            en: "Official Adamtel Corporate Branding"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "منع التحايل في منح الجوائز وضمان عدم قدرة أي موظف على تعديل نتائج العجلة أو تكرار السحب دون موافقة الإدارة.",
          en: "Preventing employee manipulation of customer reward draws and ensuring accurate tracking of distributed prizes."
        },
        solution: {
          ar: "تحديد نتائج السحب حسابياً على السيرفر قبل دوران العجلة، وربط كل حركة برقم فريد ومصادقة مشفرة للموظف.",
          en: "Generated cryptographically verified win outcomes server-side before wheel spin animations, writing each prize to an append-only ledger."
        },
        metrics: {
          ar: "صفر تلاعب في الجوائز | زيادة تفاعل الزبائن في المتجر | أمان إداري تام",
          en: "0% Fraudulent Wins | Substantial Customer Retention Lift | Full Operational Auditability"
        }
      }
    },
    {
      id: "safanur-sihty",
      category: "mobile",
      categories: ["mobile"],
      title: {
        ar: "منظومة صفا نور وصحتي للرعاية الطبية (Safanur & Sihty Health)",
        en: "Safanur & Sihty Healthcare Suites"
      },
      clientTag: {
        ar: "إدارة عيادات وملفات المرضى",
        en: "Clinical Records & Appointments Management"
      },
      impact: {
        ar: "تشفير عالي الأمان لملفات المرضى وتجربة مستخدم مريحة للمرضى والأطباء",
        en: "Encrypted patient medical records and streamlined clinical appointment scheduling"
      },
      desc: {
        ar: "تطبيقات متخصصة في القطاع الطبي لإدارة السجلات الصحية والمواعيد والوصفات الدوائية، مبنية وفق أحدث معايير Clean Architecture وتشفير البيانات المحلية لحماية خصوصية المرضى.",
        en: "Specialized healthcare mobile applications designed for patient history management, clinic reservations, and prescriptions with encrypted offline storage and accessible user experiences."
      },
      stack: ["Flutter", "Clean Architecture", "BLoC State", "AES-256 Storage", "REST API"],
      screenshots: [
        {
          src: "/images/projects/safanur/safanur_logo.png",
          caption: {
            ar: "شعار وهوية منظومة صفا نور الطبية",
            en: "Official Safanur Healthcare Brand Badge"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "حماية البيانات الطبية الحساسة على هواتف المرضى وضمان سهولة استخدام التطبيق لجميع الفئات العمرية.",
          en: "Safeguarding highly confidential patient health records while delivering an accessible UI for all age groups."
        },
        solution: {
          ar: "تطبيق تشفير AES-256 للبيانات المحلية مع دعم المصادقة الحيوية بالبصمة، وتصميم واجهات واضحة ومتباينة بعناية.",
          en: "Implemented hardware-backed AES-256 encryption with biometric authentication and high-contrast accessible layout components."
        },
        metrics: {
          ar: "أمان كامل للبيانات الطبية | وصول لحظي للسجلات في 20ms | استقرار 100%",
          en: "100% Medical Data Protection | 20ms Local File Lookup | Rock-solid App Stability"
        }
      }
    },
    {
      id: "car-inspection",
      category: "mobile",
      categories: ["mobile", "saas"],
      title: {
        ar: "نظام الفحص الفني للسيارات وإصدار التقارير المعتمدة",
        en: "Automotive Vehicle Inspection & Certified PDF Engine"
      },
      clientTag: {
        ar: "تطبيق فحص ميداني وتوليد تقارير",
        en: "Field Technical Audit & PDF Generation"
      },
      impact: {
        ar: "توليد ملفات PDF معتمدة من 10 صفحات بالصور والرسومات خلال 1.4 ثانية مباشرة على الجهاز",
        en: "1.4s on-device multi-page certified PDF report rendering with defect photos"
      },
      desc: {
        ar: "تطبيق فحص فني شامل للسيارات يتيح للمهندسين والمفتشين الميدانيين إجراء فحص كامل للمحرك والشاسيه والهيكل، ودمج صور الأعطال وتوليد تقرير فني معتمد بصيغة PDF فورياً ومشاركته للعميل عبر واتساب وسحابياً.",
        en: "Comprehensive technical automotive audit solution allowing field vehicle examiners to audit chassis, engine, and electrical systems, compiling photo-documented certified PDF inspection certificates on-device in 1.4 seconds."
      },
      stack: ["Flutter Web/Mobile", "Dart In-Memory PDF", "Camera Preprocessing", "Cloudflare S3", "REST API"],
      screenshots: [],
      caseStudy: {
        challenge: {
          ar: "توليد تقارير PDF ثقيلة متعددة الصفحات وعالية الدقة مع صور الأعطال مباشرة على هاتف المفتش دون انتظار السيرفر.",
          en: "Generating complex, high-resolution multi-page certified PDF dossiers with vehicle defect photos directly on low-spec field smartphones without server latency."
        },
        solution: {
          ar: "تطوير محرك داخلي في Flutter يبني ملفات PDF في الذاكرة، ويضغط الصور المرفقة، ويقوم بتوليد رابط سحابي فوري للمعاينة والمشاركة.",
          en: "Engineered an in-memory Dart PDF vector rendering pipeline that optimizes attached photos and uploads certified documents directly to object storage."
        },
        metrics: {
          ar: "1.4 ثانية لتوليد تقرير كامل | مشاركة فورية عبر واتساب | توثيق غير قابل للتعديل",
          en: "1.4s Full PDF Generation | Instant WhatsApp Dispatch | Tamper-Resistant Certification"
        }
      }
    },
    {
      id: "juice-pos",
      category: "pos",
      categories: ["pos"],
      title: {
        ar: "منظومة إدارة محلات العصائر ونقاط البيع (Juice Shop System)",
        en: "Juice Shop Cashier POS & Production Pipeline"
      },
      clientTag: {
        ar: "نظام كاشير ومطبخ مخصص",
        en: "Specialized Touchscreen POS & Kitchen Bridge"
      },
      impact: {
        ar: "تسريع إصدار الطلبات للشاشات اللمسية، خصم آلي للمكونات، وطباعة تذاكر التحضير",
        en: "Rapid touchscreen order entry with recipe inventory depletion and kitchen ticket printing"
      },
      desc: {
        ar: "نظام نقاط بيع مخصص لمحلات العصائر والمقاهي، يشمل شاشة كاشير سريعة متعددة اللمسات، ربط طابعات تذاكر المطبخ الحرارية، وإدارة ذكية لمخزون المكونات والفواكه حسب الوصفات.",
        en: "Specialized food & beverage cashier POS featuring multi-touch order dispatching, automatic recipe ingredient inventory deductions, and instant ESC/POS kitchen preparation ticket printing."
      },
      stack: ["Flutter Desktop", "Laravel Livewire", "Thermal Printers", "MySQL", "Tailwind CSS"],
      screenshots: [
        {
          src: "/images/projects/juice-pos/juice_logo.png",
          caption: {
            ar: "شعار وهوية منظومة نقاط بيع العصائر",
            en: "Juice Shop POS Master Logo"
          }
        }
      ],
      caseStudy: {
        challenge: {
          ar: "السرعة الفائقة المطلوبة أثناء ساعات الذروة وإصدار التذاكر للمطبخ فورياً دون أي تأخير في طابور الزبائن.",
          en: "Handling extreme rush-hour order throughput while printing instant preparation tickets for the kitchen line without bottlenecking queues."
        },
        solution: {
          ar: "تصميم واجهة لمسية متكيفة تتيح تسجيل الطلب في 3 نقرات فقط وطباعة التذكرة حرارياً خلال أقل من نصف ثانية.",
          en: "Crafted an optimized 3-tap order entry touch flow transmitting instant ESC/POS socket commands to bar printers in under 400ms."
        },
        metrics: {
          ar: "إنجاز الطلب في أقل من 5 ثوانٍ | طباعة فورية للمطبخ | دقة مخزون تامة",
          en: "<5s Average Order Time | Instant Bar Printer Emission | Accurate Inventory Depletion"
        }
      }
    },
    {
      id: "sham-link",
      category: "mobile",
      categories: ["mobile", "saas"],
      title: {
        ar: "شام لينك وسيريا بوب (Sham-Link & SyriaPop Platforms)",
        en: "Sham-Link & SyriaPop On-Demand Platforms"
      },
      clientTag: {
        ar: "دليل خدمات وربط مزودي الخدمة بالخرائط",
        en: "Service Directory & On-Demand Matching"
      },
      impact: {
        ar: "ربط فوري بين مزودي الخدمات والزبائن مع تتبع الخرائط الحية وإشعارات بالخلفية",
        en: "Real-time client-provider geo-matching with interactive maps and background sync"
      },
      desc: {
        ar: "منصات خدمية وتجارية تربط المهنيين ومقدمي الخدمات بالزبائن جغرافياً في الوقت الفعلي، مع توجيه الخرائط التفاعلية وإرسال إشعارات التوافق الفورية عبر WebSockets وخدمات الخلفية التلقائية في أندرويد.",
        en: "Service matching and on-demand merchant platform featuring interactive map layers, real-time geohashed provider dispatching, background rate synchronization services, and push alerts."
      },
      stack: ["Flutter", "WebSockets", "Leaflet Maps", "Push Notifications", "Android Background Services"],
      screenshots: [],
      caseStudy: {
        challenge: {
          ar: "تحديث مسارات الخرائط لحظياً ومزامنة الأسعار في الخلفية دون استنزاف بطارية الهاتف.",
          en: "Streaming real-time coordinates and synchronizing live exchange rates in the background without high mobile battery consumption."
        },
        solution: {
          ar: "استخدام مرشحات جغرافية ذكية وضغط تدفقات الإحداثيات المنقولة عبر WebSockets مع معمارية BLoC لعزل إعادة رسم الخريطة.",
          en: "Applied geohashing filters and compressed coordinate streams over WebSockets, decoupling map re-renders using stream-isolated BLoC architecture."
        },
        metrics: {
          ar: "تحديث موقع السائق خلال <100ms | توفير 40% من البطارية | ملاحة سلسة",
          en: "<100ms Telemetry Sync | 40% Battery Conservation | Smooth Map Viewports"
        }
      }
    },
    {
      id: "matbakhy-svufood",
      category: "mobile",
      categories: ["mobile", "saas"],
      title: {
        ar: "مطبخي وطعام الجامعة (Matbakhy & SVUfood Meal Systems)",
        en: "Matbakhy & SVUfood Meal Ordering Platforms"
      },
      clientTag: {
        ar: "إدارة مطابخ سحابية وتوصيل جامعي",
        en: "Cloud Kitchen & Campus Food Dispatch"
      },
      impact: {
        ar: "إدارة دورة حياة الوجبات، شاشات KDS للمطابخ، وتوصيل مئات الوجبات خلال فترات الاستراحة",
        en: "Kitchen Display Screens (KDS) managing 500+ orders/hour peak campus traffic"
      },
      desc: {
        ar: "أنظمة متكاملة لطلب وتوصيل وجبات المطابخ السحابية والمقاصف الجامعية، مزودة بشاشات تحضير تفاعلية للمطابخ (KDS) ومزامنة مرحلية فورية لحالة الطلب بالثواني.",
        en: "Comprehensive meal dispatching and university campus cafeteria systems featuring synchronized Kitchen Display Screens (KDS), driver routing, and sub-second live order progression tracking."
      },
      stack: ["Flutter", "Laravel Backend", "WebSockets", "Redis Queues", "Push Messaging"],
      screenshots: [],
      caseStudy: {
        challenge: {
          ar: "تكدس الطلبات المفاجئ في فترات استراحة الجامعة وحاجة المطبخ لشاشة تحضير تفاعلية لا تحتاج لإعادة تحميل الصفحة.",
          en: "Sudden order surges during university class breaks overwhelming kitchen staff without a unified real-time ticket display."
        },
        solution: {
          ar: "بناء طوابير معالجة في Redis مع شاشة KDS مبنية بـ WebSockets تعيد ترتيب التذاكر تلقائياً بحسب زمن التحضير المتوقع.",
          en: "Deployed Redis job queues powering a WebSocket-driven Kitchen Display System that dynamically sorts tickets by preparation time."
        },
        metrics: {
          ar: "معالجة أكثر من 500 طلب/ساعة بسلاسة | انخفاض وقت الانتظار 35% | تتبع دقيق",
          en: "500+ Orders/Hour Capacity | 35% Reduced Wait Times | Real-Time Stage Progression"
        }
      }
    },
    {
      id: "yep-center",
      category: "saas",
      categories: ["saas"],
      title: {
        ar: "منظومة مركز يب التعليمي وإدارة التدريب (Yep Center ERP)",
        en: "Yep Center Educational Platform & Training ERP"
      },
      clientTag: {
        ar: "منصة تعليمية وإدارية متكاملة",
        en: "Educational Institute & Training ERP"
      },
      impact: {
        ar: "إدارة الدورات، حضور الطلاب، الأقساط، وسجل صلاحيات دقيق وغير قابل للتلاعب",
        en: "Granular RBAC access control and immutable audit logs for tuition fee management"
      },
      desc: {
        ar: "منصة إدارية متكاملة للمراكز التعليمية والتدريبية بحماة، تتولى إدارة شؤون الطلاب، تسجيل الحضور، جداول المقررات، وأقساط الرسوم الدراسية، مع نظام صلاحيات صارم (RBAC) وسجل تدقيق غير قابل للحذف.",
        en: "Comprehensive educational administration portal handling multi-tier vocational course schedules, student attendance tracking, tuition billing, and strict Role-Based Access Control (RBAC) with immutable audit logging."
      },
      stack: ["Laravel", "Livewire", "MySQL", "Role-Based RBAC", "REST APIs", "Tailwind CSS"],
      screenshots: [],
      caseStudy: {
        challenge: {
          ar: "إدارة الصلاحيات الدقيقة لعشرات الموظفين والمدربين مع حماية سجلات الحسابات والمدفوعات من أي تعديل غير مصرح به.",
          en: "Administering granular permissions across staff and teachers while maintaining audit integrity for student fee collections."
        },
        solution: {
          ar: "تصميم نظام أذونات صارم (RBAC) مع تسجيل كل حركة مالية في جدول تدقيق مشفر غير قابل للحذف (Immutable Audit Log).",
          en: "Built a role-based access engine (RBAC) with immutable audit logging tracking every transaction, attendance stamp, and grade revision."
        },
        metrics: {
          ar: "إدارة آلاف الطلاب والمتدربين | صفر اختراقات للأذونات | تقارير إحصائية فورية",
          en: "Thousands of Trainees Managed | Zero Permission Breaches | Instant Accurate Reporting"
        }
      }
    }
  ]
};
