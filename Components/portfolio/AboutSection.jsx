import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const interests = [
    "Soccer", "Surfing", "Golf", "Hackathons",
    "Traveling", "Internships", "AI Club", "TritonHacks",
    "Tennis", "Badminton", "Olympiads", "Squash",
    "Billiards", "Equestrian Jumping"
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                        About Me
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        I'm a passionate software developer with a keen eye for design and a love for creating 
                        innovative solutions that make a positive impact on people's lives.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c7230ba0b0853fa1f10751/90a03208a_IMG_4569.jpg"
                                alt="Aditya Jasti"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Driven by Code, Intrigued by Markets.
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            As a Computer Science student at San Diego State University, I specialize in creating full-stack applications that are not only functional but also beautiful and user-friendly. My journey started with curiosity about how things work, and it's evolved into a passion 
                            for creating digital experiences that matter.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, competing in hackathons, or playing soccer. I believe that diverse experiences and a drive
                            for continuous learning make us better developers and more creative problem solvers.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Alongside my passion
                            for technology, I hold a deep interest in finance and the dynamics of financial markets. I am eager to explore opportunities where I can apply my technical skills to solve complex problems in the financial sector, bridging the gap between technology and market analysis.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-lg font-semibold text-white mb-3">Interests & Activities</h4>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest) => (
                                    <Badge 
                                        key={interest} 
                                        className="bg-purple-500/20 border-purple-400/30 text-purple-200 backdrop-blur-sm hover:bg-purple-500/30 transition-colors"
                                    >
                                        {interest}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
