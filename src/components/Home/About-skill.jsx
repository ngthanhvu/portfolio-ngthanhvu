// src/components/Skills.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSkills() {
            const { data, error } = await supabase
                .from("skills")
                .select("*")
                .order("name");

            if (error) {
                console.error("Error fetching skills:", error);
            } else {
                setSkills(data);
            }
            setLoading(false);
        }

        fetchSkills();
    }, []);

    return (
        <section className="w-full bg-gray-50 py-16 md:py-20 2xl:py-24" id="skills">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                {/* Section heading */}
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <p className="text-sm font-medium">{t('skills.section_title')}</p>
                        </div>
                    </div>
                    <p className="text-lg md:text-xl max-w-xl text-center">
                        {t('skills.section_desc')}
                    </p>
                </div>

                {/* Loading */}
                {loading ? (
                    <p className="text-center text-gray-500">{t('skills.loading')}</p>
                ) : skills.length === 0 ? (
                    <p className="text-center text-gray-500">{t('skills.no_data')}</p>
                ) : (
                    <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                        {skills.map((skill) => (
                            <div key={skill.id} className="flex flex-col items-center gap-2">
                                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={skill.icon_url}
                                        alt={skill.name}
                                        className="w-16 h-16 transition-transform duration-300 md:hover:scale-110"
                                    />
                                </a>
                                <p className="text-base md:text-lg text-center">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
