import { Link } from 'react-router-dom';
import { FiMoon, FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    // Xóa label khỏi languages, chỉ dùng flag và code
    const languages = [
        { code: 'vi', flag: '/flag-vn.svg' },
        { code: 'en', flag: '/flag-en.svg' }
    ];
    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-30 w-full border-b border-transparent bg-white max-md:border-gray-100">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">

                {/* Logo */}
                <Link to="/" className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">
                    &lt;NGTHANHVU /&gt;
                </Link>

                {/* Nav links + action buttons (desktop) */}
                <div className="hidden items-center gap-6 md:flex">
                    {/* Navigation links */}
                    <ul className="flex list-none items-center gap-6">
                        <li><a href="#about" className="text-base font-medium text-gray-600 transition-all hover:text-gray-900">{t('header.about')}</a></li>
                        <li><a href="#skills" className="text-base font-medium text-gray-600 transition-all hover:text-gray-900">{t('header.skills')}</a></li>
                        <li><a href="#work" className="text-base font-medium text-gray-600 transition-all hover:text-gray-900">{t('header.projects')}</a></li>
                        <li><a href="#contact" className="text-base font-medium text-gray-600 transition-all hover:text-gray-900">{t('header.contact')}</a></li>
                    </ul>

                    {/* Divider */}
                    <div className="h-6 w-0.5 bg-gray-100" />

                    {/* Theme toggle & download button */}
                    <div className="flex items-center gap-4">
                        <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200">
                            <FiMoon className="w-6 h-6 text-gray-600 hover:text-gray-700" />
                        </button>
                        <a
                            href="/cv.pdf"
                            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
                            download
                        >
                            {t('header.download_cv')}
                        </a>

                        {/* Language Switcher */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="flex items-center justify-center gap-2 px-2 py-1 border-2 border-gray-300 rounded-lg hover:bg-gray-100 text-sm min-w-[40px] transition-colors duration-150"
                                onClick={() => setOpen(o => !o)}
                                style={{ height: 36 }}
                            >
                                <img src={currentLang.flag} alt={currentLang.code} className="w-6 h-6 rounded-sm object-cover" />
                                <svg className={`w-4 h-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            {open && (
                                <div className="absolute right-0 mt-2 w-20 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 py-1">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`flex items-center justify-center w-full py-2 transition-colors duration-100 ${i18n.language === lang.code ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-100'}`}
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
                    aria-expanded="false"
                    className="relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 flex md:hidden"
                >
                    <FiMenu className="w-6 h-6 text-gray-600 hover:text-gray-700" />
                </button>
            </div>
        </header>
    );
};

export default Header;
