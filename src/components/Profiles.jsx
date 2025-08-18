import { FaGithub } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

export const Profiles = () => {
  return (
    <section
      id="profiles"
      className="relative py-16 px-6 flex flex-col items-center justify-center"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-gradient opacity-0 animate-fade-in">
          My Competitive & GitHub Profiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/bvsmjayaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-2"
          >
            <SiCodeforces className="text-4xl mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-foreground">Codeforces</h3>
            <p className="text-sm text-muted-foreground">
              Expert, Rating 1631
            </p>
          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/bvsmjayaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-4"
          >
            <SiCodechef className="text-4xl mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-foreground">CodeChef</h3>
            <p className="text-sm text-muted-foreground">4★ Coder</p>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/bvsmjayaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-6"
          >
            <SiLeetcode className="text-4xl mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-foreground">LeetCode</h3>
            <p className="text-sm text-muted-foreground">400+ Problems Solved</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bvsmjayaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-md bg-card hover:scale-105 transition transform opacity-0 animate-fade-in-delay-8"
          >
            <FaGithub className="text-4xl mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-foreground">GitHub</h3>
            <p className="text-sm text-muted-foreground">Web Dev Projects</p>
          </a>
        </div>
      </div>
    </section>
  );
};
