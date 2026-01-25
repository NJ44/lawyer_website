import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'

const members = [
    {
        name: 'שלווה גונסון',
        role: 'שותפה בכירה - משפט עסקי',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
        link: '#',
    },
    {
        name: 'מיכאל חן',
        role: 'שותף - הגנה פלילית',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
        link: '#',
    },
    {
        name: 'ג׳יימס וילסון',
        role: 'שותף - נזקי גוף',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
        link: '#',
    },
]

export default function TeamSection() {
    const { t, language } = useTranslation();
    const isRtl = language === 'he';

    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className={`mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <div className="sm:w-2/5">
                        <h2 className="text-4xl font-bold">{t.team.title}</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>{t.team.description}</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className={`mt-1 flex items-center justify-between ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link to={member.link} className="group-hover:text-primary dark:group-hover:text-primary inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            פרופיל עורך דין
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
