

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Adeel Zahid",
  title: "Hi all, I'm Adeel",
  subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  resumeLink: "https://drive.google.com/file/d/1NNdd2VaBAMcetXcer6_elOc8QaUImMxc/view"
};

// Social Media Link

const socialMediaLinks = {

    github: "https://github.com/haseebzahid1?tab=repositories",
    linkedin: "https://www.linkedin.com/feed/",
    gmail: "https://mail.google.com/mail/u/0/?ogbl#inbox",
    gitlab: "https://gitlab.com/AdeelZahi",
    facebook: "https://www.faceboo"
    // Instagram and Twitter are also supported in the links!
  };


  // Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ],
  
  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"		
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "reactjs",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "swift",
        fontAwesomeClassname: "fab fa-swift"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "aws",
        fontAwesomeClassname: "fab fa-aws"
      },
      {
        skillName: "firebase",
        fontAwesomeClassname: "fas fa-fire"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
      }
    ]
  };
  
  // Your top 3 proficient stacks/tech experience
  
  const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
      {
        Stack: "Frontend/Design",  //Insert stack or technology you have experience in
        progressPercentage: "90%"  //Insert relative proficiency in percentage
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      }
    ]
  };
  
  
  // Your top 3 work experiences
  
  const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "Software Engineer",  
        company: "Facebook",
        companylogo: require("./assets/images/facebookLogo.webp"),
        date: "June 2019 – Present",
        background:"#0D4DA2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        role: "Front-End Developer",   
        company: "Quora",
        companylogo: require("./assets/images/quoraLogo.webp"),
          background:"#7C1C18",
        date: "May 2017 – May 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        role: "Software Engineer Intern",  
        company: "Airbnb",
        companylogo: require("./assets/images/airbnbLogo.webp"),
          background:"#B74344",
        date: "Jan 2015 – Sep 2015",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  };
  
  /* Your Open Source Section to View Your Github Pinned Projects
  To know how to get github key look at readme.md */
  
  const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "Adeel Zahid", // Change to your github username to view your profile in Contact Section.
    showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
  };
  
  
  // Some Big Projects You have worked with your company
  
  const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: require("./assets/images/saayaHealthLogo.webp"),
        link: "http://saayahealth.com/"
      },
      {
        image: require("./assets/images/nextuLogo.webp"),
        link: "http://nextu.se/"
      }
    ]
  };
  
  // Your Achievement Section Include Your Certification Talks and More
  
  const achievementSection = {
  
    title: "Achievements And Certifications 🏆 ",
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  
    achivementsCards: [
      {
        title: "V.U. Programming Competation",
        subtitle: "A passionate web developer who love to build stunning, responsive and User friendly website using modern web frameworks and libraries.",
        image: require("./assets/images/goldMedal.png"),
        footerLink: [
          { name: "Certification", url: "" },
          { name: "Award Letter", url: "" },
          { name: "Google Code-in Blog", url: "" }
        ]
      },
      {
        title: "Google Assistant Action",
        subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
        image: require("./assets/images/googleAssistantLogo.webp"),
        footerLink: [{ name: "View Google Assistant Action", url: "" }]
      },
  
      {
        title: "PWA Web App Developer",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/pwaLogo.webp"),
        footerLink: [
          { name: "Certification", url: "https://haseebwork-62d19.web.app/" },
          { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
        ]
      }
    ]
  };
  
  // Blogs Section
  
  const blogSection = {
  
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  
    blogs: [
      {
        url: "",
        title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
        description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
      },
      {
        url: "",
        title: "Why REACT is The Best?",
        description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      },
      {
        url: "",
        title: "Why REACT is The Best?",
        description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      }
    ]
  };
  
  // Talks Sections
  
  const talkSection = {
    title: "TALKS",
    subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  
    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "",
        event_url: ""
      }
    ]
  };
  
  // Podcast Section
  
  const podcastSection = {
    title: "Podcast 🎙️",
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  
    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/adeel-zahid/embed/episodes/Fake-Music-Podcast-egfqot"]
  };
  
  
  const contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3157011812",
    email_address: "m.adeel2144@gmail.com"
  };
  
  //Twitter Section
  
  const twitterDetails = {
  
    userName : "twitter"//Replace "twitter" with your twitter username without @
    
  };
  export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};

