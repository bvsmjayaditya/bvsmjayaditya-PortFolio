import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* Intro */}
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="block opacity-0 animate-fade-in">
            Hi, I&apos;m
          </span>

          <span className="block text-primary opacity-0 animate-fade-in-delay-2">
            Jay Aditya
          </span>

          <span className="block text-gradient opacity-0 animate-fade-in-delay-4">
            IIITDM Jabalpur
          </span>
        </h1>

        {/* Short bio */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-6 leading-relaxed">
          Competitive programmer and aspiring developer. <br />
          <span className="font-semibold">Expert</span> on Codeforces,{" "}
          <span className="font-semibold">4★</span> on CodeChef, and solved{" "}
          <span className="font-semibold">500+ problems</span> on LeetCode
          (peak rating <span className="font-semibold">2032</span>).
          <br />
          Currently exploring{" "}
          <span className="font-semibold">web development</span> and building
          practical, creative applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-8">
          <a
            href="/JayAditya_Resume.pdf"
            download
            className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
