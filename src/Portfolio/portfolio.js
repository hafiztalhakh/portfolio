/* Change this file to get your personal Portfolio */

// Your Info
const about = {
    developerName: "Talha Khalid",
    aboutText: "A passionate Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link
const socialMediaLinks = {
    github: {
        icon: <img src={require("../Assets/Images/github (1).svg")} alt="github" />,
        link: "https://github.com/Talha619"
    },
    linkedin: {
        icon: <img src={require("../Assets/Images/linkedin.svg")} alt="linkedin" />,
        link: "https://www.linkedin.com/in/hafiz-talha/"
    },
    gmail: {
        icon: null,
        link: "hafiz.talhakh@gmail.com"
    },
    facebook: {
        icon: <img src={require("../Assets/Images/facebook.svg")} alt="facebook" />,
        link: "https://www.facebook.com/hafiz.talha.50"
    }
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
    about,
    socialMediaLinks,
    openSource,
    contactInfo
};