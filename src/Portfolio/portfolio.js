/* Change this file to get your personal Portfolio */

import HTML from '../Assets/Images/Mask Group 22.png';
import ReactIcon from '../Assets/Images/react.svg';
import NodeIcon from '../Assets/Images/nodejs.svg';
import ExpressIcon from '../Assets/Images/expressjs.png';
import MongoDbIcon from '../Assets/Images/mongodb.svg';
import SqlDatabase from '../Assets/Images/sql-database.svg';
import CSSIcon from '../Assets/Images/css-3.svg';
import GithubIcon from '../Assets/Images/github.svg';
import JavascriptIcon from '../Assets/Images/javascript.svg';

import KULogo from '../Assets/Images/Group 29.png';
import JouharDegree from '../Assets/Images/jouhar.jpg';
import TheEducators from '../Assets/Images/the-educators-1.jpg';
import Freelancing from '../Assets/Images/freelancing.svg';
import TechNest from '../Assets/Images/logo-white.jpg';
import Project1 from '../Assets/Project Images/Project1.png';
import pic1 from '../Assets/Work/logo.jpg'

const customColorTheme = {
    primaryColor: "#00bbf9",
    secondaryColor: '#646464',
    defaultColor: '#ffffff',
    backgroundColor: "#171717"
};

// Your Info
const about = {
    developerName: "Talha Khalid",
    aboutText: "A passionate Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1l2M26CSgU5Wew6K-LWZulxCxXdiIkOib/view?usp=sharing"
};

const skillSet = [
    {
        skill: "MongoDB",
        icon: MongoDbIcon,
    },
    {
        skill: "Express",
        icon: ExpressIcon,
    },
    {
        skill: "ReactJS",
        icon: ReactIcon,
    },
    {
        skill: "NodeJS",
        icon: NodeIcon,
    },
    {
        skill: "React Native",
        icon: ReactIcon,
    },
    {
        skill: "Mongoose",
        icon: null,
    },
    {
        skill: "SQL Database",
        icon: SqlDatabase,
    },
    {
        skill: "Javascript",
        icon: JavascriptIcon,
    },
    {
        skill: "HTML",
        icon: HTML,
    },
    {
        skill: "CSS3",
        icon: CSSIcon,
    },
    {
        skill: "Github",
        icon: GithubIcon,
    },
];

// Your Education
const education = [
    {
        institute: "University of Karachi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
        duration: "January 2017 - January 2021",
        degree: "Bachelor Of Science In Computer Science",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: JouharDegree,
        institute: "PECHS Edu Found Govt Sci College",
        degree: "Pre-Engineering",
        duration: "2013 - 2016",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: TheEducators,
        institute: "The Educators",
        degree: "Matriculation",
        duration: "2001 - 2013",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
        institute: "University of Karachi",
        degree: "Bachelor Of Science In Computer Science",
        duration: "January 2017 - January 2021",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];

//Your Experience
const experience = [
    {
        img: Freelancing,
        experienceName: "FREELANCING",
        experienceOccup: "FULL STACK DEVELOPER",
        experienceDate: "JUNE 2019 - Present",
        experienceDetails: `
        Creating rich proefssional web applications
        Created various Portfolio websites
        CRM Development`,
    },
    {
        img: TechNest,
        experienceName: "TechNest",
        experienceOccup: "SOFTWARE ENGINEER",
        experienceDate: "JUNE 2019 - 2020",
        experienceDetails: `
        Designs and creates professional web applications
        Checks feasibility of software prototypes
        Modifies code to fix errors`,
    },
];


//Your Proficiency in your relative skills
const proficiency = [
    {
        name: "ReactJS",
        level: 95,
    },
    {
        name: "NodeJS/Express",
        level: 90,
    },
    {
        name: "MongoDB/Mongoose",
        level: 85,
    },
    {
        name: "React Native",
        level: 70,
    },
    {
        name: "SQL Database",
        level: 65,
    },
    {
        name: "Javascript",
        level: 95,
    },
    {
        name: "HTML",
        level: 90,
    },
    {
        name: "CSS3",
        level: 87,
    },
    {
        name: "Github",
        level: 80,
    },
];

//Your Projects
const projects = [
    {
        img: pic1,
        workName: "Giverpays",
        link: "https://giverpays.com/"
    },
    {
        img: Project1,
        workName: "Yout Event Organizer",
        link: "https://youtheventorganizer.com/"
    },
    {
        img: Project1,
        workName: "LIS for PCMD - ICCBS",
        link: "https://pcmd-lab.herokuapp.com/"
    },
    {
        img: Project1,
        workName: "Shaheer Enterprises",
        link: "https://shaheerenterprises.com/"
    },
    {
        img: Project1,
        workName: "Hazir Sain",
        link: "https://hazirsain.com/"
    },
];

// Your Social Media Link
const socialMediaLinks = {
    github: "https://github.com/Talha619",
    linkedin: "https://www.linkedin.com/in/hafiz-talha/",
    gmail: "hafiz.talhakh@gmail.com",
    facebook: "https://www.facebook.com/hafiz.talha.50"
    // Instagram and Twitter are also supported in the links!
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "Talha619", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};

const contactInfo = {
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+923362502067",
    number2: "+923040438807",
    email: "hafiz.talhakh@gmail.com"
};

export {
    customColorTheme,
    about,
    skillSet,
    education,
    experience,
    proficiency,
    projects,
    socialMediaLinks,
    openSource,
    contactInfo
};