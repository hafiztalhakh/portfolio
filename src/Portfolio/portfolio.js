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
import FirebaseIcon from '../Assets/Images/firebase.svg';

import KULogo from '../Assets/Images/Group 29.png';
import JouharDegree from '../Assets/Images/jouhar.jpg';
import TheEducators from '../Assets/Images/the-educators-1.jpg';
import Iqra from '../Assets/Images/Iqra.png';
import Freelancing from '../Assets/Images/freelancing.svg';
import noviaLogo from '../Assets/Images/2.png';
// import Project1 from '../Assets/Project Images/Project1.png';
import lis from '../Assets/Project Images/lis.png'
import edhi from '../Assets/Project Images/edhi.png'
import foodghar from '../Assets/Project Images/foodghar.png'
import hazirsain from '../Assets/Project Images/hazirsain.png'
import novia from '../Assets/Project Images/novia.png'
import shaheerenterprises from '../Assets/Project Images/shaheerenterprises.png'
import yeo from '../Assets/Project Images/yeo.png'
import ecommerce from '../Assets/Project Images/ecommerce.png'
import giverpays from '../Assets/Project Images/giverpays.png'



const customColorTheme = {
    primaryColor: "#ffff00",
    secondaryColor: '#646464',
    defaultColor: '#ffffff',
    backgroundColor: "#171717"
};

// Your Info
const about = {
    developerName: "Talha Khalid",
    aboutText: "A passionate Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1Z_Z2Y02xFVgXK-ps8HieBZBrexMF7pdd/view?usp=sharing"
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
        skill: "Mongoose",
        icon: null,
    },
    {
        skill: "Firebase",
        icon: FirebaseIcon
    },
    {
        skill: "SQL Database",
        icon: SqlDatabase,
    },
    {
        skill: "Github",
        icon: GithubIcon,
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
        skill: "Javascript",
        icon: JavascriptIcon,
    },
    {
        skill: "React Native",
        icon: ReactIcon,
    },
];

// Your Education
const education = [
    {
        institute: "University of Karachi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
        duration: "2017 - 2020",
        degree: "Bachelor Of Science In Computer Science",
        description: `I have done bachelor's in Software Engineering from UBIT, University of Karachi.`
    },
    {
        img: JouharDegree,
        institute: "PECHS Edu Found Govt Sci College",
        degree: "Pre-Engineering",
        duration: "2013 - 2016",
        description: "I have done my intermediate in Pre-Engineering from Karachi Board."
    },
    {
        img: TheEducators,
        institute: "The Educators",
        degree: "Matriculation",
        duration: "2011 - 2013",
        description: "I have done my matric in Science from Karachi Board and I got 78% marks in it."
    },
    {
        img: Iqra,
        institute: "Iqra Tarbiat-ul-Atfal",
        degree: "Hifz-e-Quran",
        duration: "2002 - 2011",
        description: "I have memorize Quran from Iqra Tarbiat-ul-Atfal and studied till class viii in this School."
    },
];

//Your Experience
const experience = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJzKHLvi5aWKL-G-60E7zz8RT8Lvap2CGjQ&usqp=CAU",
        experienceName: "ICI Pakistan ltd.",
        experienceOccup: "Information Technology Intern",
        experienceDate: "January 2019 - February 2019",
        experienceDetails: `I have experience of working in IT Department of ICI Pakistan limited as an IT Intern. Where I learnt about MS Office 365 services i.e SharePoint, One Drive for Business, etc.
        Where, I have created Web Pages, sites, Document Libraries, Apps, Groups, Workflows in SharePoint and also I am a part of an endeavor i.e Migration from Local File server to SharePoint Online (Cloud).`,
    },
    {
        img: noviaLogo,
        experienceName: "Novia Technologies",
        experienceOccup: "SOFTWARE ENGINEER",
        experienceDate: "June 2019 - Present",
        experienceDetails: `Started as a Junior Web Developer and today I am working as a MERN Stack Developer and leading my team.
        My Key Responsibilities in Novia Technologies are developing complete platforms from start to end. Managing existing projects. Creating complete application architecture and design. Developing React applications using material-ui and ant design. Developing REST APIs. Developing Hybrid apps.`,
    },
];


//Your Proficiency in your relative skills
const proficiency = [
    {
        name: "ReactJS",
        level: 80,
    },
    {
        name: "NodeJS/Express",
        level: 70,
    },
    {
        name: "MongoDB/Mongoose",
        level: 70,
    },
    {
        name: "Firebase",
        level: 70,
    },
    {
        name: "SQL Database",
        level: 70,
    },
    {
        name: "Github",
        level: 80,
    },
    {
        name: "HTML",
        level: 90,
    },
    {
        name: "CSS3",
        level: 80,
    },
    {
        name: "Javascript",
        level: 70,
    },

    {
        name: "React Native",
        level: 60,
    },
];

//Your Projects
const projects = [
    {
        img: lis,
        workName: "Laboratory Information System",
        // link: ""
    },
    {
        img: edhi,
        workName: "Edhi Website",
        // link: ""
    },
    {
        img: foodghar,
        workName: "Foodghar",
        // link: ""
    },
    {
        img: shaheerenterprises,
        workName: "Shaheer Enterprises",
        // link: "https://shaheerenterprises.com/"
    },
    {
        img: hazirsain,
        workName: "Hazir Sain",
        // link: "https://hazirsain.com/"
    },
    {
        img: novia,
        workName: "Novia Technologies",
        // link: ""
    },
    {
        img: yeo,
        workName: "Youth Event Organizer",
        // link: ""
    },
    {
        img: ecommerce,
        workName: "Computer Store",
        // link: ""
    },
    {
        img: giverpays,
        workName: "GiverPays",
        // link: ""
    },
];

// Your Social Media Link
const socialMediaLinks = {
    github: "https://github.com/hafiztalhakh",
    linkedin: "https://www.linkedin.com/in/hafiztalhakh/",
    gmail: "hafiz.talhakh@gmail.com",
    facebook: "https://www.facebook.com/hafiz.talha.50"
    // Instagram and Twitter are also supported in the links!
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "hafiztalhakh", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};

const contactInfo = {
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92 304 0438807",
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