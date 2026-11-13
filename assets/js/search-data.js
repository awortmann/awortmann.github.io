// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-collaborative-embedded-systems",
          title: 'Collaborative Embedded Systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bmbf-crest/";
            },},{id: "projects-intelligent-modular-service-robotics",
          title: 'Intelligent Modular Service Robotics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bmbf-iserveu/";
            },},{id: "projects-factory-x-the-digital-ecosystem",
          title: 'Factory X - The Digital Ecosystem',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bmwe-fx/";
            },},{id: "projects-center-for-systems-engineering",
          title: 'Center for Systems Engineering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cse/";
            },},{id: "projects-internet-of-production-excellence-cluster",
          title: 'Internet of Production Excellence Cluster',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dfg-internet-of-production/";
            },},{id: "projects-model-based-devops-mbdo",
          title: 'Model-Based DevOps (MBDO)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dfg-mbdo/";
            },},{id: "projects-systematic-software-language-engineering",
          title: 'Systematic Software Language Engineering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dfg-scolar/";
            },},{id: "projects-virtual-commissioning-to-digital-twins",
          title: 'Virtual Commissioning to Digital Twins',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dfg-vc2dt/";
            },},{id: "projects-systematic-engineering-of-digital-twins",
          title: 'Systematic Engineering of Digital Twins',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/digital-twins/";
            },},{id: "projects-autonomous-universal-manufacturing",
          title: 'Autonomous Universal Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icm-autounimanu/";
            },},{id: "projects-flexible-software-defined-manufacturing",
          title: 'Flexible Software- Defined Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icm-sdmflex/";
            },},{id: "projects-opc-ua-universal-setup-environment",
          title: 'OPC UA Universal Setup Environment',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icm-use/";
            },},{id: "projects-model-driven-architecture",
          title: 'Model-Driven Architecture',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/montiarcautomaton/";
            },},{id: "projects-ai-based-timber-construction",
          title: 'AI-based Timber Construction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mwk-kinabau/";
            },},{id: "projects-explainable-ai-for-manufacturing",
          title: 'Explainable AI for Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mwk-xai/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%61%73.%77%6F%72%74%6D%61%6E%6E@%69%73%77.%75%6E%69-%73%74%75%74%74%67%61%72%74.%64%65", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6ImtercAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
