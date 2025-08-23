import { Code, Trophy, Users } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Competitive Programmer & Web Developer
            </h3>

            <p className="text-muted-foreground">
              <p>
                I am a third-year Computer Science student at 
                <span class="font-medium text-primary">IIITDM Jabalpur</span>, 
                with a strong interest in algorithmic problem-solving and building efficient solutions. 
                I have a solid foundation in Data Structures and Algorithms, regularly participate in coding contests, 
                and am expanding my skills in full-stack development with React, Node.js, and modern databases.
              </p>

            </p>

            <p className="text-muted-foreground">
              My achievements include{" "}
              <span className="font-medium">Codeforces Expert (1631)</span>,{" "}
              <span className="font-medium">CodeChef 4★ (1822)</span>,{" "}
              <span className="font-medium">LeetCode Knight (2032, 400+ problems solved)</span>, 
              and a <span className="font-medium">Global Rank 195</span> in CodeChef Div-2 Starters 177.  
              I also enjoy mentoring juniors in DSA, helping them sharpen their problem-solving skills for contests.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Problem Solving */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong foundations in algorithms & data structures, with 400+ problems solved across platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Achievements</h4>
                  <p className="text-muted-foreground">
                    Codeforces Expert, CodeChef 4★, LeetCode Knight, and JEE Mains 98.19 percentile.
                  </p>
                </div>
              </div>
            </div>

            {/* Mentorship */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mentorship</h4>
                  <p className="text-muted-foreground">
                    Mentoring juniors in DSA and competitive programming to help them succeed in contests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
