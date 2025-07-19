import {
    FiGithub,
    FiTwitter,
    FiFigma,
    FiMapPin
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const SectionHead = (props) => {
    const { t } = useTranslation();
    const info = props.info;

    return (
        <section className="w-full bg-gray-50 py-16 md:py-20 2xl:py-24" id="hero">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col gap-12 md:flex-row">

                    {/* Image Section */}
                    <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                            <img
                                alt="Headshot"
                                loading="lazy"
                                className="absolute z-10 h-[280px] w-[240px] border-8 border-white max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
                                src={info.avatar}
                            />
                            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start 2xl:gap-12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
                                {t('sectionHead.greeting', { name: info.name })} <span className="inline-block animate-waving-hand">👋</span>
                            </h1>
                            <p className="text-normal text-base text-gray-700">
                                {t('sectionHead.bio')}
                            </p>
                        </div>

                        {/* Location + Status */}
                        <div className="flex flex-col gap-2 text-gray-700">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-gray-600" />
                                <p>{t('sectionHead.location')}</p>
                            </div>
                            {info.available && (
                                <div className="flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center">
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                        </span>
                                    </div>
                                    <p>{t('sectionHead.available')}</p>
                                </div>
                            )}
                        </div>

                        {/* Social Buttons */}
                        <div className="flex gap-2">
                            <a href={info.social.github} target="_blank" rel="noreferrer" className="hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200">
                                <FiGithub className="w-6 h-6 stroke-gray-600 hover:stroke-gray-700" />
                            </a>
                            <a href={info.social.twitter} target="_blank" rel="noreferrer" className="hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200">
                                <FiTwitter className="w-6 h-6 stroke-gray-600 hover:stroke-gray-700" />
                            </a>
                            <a href={info.social.figma} target="_blank" rel="noreferrer" className="hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200">
                                <FiFigma className="w-6 h-6 stroke-gray-600 hover:stroke-gray-700" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionHead;
