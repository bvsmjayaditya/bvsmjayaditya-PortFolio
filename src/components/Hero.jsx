import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block opacity-0 animate-fade-in">
              Hi, I&apos;m
            </span>

            <span className="block text-primary opacity-0 animate-fade-in-delay-2">
              Jay Aditya
            </span>

            <span className="block text-gradient opacity-0 animate-fade-in-delay-4">
              From IIITDM Jabalpur
            </span>
          </h1>

          <p className="text-base md:text-lg text-gradient max-w-2xl mx-auto opacity-0 animate-fade-in-delay-6">
            Expert on <span className="font-semibold">Codeforces</span>, 4★ on{" "}
            <span className="font-semibold">CodeChef</span>, and over{" "}
            <span className="font-semibold">500 problems</span> solved on
            LeetCode with a peak rating of{" "}
            <span className="font-semibold">2032</span>. I also explore{" "}
            <span className="font-semibold">web development</span>, building
            practical and creative applications.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-small text-muted-foreground mb-2">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
      </div>
      <a
                href="/JayAditya_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary 
                           hover:bg-primary/10 transition-colors duration-300 mt-5"
              >
                Download CV
              </a>
    </section>
  );
};
