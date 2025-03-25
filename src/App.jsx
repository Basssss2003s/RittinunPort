"use client"
import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Sun, 
  Moon } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
  };

  const skillLogos = {
    // Frontend
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Tailwind CSS': '/image/Tailwind_CSS_Logo.svg.png',
  
    // Backend
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Adonis': '/image/AdonisJS.png',
    'REST APIs': '/image/api.png',
  
    // Software
    'Visual Studio': '/image/vscode.png',
    'Dbeaver': '/image/DBeaver_logo.png',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Microsoft Office': '/image/moffice.png',
  };
  
  const categories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'Adonis', 'REST APIs'],
    },
    {
      title: 'Software',
      skills: ['Visual Studio', 'Dbeaver', 'Figma', 'Microsoft Office'],
    },
  ];
  

  const content = {
    en: {
      about: 'About Me',
      skills: 'Skills & Expertise',
      experience: 'Work Experience',
      education: 'Education',
      projects: 'Featured Projects',
      role: 'Senior Software Developer',
      aboutText: "Hello! ",
    },
    th: {
      about: 'เกี่ยวกับฉัน',
      skills: 'ทักษะและความเชี่ยวชาญ',
      experience: 'ประสบการณ์การทำงาน',
      education: 'การศึกษา',
      projects: 'โปรเจกต์ที่โดดเด่น',
      role: 'นักพัฒนาซอฟต์แวร์อาวุโส',
      aboutText: 'สวัสดีครับ! ',
    }
  };

  const t = isEnglish ? content.en : content.th;

  // Define theme-based text colors
  const textColors = {
    primary: isDark ? 'text-white' : 'text-gray-900',
    secondary: isDark ? 'text-gray-300' : 'text-gray-600',
    accent: 'text-blue-400',
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ease-in-out ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-white'}`}>
      <div className={`min-h-screen transition-all duration-300 ease-in-out ${textColors.primary}`}>
        {/* Theme Toggle Button */}
        <button
          onClick={handleThemeChange}
          className={`fixed top-4 right-4 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
            isDark 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
          }`}
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <Sun />
            </div>
            <div className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
              <Moon />
            </div>
          </div>
        </button>

        {/* Language Toggle Button */}
        <button
          onClick={handleLanguageChange}
          className={`fixed top-4 right-20 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
            isDark 
              ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' 
              : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
          }`}
          aria-label="Toggle language"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform ${isEnglish ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              EN
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform ${isEnglish ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
              TH
            </div>
          </div>
        </button>

        <div className="container mx-auto px-4 py-16">
          <div className={`max-w-4xl mx-auto transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative w-48 h-48 group">
                <div className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300 ease-in-out ${isDark ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
                <div className={`relative w-48 h-48 rounded-full overflow-hidden ring-4 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3 ${isDark ? 'ring-blue-500' : 'ring-blue-400'}`}>
                  <img
                    src="/image/rittinun.png"
                    alt="Your Name"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className={`text-4xl font-bold mb-4 transition-all duration-300 ease-in-out ${textColors.primary} ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  Rittinun Disaraphong
                </h1>
                <p className={`text-xl mb-6 transition-all duration-300 ease-in-out ${textColors.primary} ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  {t.role}
                </p>
                
                {/* Social Links */}
                <div className={`flex gap-6 justify-center md:justify-start transition-all duration-300 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  {[
                    { icon: Github, href: 'https://github.com/Basssss2003s', hoverColor: 'hover:text-blue-400' },
                    { icon: Instagram, href: 'https://instagram.com/basssss.s', hoverColor: 'hover:text-pink-400' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', hoverColor: 'hover:text-blue-500' }
                  ].map(({ icon: Icon, href, hoverColor }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transform hover:scale-110 transition-all duration-300 ease-in-out ${hoverColor} ${textColors.primary}`}
                    >
                      <Icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className={`rounded-xl p-8 backdrop-blur-sm mb-12 transition-all duration-300 ease-in-out ${
              isDark 
                ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                : 'bg-white/50 hover:bg-white/70 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 transition-all duration-300 ease-in-out hover:translate-x-2 ${textColors.primary}`}>
                <Code className={textColors.accent} /> {t.about}
              </h2>
              <p className={`leading-relaxed transition-all duration-300 ease-in-out hover:scale-[1.01] ${textColors.secondary}`}>
                {t.aboutText}
              </p>
            </div>

            {/* Skills Section */}
            <div
              className={`rounded-xl p-8 backdrop-blur-sm mb-12 transition-all duration-300 ease-in-out ${
                isDark
                  ? 'bg-gray-800/50 hover:bg-gray-800/70'
                  : 'bg-white/50 hover:bg-white/70 shadow-lg'
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className={textColors.accent} /> {t.skills}
              </h2>
              <div className="flex flex-wrap gap-6">
                {categories.map((category) => (
                  <div key={category.title} className="space-y-4 min-w-[250px] flex-1">
                    <h3 className={`text-xl font-semibold mb-2 flex items-center gap-2`}>
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skill) => {
                        const logoUrl = skillLogos[skill];
                        return (
                          <div
                            key={skill}
                            className={`rounded-lg p-3 flex items-center gap-3 hover:translate-x-2 transition-all duration-300 ease-in-out ${
                              isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                            }`}
                          >
                            <img
                              src={logoUrl}
                              alt={skill}
                              className="w-5 h-5 object-contain"
                            />
                            <span>{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className={`rounded-xl p-8 backdrop-blur-sm mb-12 transition-all duration-300 ease-in-out ${
              isDark 
                ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                : 'bg-white/50 hover:bg-white/70 shadow-lg'
            }`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className={textColors.accent} /> {t.experience}
              </h2>
              <div className="space-y-8">
                {[{
                    title: 'President of the Information Systems Student',
                    company: 'Rajamangala University of Technology Thanyaburi',
                    period: 'April 2024 - Mar 2025',
                    achievements: [
                      'Developed leadership through practical, real-world experiences',
                      'Acquired skills in planning and managing student resources effectively',
                      'Enhanced ability to make decisions and solve problems under pressure'
                    ]
                  },
                  {
                    title: 'Full Stack Developer',
                    company: 'Vecabo Co., Ltd.',
                    period: 'June 2024 - October 2024',
                    achievements: [
                      'Strengthened communication and collaboration abilities through hands-on team projects',
                      'Practical experience in programming and designing professional PDF documents (e.g., quotations and receipts)',
                      'Participated in the development of internal resource management systems for business operations'
                    ]
                  },
                  {
                    title: 'Full Stack Developer',
                    company: 'Protoss Technology Co., Ltd.',
                    period: 'April 2024 - May 2024',
                    achievements: [
                      'Proficient in modern frontend frameworks: React.js, Next.js, and Vue.js',
                      'Hands-on experience with Docker for containerization and DBeaver for database management',
                      'Solid understanding of Git commands and version control workflows'
                    ]
                  },
                ].map((job) => (
                  <div key={job.title} className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className={textColors.accent}>{job.company} • {job.period}</p>
                    <ul className={`mt-2 list-disc list-inside space-y-1 ${textColors.secondary}`}>
                      {job.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className={`rounded-xl p-8 backdrop-blur-sm mb-12 transition-all duration-300 ease-in-out ${
              isDark 
                ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                : 'bg-white/50 hover:bg-white/70 shadow-lg'
            }`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className={textColors.accent} /> {t.education}
              </h2>
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">Rajamangala University of Technology Thanyaburi</h3>
                <p className={textColors.accent}>University • 2021 - 2025</p>
                <p className={`mt-2 ${textColors.secondary}`}>
                  Information Systems Program.
                </p>
              </div>
              <br></br>
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">Matthayom Wat Dusitaram School</h3>
                <p className={textColors.accent}>High School • 2014 - 2020</p>
                <p className={`mt-2 ${textColors.secondary}`}>
                  Mathematics English Program.
                </p>
              </div>
            </div>

            {/* Projects Section */}
            <div className={`rounded-xl p-8 backdrop-blur-sm transition-all duration-300 ease-in-out ${
              isDark 
                ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                : 'bg-white/50 hover:bg-white/70 shadow-lg'
            }`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className={textColors.accent} /> {t.projects}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Company Management',
                    description: 'Comming Soon...'
                  },
                  {
                    title: 'Report Problem',
                    description: 'Comming Soon...'
                  }
                ].map((project) => (
                  <div
                    key={project.title}
                    className={`rounded-lg p-6 transform hover:scale-[1.01] transition-all duration-300 ease-in-out ${
                      isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className={`mb-4 ${textColors.secondary}`}>
                      {project.description}
                    </p>
                    <a 
                      href="#" 
                      className={`inline-flex items-center gap-2 ${textColors.accent} hover:text-blue-300 transition-colors duration-200`}
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;