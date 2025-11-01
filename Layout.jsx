import React from "react";
import { Code, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import CursorHighlight from "@/components/ui/CursorHighlight";

const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
];

export default function Layout({ children, currentPageName }) {
    const [activeSection, setActiveSection] = React.useState("home");
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        document.title = "Adi Portfolio";
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navigationItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <CursorHighlight />

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
                  : 'bg-transparent'
              }`}>
                <nav className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Aditya Jasti
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navigationItems.map((item) => (
                                <button 
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-sm font-medium transition-all duration-200 hover:text-purple-300 relative ${
                                        activeSection === item.href.substring(1)
                                          ? 'text-purple-300'
                                          : 'text-slate-300'
                                      }`}
                                >
                                    {item.name}
                                    {activeSection === item.href.substring(1) && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Navigation */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 bg-slate-900 border-white/10">
                                <div className="mt-8 space-y-6">
                                    {navigationItems.map((item) => (
                                        <button 
                                            key={item.name}
                                            onClick={() => scrollToSection(item.href)}
                                            className="block w-full text-left text-lg font-medium text-slate-300 hover:text-purple-300 transition-colors py-2"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative">{children}</main>
        </div>
    );
}
