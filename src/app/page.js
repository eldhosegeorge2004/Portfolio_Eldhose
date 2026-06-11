import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialSection from "./components/TestimonialSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
    return (
        <div className="container mt-24 mx-auto px-4 sm:px-12 py-4 flex flex-col gap-8">
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <AboutSection />
            <ProjectsSection />
            <TestimonialSection />
            <EmailSection />
        </div>
    );
}
