import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Send,
    CheckCircle,
    AlertTriangle
} from 'lucide-react';
import { SendEmail } from '@/integrations/Core';

const contactInfo = [{
        icon: Mail,
        title: "Email",
        value: "ajasti7720@sdsu.edu",
        href: "mailto:ajasti7720@sdsu.edu"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "(703) 232-9737",
        href: "tel:+17032329737"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "San Diego, CA",
        href: "#"
    }
];

const socialLinks = [{
        icon: Github,
        title: "GitHub",
        href: "https://github.com/Adityaj7",
        color: "hover:text-purple-300"
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/ajasti-69420ai",
        color: "hover:text-blue-400"
    }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await SendEmail({
                to: 'ajasti7720@sdsu.edu',
                from_name: `Portfolio Contact - ${formData.name}`,
                subject: `New Message from Portfolio: ${formData.subject}`,
                body: `
          You have a new message from your portfolio website.\n
          --------------------------------------------------\n
          Name: ${formData.name}\n
          Email: ${formData.email}\n
          --------------------------------------------------\n
          Message:\n
          ${formData.message}
        `
            });

            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error("Email submission error:", error);
            setSubmitError("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or just want to chat about technology?
                        I'd love to hear from you and explore how we can create something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <Card className="h-full border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">
                                    Get In Touch
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div 
                                        key={info.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">{info.title}</h4>
                                            <a href={info.href} className="text-slate-300 hover:text-purple-300 transition-colors">
                                                {info.value}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="font-medium text-white mb-4">Follow Me</h4>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <a 
                                                key={social.title}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Card className="border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">
                                    Send Me a Message
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                        <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-white">Name</Label>
                                                <Input 
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your full name"
                                                    required
                                                    className="bg-slate-700/50 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-white">Email</Label>
                                                <Input 
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="your.email@example.com"
                                                    required
                                                    className="bg-slate-700/50 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-white">Subject</Label>
                                            <Input 
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder="What's this about?"
                                                required
                                                className="bg-slate-700/50 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-white">Message</Label>
                                            <Textarea 
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell me about your project or idea..."
                                                rows={6}
                                                required
                                                className="bg-slate-700/50 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500"
                                            />
                                        </div>

                                        <Button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-purple-400/20"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                        {submitError && (
                                            <div className="flex items-center gap-2 text-sm text-red-400 mt-4">
                                                <AlertTriangle className="w-4 h-4" />
                                                <span>{submitError}</span>
                                            </div>
                                        )}
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
