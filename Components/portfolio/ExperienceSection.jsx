import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Zap } from 'lucide-react';

const experiences = [{
        company: "Andor Tech",
        role: "Intern",
        date: "May 2023 – July 2023",
        location: "Bangalore, IN",
        description: "Integrated WhatsApp Business with client platforms using Azure apps for a leading enterprise messaging solutions firm, supporting 73 clients.",
        results: [
            "Built server workflow templates to accelerate CRM onboarding and messaging pipelines.",
            "Directly aided new client acquisition, contributing to an approximate 7% increase in annual revenue."
        ]
    },
    {
        company: "FCOOS Technologies",
        role: "Intern",
        date: "May 2022 – July 2022",
        location: "Bangalore, IN",
        description: "Configured and calibrated enterprise-grade routers for an IT infrastructure and networking solutions provider, implementing OSPF and BGP protocols.",
        results: [
            "Authored automation scripts that cut router deployment time by 13%, reducing client onboarding costs.",
            "Diagnosed hardware issues and improved signal integrity, ensuring high uptime for client systems."
        ]
    },
    {
        company: "Samsung Electronics",
        role: "Intern",
        date: "May 2021 – July 2021",
        location: "Bangalore, IN",
        description: "Conducted QA testing on pre-release features for a Fortune 500 leader in consumer electronics, identifying UX and performance bottlenecks.",
        results: [
            "Coordinated engineering sample logistics and certification processes, ensuring timely product approvals.",
            "Identified and reported critical performance bugs, improving user experience for millions of users."
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Hands-on experience with industry leaders, contributing to real-world projects and driving tangible results.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-pink-500/50" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={exp.company}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative flex items-start md:grid md:grid-cols-2 md:gap-8"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-slate-900 border-4 border-purple-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50" />

                                {/* Empty div for spacing on one side */}
                                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>

                                <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <Card className="hover:shadow-2xl transition-all duration-300 border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-lg">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-sm text-purple-300 font-semibold">{exp.date}</p>
                                                    <CardTitle className="text-xl font-bold text-white mt-1">{exp.company}</CardTitle>
                                                    <p className="text-slate-300 font-medium">{exp.role}</p>
                                                </div>
                                                <Briefcase className="w-6 h-6 text-slate-500" />
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                                            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                Key Results:
                                            </h4>
                                            <ul className="space-y-2 list-disc list-inside text-slate-300">
                                                {exp.results.map(result => (
                                                    <li key={result}>{result}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
