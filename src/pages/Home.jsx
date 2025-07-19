import { useEffect } from "react";

import SectionHead from "../components/Home/About-head";
import AboutMe from "../components/Home/About-me";
import Skill from "../components/Home/About-skill";
import Project from "../components/Home/About-project";
import Contact from "../components/Home/About-contact";

const Home = () => {
    const info = {
        name: "Thanh Vu",
        bio: "I am a web developer currently learning and improving my skills with PHP, MySQL, Vue, and React. I enjoy building user-friendly interfaces and efficient systems. I’m always striving to stay up-to-date with new technologies and continuously improve myself every day.",
        address: "Buon Ma Thuot, VietNam",
        available: true,
        avatar: "/avatar.png",
        social: {
            github: "https://github.com/your-github",
            twitter: "https://twitter.com/your-twitter",
            figma: "https://figma.com/@your-figma"
        }
    };

    useEffect(() => {
        document.title = "Thanh Vu - Web Developer";
    }, [])

    return (
        <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white">
            <SectionHead info={info} />
            <AboutMe />
            <Skill />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;
