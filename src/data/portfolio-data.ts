// Portfolio Data Script
// All content is managed from this file

export const portfolioData = {
  // Navigation Links
  nav: {
    logo: "Portfolio",
    links: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
  },

  // Home Section
  home: {
    greeting: "Hello, I'm",
    name: "Alex Morgan",
    title: "Full Stack Developer",
    description: "I craft elegant digital experiences with modern technologies. Passionate about creating intuitive interfaces and scalable solutions.",
    cta: {
      primary: "View Projects",
      secondary: "Get In Touch",
    },
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passion-driven developer with a love for clean code",
    description: "I'm a full-stack developer with over 5 years of experience building web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems. My approach combines technical expertise with creative problem-solving to deliver exceptional results.",
    stats: [
      { number: "50+", label: "Projects Completed" },
      { number: "30+", label: "Happy Clients" },
      { number: "5+", label: "Years Experience" },
    ],
    skills: [
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "PostgreSQL", level: 75 },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "Showcasing my recent work and creative solutions",
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with payment integration, inventory management, and analytics dashboard.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates, team collaboration features, and customizable workflows.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
        tags: ["Next.js", "OpenWeather API", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    email: "alex@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
      { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
    ],
    form: {
      fields: {
        name: {
          label: "Your Name",
          placeholder: "John Doe",
          type: "text",
        },
        email: {
          label: "Your Email",
          placeholder: "john@example.com",
          type: "email",
        },
        message: {
          label: "Your Message",
          placeholder: "Tell me about your project...",
          type: "textarea",
        },
      },
      submitButton: "Send Message",
    },
  },

  // Footer
  footer: {
    copyright: "© 2024 Alex Morgan. All rights reserved.",
    madeWith: "Made with Next.js & Tailwind CSS",
  },
};
