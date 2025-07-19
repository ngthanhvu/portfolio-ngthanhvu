// src/components/FallingIcons.jsx
import { useEffect, useState } from 'react';
import { FaReact, FaVuejs, FaLaravel, } from 'react-icons/fa';
import { SiNuxtdotjs, SiMysql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

const iconList = [
    { component: FaReact, className: 'text-blue-500' },
    { component: FaVuejs, className: 'text-green-500' },
    { component: FaLaravel, className: 'text-red-500' },
    { component: SiNuxtdotjs, className: 'text-green-500' },
    { component: SiMysql, className: 'text-blue-500' },
    { component: RiNextjsFill, className: 'text-black' },
    { component: RiTailwindCssFill, className: 'text-blue-500' },
    { component: VscVscode, className: 'text-blue-500' },
    { component: IoLogoJavascript, className: 'text-yellow-500' },
];

const FallingIcons = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * iconList.length);
            const IconComponent = iconList[randomIndex].component;
            const className = iconList[randomIndex].className;

            const newIcon = {
                id: Math.random().toString(36).substr(2, 9),
                left: Math.random() * window.innerWidth,
                delay: Math.random() * 2,
                IconComponent,
                className,
            };

            setIcons(prev => [...prev, newIcon]);

            setTimeout(() => {
                setIcons(prev => prev.filter(i => i.id !== newIcon.id));
            }, 5000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {icons.map(icon => (
                <div
                    key={icon.id}
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        left: icon.left,
                        animation: `fall 5s linear ${icon.delay}s forwards`,
                    }}
                >
                    <icon.IconComponent className={`${icon.className} w-6 h-6 opacity-80`} />
                </div>
            ))}

            <style>{`
        @keyframes fall {
          to {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default FallingIcons;
