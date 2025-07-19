import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation();
    const content = t('about.content', { returnObjects: true });

    return (
        <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-gray-900" id="about">
            <div className="mx-auto w-full max-w-7xl flex flex-col gap-12 px-4 md:px-8">
                {/* Title Centered */}
                <div className="flex justify-center">
                    <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1">
                        <p className="text-sm font-medium dark:text-gray-300">{t('about.section_title')}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Image */}
                    <div className="flex justify-center md:order-first md:justify-end">
                        <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                            <img
                                alt="Full pose"
                                loading="lazy"
                                className="absolute z-10 h-[360px] w-[280px] border-8 border-white dark:border-gray-800 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] object-cover"
                                src={t('about.image')}
                            />
                            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 dark:bg-gray-800 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex max-w-xl flex-col gap-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-300">
                            {t('about.title')}
                        </h3>

                        {Array.isArray(content) && content.map((para, index) => (
                            <p
                                key={index}
                                className="text-base text-gray-700 dark:text-gray-400"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
