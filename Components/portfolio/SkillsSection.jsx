import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    Smartphone,
    Server,
    Cloud,
    Wrench
} from 'lucide-react';

const skillCategories = [{
        title: "Frontend & Mobile",
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
        skills: ["SwiftUI", "React.js", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Backend",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        skills: ["Java", "C++", "PHP", "Node.js"]
    },
    {
        title: "Databases & Cloud",
        icon: Cloud,
        color: "from-purple-500 to-pink-500",
        skills: ["Firebase", "Microsoft Azure", "SQL", "NoSQL"]
    },
    {
        title: "Tools & Other",
        icon: Wrench,
        color: "from-orange-500 to-red-500",
        skills: ["AutoCAD", "Git", "Docker", "REST APIs"]
    }
];

const professionalSkills = [
    "Full-Stack Development",
    "Software Testing & QA",
    "Data Analysis",
    "Agile Methodologies",
    "Team Coordination",
    "Network Protocols (OSPF, BGP)",
    "Problem Solving"
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit built through hands-on experience,
                        continuous learning, and passion
                        for creating exceptional digital solutions.
                    </p>
                </motion.div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-2xl transition-all duration-300 border border-white/10 bg-slate-800/50 backdrop-blur-sm group">
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill) => (
                                            <Badge 
                                                key={skill} 
                                                className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Professional Skills */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card className="border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-white text-center">
                                Professional Skills
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {professionalSkills.map((skill) => (
                                    <Badge 
                                        key={skill}
                                        className="text-base px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-all"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
