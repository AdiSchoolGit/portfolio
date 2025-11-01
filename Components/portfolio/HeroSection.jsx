import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

export default function HeroSection() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [-50, 50, -50],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut"
                    }}
                    style={{ top: '20%', left: '20%' }}
                />
                <motion.div 
                    className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [50, -50, 50],
                        y: [-30, 30, -30],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut",
                        delay: 2
                    }}
                    style={{ bottom: '20%', right: '20%' }}
                />
                <motion.div 
                    className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
                    animate={{
                        x: [-30, 30, -30],
                        y: [20, -20, 20],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut",
                        delay: 4
                    }}
                    style={{ top: '50%', left: '50%' }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight mb-4">
                            Aditya Jasti
                        </h1>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Sophomore at San Diego State University, pursuing a B.S. in Computer Science.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button 
                            onClick={scrollToProjects}
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-400/20 backdrop-blur-sm"
                        >
                            View My Work
                        </Button>
                        <a 
                            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c7230ba0b0853fa1f10751/488283d7b_AdiResumeV21.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button 
                                variant="outline"
                                size="lg"
                                className="border-2 border-slate-400/30 hover:border-slate-300/50 bg-slate-800/30 backdrop-blur-sm text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                View Resume
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center gap-6 mb-16"
                    >
                        <a 
                            href="https://github.com/Adityaj7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                        >
                            <Github className="w-6 h-6 text-white" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ajasti-69420ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                        >
                            <Linkedin className="w-6 h-6 text-blue-400" />
                        </a>
                        <a 
                            href="mailto:ajasti7720@sdsu.edu"
                            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                        >
                            <Mail className="w-6 h-6 text-white" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <button 
                    onClick={scrollToProjects}
                    className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                </button>
            </motion.div>
        </section>
    );
}
