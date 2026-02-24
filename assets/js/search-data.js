// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/service/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/al-folio/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-collaborative-embedded-systems",
          title: 'Collaborative Embedded Systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/bmbf-crest/";
            },},{id: "projects-intelligent-modular-service-robotics",
          title: 'Intelligent Modular Service Robotics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/bmbf-iserveu/";
            },},{id: "projects-factory-x-the-digital-ecosystem",
          title: 'Factory X - The Digital Ecosystem',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/bmwe-fx/";
            },},{id: "projects-center-for-systems-engineering",
          title: 'Center for Systems Engineering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/cse/";
            },},{id: "projects-internet-of-production-excellence-cluster",
          title: 'Internet of Production Excellence Cluster',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/dfg-internet-of-production/";
            },},{id: "projects-model-based-devops-mbdo",
          title: 'Model-Based DevOps (MBDO)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/dfg-mbdo/";
            },},{id: "projects-systematic-software-language-engineering",
          title: 'Systematic Software Language Engineering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/dfg-scolar/";
            },},{id: "projects-virtual-commissioning-to-digital-twins",
          title: 'Virtual Commissioning to Digital Twins',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/dfg-vc2dt/";
            },},{id: "projects-systematic-engineering-of-digital-twins",
          title: 'Systematic Engineering of Digital Twins',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/digital-twins/";
            },},{id: "projects-autonomous-universal-manufacturing",
          title: 'Autonomous Universal Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/icm-autounimanu/";
            },},{id: "projects-flexible-software-defined-manufacturing",
          title: 'Flexible Software- Defined Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/icm-sdmflex/";
            },},{id: "projects-opc-ua-universal-setup-environment",
          title: 'OPC UA Universal Setup Environment',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/icm-use/";
            },},{id: "projects-model-driven-architecture",
          title: 'Model-Driven Architecture',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/montiarcautomaton/";
            },},{id: "projects-ai-based-timber-construction",
          title: 'AI-based Timber Construction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/mwk-kinabau/";
            },},{id: "projects-explainable-ai-for-manufacturing",
          title: 'Explainable AI for Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/mwk-xai/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/introduction-to-machine-learning/";
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
          window.open("/al-folio/feed.xml", "_blank");
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
