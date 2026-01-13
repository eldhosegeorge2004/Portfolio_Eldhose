import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
    return (
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
        </div>
    );
}
