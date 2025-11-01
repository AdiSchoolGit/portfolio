import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ExternalLink, Eye } from 'lucide-react';

const categories = ["all", "web", "mobile"];

// Static projects data
const staticProjects = [{
        id: 1,
        title: "Circle Parking",
        description: "A free parking app for iOS that locates available parking spots in real-time. Features secure payments, user authentication, and a modern, intuitive UI.",
        technologies: ["SwiftUI", "Firebase", "React.js", "Stripe API", "Google Maps API"],
        image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        github_url: "https://github.com/Adityaj7/CircleParking",
        demo_url: "",
        featured: true,
        category: "mobile"
    },
    {
        id: 2,
        title: "PrepAI",
        description: "A web app that revolutionizes meal preparation by tracking macros, generating weekly plans, and creating customized recipes and grocery lists using AI.",
        technologies: ["React.js", "Node.js", "OpenAI API", "PostgreSQL", "Chart.js"],
        image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
        github_url: "https://github.com/Adityaj7/PrepAI",
        demo_url: "",
        featured: true,
        category: "web"
    },
    {
        id: 3,
        title: "Apprender",
        description: "A comprehensive Spanish learning assistant designed for IBDP students, featuring interactive quizzes, vocabulary flashcards, and grammar modules.",
        technologies: ["React Native", "Firebase", "Expo", "Gamification"],
        image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        github_url: "https://github.com/Adityaj7/Apprender",
        demo_url: "",
        featured: false,
        category: "mobile"
    },
    {
        id: 4,
        title: "Movie Roulette",
        description: "A fun web application that helps you decide what to watch next by providing a random movie suggestion based on your selected genres and ratings.",
        technologies: ["React.js", "TMDB API", "Tailwind CSS", "Vercel"],
        image_url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
        github_url: "https://github.com/Adityaj7/MovieRoulette",
        demo_url: "",
        featured: false,
        category: "web"
    }
];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [projects] = useState(staticProjects);

    const filteredProjects = activeCategory === "all" ?
        projects :
        projects.filter(project => project.category === activeCategory);

    const featuredProjects = filteredProjects.filter(p => p.featured);
    const regularProjects = filteredProjects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                        My Work
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects that showcase my passion
                        for creating innovative,
                        user-centered solutions across various technologies and platforms.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                        <TabsList className="bg-slate-800/50 border border-white/10 backdrop-blur-sm shadow-lg p-1">
                            {categories.map((category) => (
                                <TabsTrigger 
                                    key={category}
                                    value={category}
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-slate-300"
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Featured Projects */}
                        {featuredProjects.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {featuredProjects.map((project, index) => (
                                        <motion.div 
                                            key={project.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <ProjectCard project={project} featured={true} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Regular Projects */}
                        {regularProjects.length > 0 && (
                            <div>
                                {featuredProjects.length > 0 && (
                                    <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
                                )}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {regularProjects.map((project, index) => (
                                        <motion.div 
                                            key={project.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: (featuredProjects.length * 0.1) + index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-16">
                                <Eye className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects found</h3>
                                <p className="text-slate-500">No projects in this category yet.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function ProjectCard({ project, featured = false }) {
    return (
        <Card className={`group hover:shadow-2xl transition-all duration-300 border border-white/10 bg-slate-800/50 backdrop-blur-sm overflow-hidden flex flex-col h-full shadow-lg ${
            featured ? 'lg:col-span-1' : ''
        }`}>
            <div className="relative overflow-hidden">
                <img 
                    src={project.image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex gap-2">
                        {project.github_url && (
                            <Button size="sm" variant="secondary" asChild className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                                <a 
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Github className="w-4 h-4 mr-1" /> GitHub
                                </a>
                            </Button>
                        )}
                        {project.demo_url && (
                            <Button size="sm" variant="secondary" asChild className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                                <a 
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col">
                <p className="text-slate-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies?.map((tech) => (
                        <Badge 
                            key={tech} 
                            className="bg-white/10 border-white/20 text-slate-200 backdrop-blur-sm hover:bg-white/20 transition-colors text-xs"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
