export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Portfolio
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20 dark:to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I&apos;m [Your Name]
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              A passionate web developer creating beautiful and functional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors font-medium">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I&apos;m a dedicated web developer with a passion for creating innovative and user-friendly applications.
              With expertise in modern web technologies, I transform ideas into reality through clean code and thoughtful design.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
              'Node.js', 'JavaScript', 'HTML/CSS', 'Git',
              'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'
            ].map((skill) => (
              <div key={skill} className="bg-background p-6 rounded-lg border border-foreground/10 text-center hover:border-blue-600 transition-colors hover:shadow-lg">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-foreground/5 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow border border-foreground/10">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-foreground/70 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      Live Demo →
                    </a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium">
              your.email@example.com
            </a>
            <span className="hidden sm:inline text-foreground/30">|</span>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
