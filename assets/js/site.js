// site.js – i18n, mobile nav, scroll reveal, contact form
document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY
  // --------------------------------------------------------------
  const translations = {
    tr: {
      "nav-home": "Ana Sayfa",
      "nav-about": "Hakkımda",
      "nav-courses": "Akademik Çalışmalar",
      "nav-projects": "Projeler",
      "nav-contact": "İletişim",
      "nav-cv": "CV İndir",
      "hero-title-part1": "Yapay zekayı öğreniyorum, araştırıyorum ve",
      "hero-title-part2": "geliştiriyorum...",
      "hero-lead": "Ege Üniversitesi'nde Bilgi Teknolojileri doktora öğrencisiyim. Geometric Deep Learning, Graph Neural Networks ve yapısal biyoinformatik üzerine çalışıyor, matematiksel temelli ve ölçeklenebilir yapay zeka çözümleri geliştiriyorum.",
      "hero-projects-btn": "Projeleri Gör",
      "hero-courses-btn": "Akademik Çalışmalar",
      "hero-github-btn": "GitHub",
      "meta-bs-gpa-label": "Lisans GPA",
      "meta-ms-gpa-label": "Yüksek Lisans GPA",
      "meta-phd-gpa-label": "Doktora GPA",
      "section-find-eyebrow": "Ne bulacaksın",
      "section-content-title": "Site içeriği",
      "card-courses-title": "Akademik Dersler",
      "card-courses-desc": "Lisans, yüksek lisans ve doktora programlarında aldığım tüm derslerin listesi.",
      "card-courses-tag1": "Lisans",
      "card-courses-tag2": "YL / Doktora",
      "card-courses-btn": "Akademik Çalışmalara Git →",
      "card-projects-title": "Projeler ve Demolar",
      "card-projects-desc": "FastAPI, PyTorch ve TensorFlow ile geliştirdiğim, tarayıcıdan çalıştırabildiğin demolar.",
      "card-projects-tag1": "FastAPI",
      "card-projects-tag2": "PyTorch",
      "card-projects-btn": "Demoları Gör →",
      "card-about-title": "Hakkımda",
      "card-about-desc": "Eğitim zaman çizelgesi, teknik yetkinlikler ve yayınlar.",
      "card-about-tag1": "CV",
      "card-about-tag2": "Yayınlar",
      "card-about-btn": "Profili Gör →",
      "footer-copyright": "© 2026 Ahmet Çolak. Tüm hakları saklıdır.",
      "footer-email": "E-posta",
      "footer-linkedin": "LinkedIn",
      "footer-github": "GitHub",

      // --- Akademik Çalışmalar (courses) ---
      "courses-eyebrow": "Akademik Çalışmalar",
      "courses-title-part1": "Tez, Raporlar",
      "courses-title-part2": "ve Dersler",
      "courses-lead": "Yüksek lisans tezim, doktora ders raporları ve aldığım derslerin tam listesi.",
      "courses-thesis-title": "Yüksek Lisans Tezi",
      "thesis-title": "Çizge Teorisi ile Karmaşık Sistemlerin Zedelenebilirlik Analizi: Baskınlık Yaklaşımı",
      "thesis-abstract": "Bu tezde, orta ve merkezi çizgeler ile altıgen kaktüs zincirleri üzerinde kısıtlı ayrık baskınlık sayısı incelenmiş; kesin formüller ve sınırlar elde edilmiştir. Ayrıca herhangi bir çizge için kaba kuvvet algoritması sunulmuştur.",
      "thesis-tag1": "Çizge Teorisi",
      "thesis-tag2": "Baskınlık",
      "thesis-tag3": "Altıgen Kaktüs",
      "thesis-tag4": "Orta/Merkezi Çizgeler",
      "thesis-download": "Tezi İndir (PDF)",
      "courses-reports-title": "Doktora Ders Projesi Raporları",
      "report1-title": "RDD Tabanlı Topolojik Maskeleme (Çizge Teorisinde Ölçüm Parametreleri)",
      "report1-desc": "GNN'lerde aşırı düzleştirme problemini deterministik Kısıtlı Ayrık Baskınlık (RDD) ile çözen topolojik maskeleme yöntemi. Heterofilik graflarda (WebKB Texas) %68 doğruluk ve kararlı yakınsama sağlanmış, homofilik graflarda (ZINC12k) sınırlı kaldığı gösterilmiştir.",
      "report1-tag1": "RDD",
      "report1-tag2": "GNN",
      "report1-tag3": "Heterofili",
      "report1-tag4": "Oversmoothing",
      "report2-title": "Cebirsel Değişmezler ve GNN Gömülerinin Hibrit Füzyonu (Cebirsel Çizge Algoritmaları)",
      "report2-desc": "GNN kodlayıcı gömüleri ile normalize Laplacian özdeğerlerini birleştiren hibrit füzyonun eleştirel analizi. Düğüm-düzeyi heterofilik görevlerde broadcast spektral vektörün çoğunluk sınıfı çöküşüne yol açtığı; hibrit füzyonun GNN-yalnız performansını aşamadığı matematiksel ve deneysel olarak gösterilmiştir.",
      "report2-tag1": "Spektral Graf Teorisi",
      "report2-tag2": "GNN",
      "report2-tag3": "Hibrit Füzyon",
      "report2-tag4": "Laplacian",
      "report-download": "Raporu İndir (PDF)",
      "courses-list-title": "Ders Listesi",
      "courses-grad-title": "Yüksek Lisans Dersleri",
      "courses-phd-title": "Doktora Dersleri",
      "course-g-1": "Graph Theory and Complex Networks I–II",
      "course-g-2": "Mathematical Analysis and Design of Algorithms I",
      "course-g-3": "Advanced Data Structures",
      "course-g-4": "Extremal Problems and Special Graphs",
      "course-g-5": "High‑Performance Computing",
      "course-g-6": "Communication Networks and Vulnerability",
      "course-phd-1": "Algebraic Graph Algorithms",
      "course-phd-2": "Measurement Parameters in Graph Theory",
      "course-phd-3": "Machine Learning",
      "course-phd-4": "Algorithm Complexity Analysis",

      // --- About (Hakkımda) ---
      "about-eyebrow": "Hakkımda",
      "about-lead": "AI araştırmacısı, veri bilimci ve Ege Üniversitesi International Computer Institute'ta Bilgi Teknolojileri doktora öğrencisiyim. Çalışmalarım Geometric Deep Learning, Graph Neural Networks (GNN'ler), Spektral Graf Teorisi ve yapısal biyoinformatik (özellikle protein dinamikleri) üzerine yoğunlaşıyor. Matematiksel temelli, deterministik ve ölçeklenebilir yapay zeka çözümleri tasarlamaya odaklanıyorum.",
      "about-timeline-eyebrow": "Zaman çizelgesi",
      "about-timeline-title": "Eğitim",
      "about-edu1-title": "Doktora, Bilgi Teknolojisi",
      "about-edu1-desc": "Ege Üniversitesi, International Computer Institute · İzmir",
      "about-edu2-title": "Yüksek Lisans, Bilgisayar Bilimleri (Tezli)",
      "about-edu2-desc": "Ege Üniversitesi, Fen Bilimleri Enstitüsü · İzmir — GNO: 4.00",
      "about-edu2-thesis": "Tez: \"Çizge Teorisi ile Karmaşık Sistemlerin Zedelenebilirlik Analizi: Kısıtlı Ayrık Baskınlık Yaklaşımı\" — bu çalışma RDD tabanlı topolojik maskeleme projesinin temelini oluşturuyor.",
      "about-edu3-title": "Lisans, Matematik",
      "about-edu3-desc": "İzmir Yüksek Teknoloji Enstitüsü · İzmir — GPA: 2.96, 2 Onur Belgesi",
      "about-skills-eyebrow": "Yetkinlikler",
      "about-skills-title": "Teknik araçlar",
      "about-research-eyebrow": "Akademik araştırma",
      "about-research-title": "Öne çıkan çalışmalar",
      "about-research1-title": "RDD Tabanlı Topolojik Maskeleme",
      "about-research2-title": "Cebirsel Değişmezler ve GNN Gömülerinin Hibrit Füzyonu",
      "about-research3-title": "RAG Arama Motoru",
      "about-research4-title": "DomiPlan: Çok Kiracılı Ders Programı Uzman Sistemi",
      "about-research-btn": "Akademik Çalışmalara Git →",
      "about-experience-eyebrow": "Deneyim",
      "about-experience-title": "İş Deneyimi",
      "about-job-title": "Veri Bilimci — Andromedy Digital Solutions",
      "about-job-desc": "İzmir — Uydu görüntüleri (.tif) ve GeoJSON verisinden tarımsal arazi sınırı tespiti (Random Forest ve CNN, F1‑Score: 0.83).",
      "about-certs-eyebrow": "Belgeler",
      "about-certs-title": "Sertifikalar",
      "about-cert1-title": "Google Proje Yönetimi",
      "about-cert1-desc": "Profesyonel Sertifika — 6 kurs: proje başlatma, planlama, yürütme ve çevik proje yönetimi.",
      "about-cert2-title": "LLM ve Yapay Zeka Sertifikası",
      "about-cert2-desc": "100+ saatlik program: Transformer mimarileri, RAG, LangChain, RLHF, model sıkıştırma ve Docker/Streamlit ile üretim dağıtımı.",
      "about-cert3-title": "Yapay Zeka ve Makine Öğrenmesi — Başarı Belgesi",
      "about-cert3-desc": "Marmara, ODTÜ, İTÜ ve Boğaziçi Üniversitesi katkılarıyla düzenlenen modül sınavı.",
      "about-certs-showall": "Tüm Sertifikaları Göster (7)",
      "about-cert4-title": "Derin Öğrenme Eğitimi",
      "about-cert4-desc": "Tamamlama belgesi.",
      "about-cert5-title": "Web Uygulamaları Geliştirme Eğitimi",
      "about-cert5-desc": "Tamamlama belgesi.",
      "about-cert6-title": "Girişimciler için İK Eğitimi",
      "about-cert6-desc": "Tamamlama belgesi.",
      "about-cert7-title": "Girişimciler için Finans Eğitimi",
      "about-cert7-desc": "Tamamlama belgesi.",
      "about-cert8-title": "Girişimciler için Hukuk Eğitimi",
      "about-cert8-desc": "Tamamlama belgesi.",
      "about-cert9-title": "Temel Girişimcilik Eğitimi",
      "about-cert9-desc": "Tamamlama belgesi.",
      "about-cert10-title": "Bilgi Teknolojileri Stajı",
      "about-cert10-desc": "Uygulamalı Excel, Photoshop, AutoCAD Teknikleri, Python Kodlama.",

      // --- Focus (Odaklandıklarım) ---
      "focus-eyebrow": "Güncel",
      "focus-title": "Odaklandıklarım",
      "focus-text": "Halihazırda Yapay Zeka ve Teknoloji Akademisinin Bootcamp çalışmasındayım. Ekip arkadaşlarımla beraber yeterli desteği gördüğümüzde dijital gardrobumuzu hizmetinize sunmayı istiyoruz. Bu projede VTON ve LLM yeteneklerini birleştirip size harika bir stilist çıkarmak istiyoruz.\n\nDiğer yandan Doktorada Ekip arkadaşlarımla beraber Proteinlerin geçiş yolu kestirimini yapmaya çalışıyoruz biraz büyük çaplı bir proje ama ümidimiz var.\n\nAyrıca Türkiye Yapay Zeka Akademisi ve Huawei Student Developers (HSD) iş birliğiyle düzenlenen Veri Bilimi ve Makine Öğrenmesi Bootcamp'i programına kabul edildim. Burada da eğitimime devam edeceğim. Tekrardan ziyan gelmez diyelim.",

      // --- Projects (Projeler) ---
      "projects-eyebrow": "Portfolyo",
      "projects-title-part1": "Projeler",
      "projects-title-part2": "Demolar",
      "projects-lead": "FastAPI, PyTorch ve TensorFlow ile geliştirdiğim projelerin çalışan demo versiyonları.",
      "project1-title": "RAG Arama Motoru",
      "project1-desc": "BM25/TF‑IDF, anlamsal arama ve CLIP çokkipli aramayı birleştiren hibrit sıralamalı (Weighted + RRF) film arama sistemi.",
      "project1-note": "→ Müşteri destek ve doküman aramaya doğrudan uygulanabilir.",
      "project2-title": "DomiPlan: Ders Programlama Uzman Sistemi",
      "project2-desc": "Google OR‑Tools CP‑SAT çözücüsü ile NP‑Zor okul ders programlama problemini optimize eden çok kiracılı FastAPI backend.",
      "project2-note": "→ Günler süren manuel programlamayı otomatikleştirir.",
      "project3-title": "Tarımsal Arazi Sınırı Tespiti",
      "project3-desc": "Uydu görüntüleri (.tif) ve GeoJSON verisinden Random Forest ve CNN ile arazi sınırı tespiti (F1‑Score: 0.83).",
      "project3-note": "→ Tarım sigortası ve arazi denetiminde manuel ölçümü ortadan kaldırır.",
      "project-badge": "Demo Yakında",

      // --- Contact (İletişim) ---
      "contact-eyebrow": "İletişim",
      "contact-title": "Konuşalım",
      "contact-lead": "Bir proje, işbirliği fikri veya sadece merhaba demek için yazabilirsin.",
      "contact-name-label": "Ad Soyad",
      "contact-email-label": "E-posta",
      "contact-message-label": "Mesaj",
      "contact-submit-btn": "Mesajı Gönder",
      "contact-linkedin-label": "LinkedIn",
      "contact-github-label": "GitHub"
    },
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-courses": "Academic Work",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "nav-cv": "Download CV",
      "hero-title-part1": "Learning, researching, and",
      "hero-title-part2": "developing AI...",
      "hero-lead": "I'm a PhD candidate in Information Technology at Ege University. I work on Geometric Deep Learning, Graph Neural Networks, and structural bioinformatics, developing mathematically grounded and scalable AI solutions.",
      "hero-projects-btn": "View Projects",
      "hero-courses-btn": "Academic Work",
      "hero-github-btn": "GitHub",
      "meta-bs-gpa-label": "BSc GPA",
      "meta-ms-gpa-label": "MSc GPA",
      "meta-phd-gpa-label": "PhD GPA",
      "section-find-eyebrow": "What you'll find",
      "section-content-title": "Site content",
      "card-courses-title": "Academic Courses",
      "card-courses-desc": "Full list of courses from my undergraduate, graduate, and PhD programs.",
      "card-courses-tag1": "Undergrad",
      "card-courses-tag2": "Grad / PhD",
      "card-courses-btn": "Go to Academic Work →",
      "card-projects-title": "Projects & Demos",
      "card-projects-desc": "Browser‑run demos built with FastAPI, PyTorch, and TensorFlow.",
      "card-projects-tag1": "FastAPI",
      "card-projects-tag2": "PyTorch",
      "card-projects-btn": "View Demos →",
      "card-about-title": "About Me",
      "card-about-desc": "Education timeline, technical skills, and publications.",
      "card-about-tag1": "CV",
      "card-about-tag2": "Publications",
      "card-about-btn": "View Profile →",
      "footer-copyright": "© 2026 Ahmet Çolak. All rights reserved.",
      "footer-email": "Email",
      "footer-linkedin": "LinkedIn",
      "footer-github": "GitHub",

      "courses-eyebrow": "Academic Work",
      "courses-title-part1": "Thesis, Reports",
      "courses-title-part2": "& Courses",
      "courses-lead": "My master's thesis, PhD course reports, and the full list of courses.",
      "courses-thesis-title": "Master's Thesis",
      "thesis-title": "Vulnerability Analysis of Complex Systems Using Graph Theory: A Domination Approach",
      "thesis-abstract": "In this thesis, we study the restrained disjunctive domination number on middle and central graphs as well as hexagonal cactus chains. Exact formulas and bounds are obtained, and a brute‑force algorithm is provided.",
      "thesis-tag1": "Graph Theory",
      "thesis-tag2": "Domination",
      "thesis-tag3": "Hexagonal Cactus",
      "thesis-tag4": "Middle/Central Graphs",
      "thesis-download": "Download Thesis (PDF)",
      "courses-reports-title": "PhD Course Project Reports",
      "report1-title": "RDD‑Based Topological Masking (Measurement Parameters in Graph Theory)",
      "report1-desc": "A topological masking method that solves oversmoothing in GNNs using deterministic Restrained Disjunctive Domination (RDD). Achieved 68% accuracy and stable convergence on heterophilic graphs (WebKB Texas), with limited performance on homophilic graphs (ZINC12k).",
      "report1-tag1": "RDD",
      "report1-tag2": "GNN",
      "report1-tag3": "Heterophily",
      "report1-tag4": "Oversmoothing",
      "report2-title": "Hybrid Fusion of Algebraic Invariants and GNN Embeddings (Algebraic Graph Algorithms)",
      "report2-desc": "A critical analysis of hybrid fusion combining GNN encoder embeddings with normalized Laplacian eigenvalues. It is mathematically and experimentally shown that broadcasting a spectral vector causes majority‑class collapse in node‑level heterophilic tasks, and hybrid fusion does not outperform GNN‑only.",
      "report2-tag1": "Spectral Graph Theory",
      "report2-tag2": "GNN",
      "report2-tag3": "Hybrid Fusion",
      "report2-tag4": "Laplacian",
      "report-download": "Download Report (PDF)",
      "courses-list-title": "Course List",
      "courses-grad-title": "Graduate Courses",
      "courses-phd-title": "PhD Courses",
      "course-g-1": "Graph Theory and Complex Networks I–II",
      "course-g-2": "Mathematical Analysis and Design of Algorithms I",
      "course-g-3": "Advanced Data Structures",
      "course-g-4": "Extremal Problems and Special Graphs",
      "course-g-5": "High‑Performance Computing",
      "course-g-6": "Communication Networks and Vulnerability",
      "course-phd-1": "Algebraic Graph Algorithms",
      "course-phd-2": "Measurement Parameters in Graph Theory",
      "course-phd-3": "Machine Learning",
      "course-phd-4": "Algorithm Complexity Analysis",

      "about-eyebrow": "About Me",
      "about-lead": "AI researcher, data scientist, and PhD candidate in Information Technology at Ege University's International Computer Institute. My work focuses on Geometric Deep Learning, Graph Neural Networks (GNNs), Spectral Graph Theory, and structural bioinformatics (especially protein dynamics). I aim to design mathematically grounded, deterministic, and scalable AI solutions.",
      "about-timeline-eyebrow": "Timeline",
      "about-timeline-title": "Education",
      "about-edu1-title": "PhD, Information Technology",
      "about-edu1-desc": "Ege University, International Computer Institute · Izmir, Turkey",
      "about-edu2-title": "MSc, Computer Science (Thesis)",
      "about-edu2-desc": "Ege University, Graduate School of Natural and Applied Sciences · Izmir — GPA: 4.00",
      "about-edu2-thesis": "Thesis: \"Vulnerability Analysis of Complex Systems Using Graph Theory: A Restrained Disjunctive Domination Approach\" — this work forms the basis of the RDD‑based topological masking project.",
      "about-edu3-title": "BSc, Mathematics",
      "about-edu3-desc": "Izmir Institute of Technology · Izmir — GPA: 2.96, 2 Dean's List certificates.",
      "about-skills-eyebrow": "Skills",
      "about-skills-title": "Technical tools",
      "about-research-eyebrow": "Academic research",
      "about-research-title": "Featured work",
      "about-research1-title": "RDD‑Based Topological Masking",
      "about-research2-title": "Hybrid Fusion of Algebraic Invariants and GNN Embeddings",
      "about-research3-title": "RAG Search Engine",
      "about-research4-title": "DomiPlan: Multi‑Tenant Timetabling Expert System",
      "about-research-btn": "Go to Academic Work →",
      "about-experience-eyebrow": "Experience",
      "about-experience-title": "Work Experience",
      "about-job-title": "Data Scientist — Andromedy Digital Solutions",
      "about-job-desc": "Izmir, Turkey — Worked on agricultural land boundary detection from satellite imagery (.tif) and GeoJSON data using Random Forest (RF) and CNN models (F1‑Score: 0.83).",
      "about-certs-eyebrow": "Documents",
      "about-certs-title": "Certificates",
      "about-cert1-title": "Google Project Management",
      "about-cert1-desc": "Professional Certificate — 6 courses: project initiation, planning, execution, and agile project management.",
      "about-cert2-title": "LLM & AI Certificate",
      "about-cert2-desc": "100+ hour technical program: Transformer architectures, RAG, LangChain, RLHF, model compression, and production deployment with Docker/Streamlit.",
      "about-cert3-title": "AI and Machine Learning — Certificate of Achievement",
      "about-cert3-desc": "Module exam conducted with contributions from Marmara, METU, ITU, and Boğaziçi University.",
      "about-certs-showall": "Show All Certificates (7)",
      "about-cert4-title": "Deep Learning Training",
      "about-cert4-desc": "Certificate of completion.",
      "about-cert5-title": "Web Application Development Training",
      "about-cert5-desc": "Certificate of completion.",
      "about-cert6-title": "HR for Entrepreneurs",
      "about-cert6-desc": "Certificate of completion.",
      "about-cert7-title": "Finance for Entrepreneurs",
      "about-cert7-desc": "Certificate of completion.",
      "about-cert8-title": "Law for Entrepreneurs",
      "about-cert8-desc": "Certificate of completion.",
      "about-cert9-title": "Basic Entrepreneurship",
      "about-cert9-desc": "Certificate of completion.",
      "about-cert10-title": "Information Technology Internship",
      "about-cert10-desc": "Hands‑on Excel, Photoshop, AutoCAD Techniques, Python Coding.",

      "focus-eyebrow": "Current",
      "focus-title": "Current Focus",
      "focus-text": "I am currently participating in the Bootcamp program at the Artificial Intelligence and Technology Academy. Together with my teammates, we aim to offer our digital wardrobe service when we receive sufficient support. In this project, we want to combine VTON and LLM capabilities to create a great stylist for you.\n\nOn the other hand, in my PhD, my teammates and I are working on protein transition path prediction — a large-scale project, but we are hopeful.\n\nAdditionally, I have been accepted into the Data Science and Machine Learning Bootcamp program organized in collaboration with the Turkey AI Academy and Huawei Student Developers (HSD). I will continue my education there as well. Let's say more learning never hurts.",

      "projects-eyebrow": "Portfolio",
      "projects-title-part1": "Projects",
      "projects-title-part2": "Demos",
      "projects-lead": "Working demo versions of my projects built with FastAPI, PyTorch, and TensorFlow.",
      "project1-title": "RAG Search Engine",
      "project1-desc": "A hybrid ranking (Weighted + RRF) movie search system combining BM25/TF‑IDF, semantic embedding search, and CLIP multimodal search.",
      "project1-note": "→ Directly applicable to customer support and document search.",
      "project2-title": "DomiPlan: Timetabling Expert System",
      "project2-desc": "A multi‑tenant FastAPI backend that optimises the NP‑Hard school timetabling problem using Google OR‑Tools CP‑SAT solver.",
      "project2-note": "→ Automates days of manual scheduling.",
      "project3-title": "Agricultural Land Boundary Detection",
      "project3-desc": "Detection of agricultural land boundaries from satellite imagery (.tif) and GeoJSON data using Random Forest and CNN models (F1‑Score: 0.83).",
      "project3-note": "→ Eliminates manual measurement in agricultural insurance and land inspection.",
      "project-badge": "Demo Coming Soon",

      "contact-eyebrow": "Contact",
      "contact-title": "Let's Talk",
      "contact-lead": "Write to me for a project, a collaboration idea, or just to say hello.",
      "contact-name-label": "Full Name",
      "contact-email-label": "Email",
      "contact-message-label": "Message",
      "contact-submit-btn": "Send Message",
      "contact-linkedin-label": "LinkedIn",
      "contact-github-label": "GitHub"
    }
  };

  // --------------------------------------------------------------
  // 2. LANGUAGE SWITCH ENGINE
  // --------------------------------------------------------------
  const toggleBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "tr";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "tr" ? "tr" : "en";
    localStorage.setItem("lang", lang);
    if (toggleBtn) {
      toggleBtn.textContent = lang === "tr" ? "🇬🇧 EN" : "🇹🇷 TR";
      toggleBtn.dataset.lang = lang;
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });
  }

  applyLanguage(currentLang);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "tr" ? "en" : "tr";
      applyLanguage(nextLang);
    });
  }

  // --------------------------------------------------------------
  // 3. MOBILE NAV TOGGLE
  // --------------------------------------------------------------
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // --------------------------------------------------------------
  // 4. SCROLL REVEAL
  // --------------------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // --------------------------------------------------------------
  // 5. CONTACT FORM SUBMISSION
  // --------------------------------------------------------------
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Gönderiliyor...";
      status.className = "form-status";
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };
      try {
        const res = await fetch("https://formspree.io/f/xdaqgdoy", { // <-- Buraya kendi URL'ni yaz
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
        status.textContent = "Mesajın gönderildi. Kısa süre içinde dönüş yapacağım.";
        status.classList.add("ok");
        form.reset();
      } catch (err) {
        status.textContent = "Bir şeyler ters gitti. Doğrudan e-posta ile de ulaşabilirsin.";
        status.classList.add("err");
      }
    });
  }
});