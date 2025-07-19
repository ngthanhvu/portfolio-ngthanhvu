import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*')

            if (error) {
                console.error('Error fetching projects:', error);
            } else {
                setProjects(data);
            }

            setLoading(false);
        }

        fetchProjects();
    }, []);

    if (loading) return null;

    return (
        <section className="w-full bg-gray-50 py-16 md:py-20 2xl:py-24" id="work">
            <div className="mx-auto w-full max-w-7xl flex flex-col gap-12 px-4 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-xl bg-gray-200 px-5 py-1">
                        <p className="text-sm font-medium">{t('project.section_title')}</p>
                    </div>
                    <p className="text-lg md:text-xl max-w-xl text-center">
                        {t('project.section_desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, idx) => (
                        <div
                            key={p.id || idx}
                            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-[180px] overflow-hidden">
                                <a href={p.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </a>
                            </div>
                            <div className="flex flex-col gap-4 p-5">
                                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                                <p className="text-sm text-gray-700">{p.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {(p.language || []).slice(0, 6).map((tool, i) => (
                                        <span key={i} className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center gap-1 text-gray-500 hover:underline text-sm"
                                >
                                    {t('project.visit')}<FiExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
