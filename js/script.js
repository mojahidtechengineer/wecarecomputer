/* =====================================================================
   WE CARE COMPUTER NAWADA — WEBSITE CONFIGURATION
   ---------------------------------------------------------------------
   Update business information in ONE place below.
   Everything on the website (WhatsApp links, schema markup, header,
   footer, CTAs) is generated from this object.
   ===================================================================== */
const SITE_CONFIG = {
  businessName: "We Care Computer Nawada",
  shortBusinessName: "We Care Computer",

  phone: "+91 88251 69485",
  phoneDial: "+918825169485",
  whatsappNumber: "918825169485",

  toolsUrl: "https://YOUR-TOOLS-WEBSITE.com",

  googleReviewUrl: "https://www.google.com/search?q=We+Care+Computer+Nawada",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nawada,Bihar,India",

  googleRating: "5.0",
  googleReviewCount: "7",

  services: [
    {
      icon: "fa-desktop",
      title: "Computer Repair & Support",
      description: "Complete desktop repair, Windows installation, software setup, virus removal, hardware troubleshooting and performance optimization for every major brand.",
      items: ["Desktop repair", "Windows installation", "Software installation", "Virus and malware troubleshooting", "Hardware troubleshooting", "Performance optimization", "Data backup and recovery"],
      message: "Hello We Care Computer, I need computer repair and support service."
    },
    {
      icon: "fa-laptop",
      title: "Laptop Services",
      description: "Professional laptop repair, upgrades and maintenance — from SSD and RAM upgrades to screen, keyboard and battery replacement.",
      items: ["Laptop repair", "SSD/RAM upgrades", "Keyboard replacement", "Screen replacement", "Battery replacement", "Windows installation", "Laptop cleaning and maintenance"],
      message: "Hello We Care Computer, I need laptop service and repair."
    },
    {
      icon: "fa-network-wired",
      title: "Networking Solutions",
      description: "Reliable LAN installation, Wi-Fi setup, router and switch configuration, structured cabling and complete office networking.",
      items: ["LAN installation", "Wi-Fi setup", "Router configuration", "Switch installation", "Structured cabling", "Network troubleshooting", "Office networking"],
      message: "Hello We Care Computer, I need networking services."
    },
    {
      icon: "fa-video",
      title: "CCTV Surveillance",
      description: "Installation, configuration and maintenance of HD, IP and Wi-Fi CCTV cameras with remote mobile viewing and night vision.",
      items: ["CCTV installation", "IP camera installation", "DVR/NVR configuration", "Remote mobile viewing", "CCTV troubleshooting", "Camera replacement", "CCTV maintenance"],
      message: "Hello We Care Computer, I need CCTV installation service."
    },
    {
      icon: "fa-fingerprint",
      title: "Access Control",
      description: "Secure biometric attendance systems, fingerprint and face recognition, RFID card access and door access control.",
      items: ["Biometric attendance systems", "Fingerprint systems", "Face recognition systems", "RFID/card access", "Door access control", "Attendance software", "Installation and configuration"],
      message: "Hello We Care Computer, I need access control or biometric attendance service."
    },
    {
      icon: "fa-headset",
      title: "IT Support",
      description: "Ongoing IT support for homes, offices and businesses — computer maintenance, printer troubleshooting, server support and data backup.",
      items: ["Office IT support", "Computer maintenance", "Printer troubleshooting", "Server support", "Data backup", "System configuration"],
      message: "Hello We Care Computer, I need IT support."
    }
  ],

  products: [
    {
      image: "",
      imageAlt: "Laptop placeholder",
      brand: "Brand Placeholder",
      model: "Model Placeholder",
      processor: "Processor Placeholder",
      ram: "RAM Placeholder",
      storage: "Storage Placeholder",
      display: "Display Placeholder",
      condition: "Condition Placeholder",
      price: "",
      type: "laptop",
      message: "Hello We Care Computer, I am interested in this laptop."
    },
    {
      image: "",
      imageAlt: "Desktop computer placeholder",
      brand: "Brand Placeholder",
      model: "Model Placeholder",
      processor: "Processor Placeholder",
      ram: "RAM Placeholder",
      storage: "Storage Placeholder",
      display: "Display Placeholder",
      condition: "Condition Placeholder",
      price: "",
      type: "computer",
      message: "Hello We Care Computer, I am interested in this computer."
    }
  ],

  socialLinks: [
    // Add valid social links below (Facebook, Instagram, LinkedIn, YouTube).
    // Example: { label: "Facebook", url: "https://facebook.com/..." }
  ]
};

/* ============================ WhatsApp Builder ============================ */
function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

/* ============================ Mobile Navigation ============================ */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* ======================== Scroll Reveal Animations ======================== */
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  /* ======================= Active Nav Link Highlighting ======================= */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  }

  /* ============================ Header Shadow on Scroll ============================ */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });
  }
});
