import {
    FiMail,
    FiPhone,
    FiGithub,
    FiInstagram,
    FiFacebook
} from 'react-icons/fi';
import { SiTelegram } from "react-icons/si";
import { useTranslation } from 'react-i18next';
const Contact = () => {
    return (
        <section id="contact" className="w-full bg-gray-50 dark:bg-gray-900 py-16 md:py-20 2xl:py-24">
            <div className="mx-auto max-w-7xl flex flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1">
                        <p className="text-sm font-medium">{useTranslation().t('contact.get_in_touch')}</p>
                    </div>
                    <p className="text-lg md:text-xl max-w-xl text-center dark:text-gray-300">
                        {useTranslation().t('contact.whats_next')}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-12">
                    <div className="flex flex-col items-center md:gap-4">
                        <div className="flex items-center gap-4 md:gap-5">
                            <FiMail className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />
                            <h2 className="text-lg md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
                                vuntpk03665@gmail.com
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 md:gap-5">
                            <FiPhone className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />
                            <h2 className="text-lg md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
                                +84 837497372
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-base text-center text-gray-700 dark:text-gray-300">
                            {useTranslation().t('contact.find_me')}
                        </p>
                        <div className="flex gap-2">
                            <a href="https://github.com/ngthanhvu" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition">
                                <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                            </a>
                            <a href="https://facebook.com/thanhvu.user" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition">
                                <FiFacebook className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                            </a>
                            <a href="https://instagram.com/ngthanhvu._" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition">
                                <FiInstagram className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                            </a>
                            <a href="https://t.me/ngthanhvu" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition">
                                <SiTelegram className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
