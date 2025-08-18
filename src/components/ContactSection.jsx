import { Mail, Linkedin, Github, Phone } from "lucide-react";

export const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gradient opacity-0 animate-fade-in">
          Contact Me
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:bvsmjayaditya@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-2"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-foreground">bvsmjayaditya@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+91 9014198062"
            className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-3"
          >
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-foreground">+91 90141 98062</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/venkata-sai-mallik-jay-aditya-5aa513301/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-4"
          >
            <Linkedin className="w-6 h-6 text-primary" />
            <span className="text-foreground">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bvsmjayaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-6"
          >
            <Github className="w-6 h-6 text-primary" />
            <span className="text-foreground">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
