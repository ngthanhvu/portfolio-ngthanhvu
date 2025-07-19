import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const languages = [
        { code: 'vi', flag: '/flag-vn.svg' },
        { code: 'en', flag: '/flag-en.svg' }
    ];
    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-30 w-full border-b border-transparent bg-white dark:bg-gray-900 max-md:border-gray-100 dark:border-gray-800">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">

                {/* Logo */}
                <Link to="/" className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 dark:text-white font-bold">
                    &lt;NGTHANHVU /&gt;
                </Link>

                {/* Nav links + action buttons (desktop) */}
                <div className="hidden items-center gap-6 md:flex">
                    {/* Navigation links */}
                    <ul className="flex list-none items-center gap-6">
                        <li><a href="#about" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('header.about')}</a></li>
                        <li><a href="#skills" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('header.skills')}</a></li>
                        <li><a href="#work" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('header.projects')}</a></li>
                        <li><a href="#contact" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('header.contact')}</a></li>
                    </ul>

                    {/* Divider */}
                    <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700" />

                    {/* Theme toggle & download button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 rounded-lg p-1.5 transition-colors duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <FiSun className="w-6 h-6 text-yellow-400" />
                            ) : (
                                <FiMoon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>

                        <a
                            href="/cv.pdf"
                            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                            download
                        >
                            {t('header.download_cv')}
                        </a>

                        {/* Language Switcher */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="flex items-center justify-center gap-2 px-2 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm min-w-[40px] transition-colors duration-150"
                                onClick={() => setOpen(o => !o)}
                                style={{ height: 36 }}
                            >
                                <img src={currentLang.flag} alt={currentLang.code} className="w-6 h-6 rounded-sm object-cover" />
                                <svg className={`w-4 h-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            {open && (
                                <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 py-1">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`flex items-center justify-center w-full py-2 transition-colors duration-100 ${i18n.language === lang.code
                                                ? 'bg-blue-50 dark:bg-blue-500/10 border-l-4 border-blue-500 dark:border-blue-400'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            <img src={lang.flag} alt={lang.code} className="w-6 h-6 rounded-sm object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={mobileMenuOpen}
                    className="relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-700 rounded-lg p-1.5 transition-colors duration-200 flex md:hidden"
                    onClick={() => setMobileMenuOpen(o => !o)}
                >
                    <FiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white" />
                </button>

                {/* Mobile menu overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-black/40 md:hidden" style={{ backdropFilter: 'blur(2px)' }}>
                        <nav
                            ref={mobileMenuRef}
                            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-6 gap-6 animate-slide-in"
                        >
                            {/* Close button */}
                            <button
                                className="self-end mb-4 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            {/* Navigation links */}
                            <ul className="flex flex-col gap-4">
                                <li><a href="#about" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>{t('header.about')}</a></li>
                                <li><a href="#skills" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>{t('header.skills')}</a></li>
                                <li><a href="#work" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>{t('header.projects')}</a></li>
                                <li><a href="#contact" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>{t('header.contact')}</a></li>
                            </ul>
                            <div className="h-0.5 w-full bg-gray-100 dark:bg-gray-700 my-2" />
                            {/* Theme toggle */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                            >
                                {darkMode ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                                <span>{darkMode ? t('header.light_mode') : t('header.dark_mode')}</span>
                            </button>
                            {/* Download CV */}
                            <a
                                href="/cv.pdf"
                                className="flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                                download
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('header.download_cv')}
                            </a>
                            {/* Language Switcher */}
                            <div className="flex gap-2 mt-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { changeLanguage(lang.code); setMobileMenuOpen(false); }}
                                        className={`flex items-center justify-center px-2 py-1 rounded-lg border-2 ${i18n.language === lang.code ? 'border-blue-500 dark:border-blue-400' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800`}
                                    >
                                        <img src={lang.flag} alt={lang.code} className="w-6 h-6 rounded-sm object-cover" />
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
