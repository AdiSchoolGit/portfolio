import React from 'react';
import HeroSection from '../Components/portfolio/HeroSection';
import AboutSection from '../Components/portfolio/AboutSection';
import ExperienceSection from '../Components/portfolio/ExperienceSection';
import ProjectsSection from '../Components/portfolio/ProjectsSection';
import SkillsSection from '../Components/portfolio/SkillsSection';
import ContactSection from '../Components/portfolio/ContactSection';

export default function Portfolio() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </div>
    );
}
