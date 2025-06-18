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
    // 'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'PHP': 'public/image/php.png',
    'Adonis': '/image/AdonisJS.png',
    'REST APIs': '/image/api.png',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  
    // Tools & Software
    'Visual Studio': '/image/vscode.png',
    'Dbeaver': '/image/DBeaver_logo.png',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Microsoft Office': '/image/moffice.png',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', // (ยังไม่มีใน devicon, อาจใช้ไอคอนสำรอง)
    'Notion': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Cloudflare': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
    'Intellij IDEA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  };
  
  const categories = [
    {
      title: 'Frameworks',
      skills: ['Node.js' , 'React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Spring Boot'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'JavaScript','Python', 'PHP', 'Adonis', 'REST APIs'],
    },
    {
      title: 'Software & Tools',
      skills: ['Visual Studio','Intellij IDEA', 'Dbeaver', 'Figma', 'Microsoft Office', 'Notion'],
    },
    {
      title: 'DevOps & API',
      skills: [ 'Git' , 'GitHub','Docker', 'Postman', 'Cloudflare'],
    },
  ];  

  const content = {
    en: {
      about: 'About Me',
      skills: 'Skills',
      experience: 'Work Experience',
      experiences: [
      {
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
          'Understanding frontend frameworks: React.js, Next.js, and Vue.js',
          'Hands-on experience with Docker for containerization and DBeaver for database management',
          'Understanding of Git commands and version control workflows'
        ]
      },
    ],
      education: 'Education',
      projects: 'Featured Projects',
      role: 'Software Developer',
      aboutText: "My goal is to adventure into the world of technology That i love and consistently challenges. it's make me enthusiasm for learning about programming languages and new techniques will reach me to become an exceptional developer. I hope that Every code i write will be a part of creating a future that Advances in Technology",
    },
    th: {
      about: 'รู้จักกันหน่อยไหม',
      skills: 'ทักษะ',
      experience: 'ประสบการณ์การทำงาน',
      experiences: [
        {
          title: 'ประธานสาขาภาควิชาระบบสารสนเทศ',
          company: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
          period: 'เมษายน 2567 - มีนาคม 2568',
          achievements: [
            'ฝึกภาวะผู้นำผ่านการจัดกิจกรรมและประสบการณ์จริง',
            'พัฒนาทักษะการวางแผนและบริหารทรัพยากรของนักศึกษา',
            'เรียนรู้การตัดสินใจและแก้ปัญหาในสถานการณ์ที่มีความกดดัน'
          ]
        },
        {
          title: 'นักพัฒนา Full Stack',
          company: 'บริษัท วีคาโบ้ จำกัด',
          period: 'มิถุนายน 2567 - ตุลาคม 2567',
          achievements: [
            'ฝึกทักษะการทำงานเป็นทีม และการสื่อสารผ่านโปรเจกต์จริง',
            'พัฒนาโปรแกรม และออกแบบเอกสาร PDF อย่างมืออาชีพ เช่น ใบเสนอราคาและใบเสร็จ',
            'ร่วมพัฒนาระบบจัดการทรัพยากรภายในองค์กร'
          ]
        },
        {
          title: 'นักพัฒนา Full Stack',
          company: 'บริษัท โพรทอส เทคโนโลยี จำกัด',
          period: 'เมษายน 2567 - พฤษภาคม 2567',
          achievements: [
            'เรียนรู้การใช้งานเฟรมเวิร์ค React.js, Next.js, Vue.js',
            'ใช้งาน Docker และ DBeaver ในการจัดการฐานข้อมูลจริง',
            'เรียนรู้การใช้งานการใช้ Git และการควบคุมเวอร์ชันของโค้ด'
          ]
        },
      ],
      education: 'การศึกษา',
      projects: 'โปรเจกต์ที่โดดเด่น',
      role: 'นักพัฒนาซอฟต์แวร์',
      aboutText: 'เป้าหมายของผมคือการผจญภัยในโลกของเทคโนโลยีซึ่งเป็นที่ที่ผมรักและที่ทำให้ผมรู้สึกท้าทายอยู่ตลอดเวลาความกระตือรือร้นที่ไม่หยุดยั้งในการเรียนรู้เกี่ยวกับภาษาโปรแกรมและเทคนิคใหม่ๆ ทำให้ผมพร้อมที่จะเป็นนักพัฒนาที่ยอดเยี่ยม และตัวผมเองหวังว่า “ทุกโค้ดที่ผมเขียนจะเป็นส่วนหนึ่งของการสร้างอนาคตที่ก้าวหน้าทางด้านเทคโนโลยี” ฝากตัวด้วยก๊าบบ 🪿',
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
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/rittinun-disaraphong-516604327/', hoverColor: 'hover:text-blue-500' }
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
                 {t.experiences.map((job, index) => (
                    <div key={`${job.title}-${job.company}-${index}`} className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
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
                <h3 className="text-xl font-semibold">
                  {isEnglish ? 'Rajamangala University of Technology Thanyaburi' : 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี'}
                </h3>
                <p className={textColors.accent}>
                  {isEnglish ? 'University • 2021 - 2025' : 'มหาวิทยาลัย • 2564 - 2568'}
                </p>
                <p className={`mt-2 ${textColors.secondary}`}>
                  {isEnglish 
                    ? 'Information Systems Program. GPAX 3.35/4.00' 
                    : 'สาขาระบบสารสนเทศ เกรดเฉลี่ยสะสม 3.35/4.00'}
                </p>
              </div>

              <br />

              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">
                  {isEnglish ? 'Matthayom Wat Dusitaram School' : 'โรงเรียนมัธยมวัดดุสิตาราม'}
                </h3>
                <p className={textColors.accent}>
                  {isEnglish ? 'High School • 2014 - 2020' : 'มัธยมศึกษา • 2557 - 2563'}
                </p>
                <p className={`mt-2 ${textColors.secondary}`}>
                  {isEnglish 
                    ? 'Mathematics English Program. GPAX 3.60/4.00' 
                    : 'แผนการเรียนคณิตศาสตร์-อังกฤษ เกรดเฉลี่ยสะสม 3.60/4.00'}
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
                    title: 'Report Problem RTBS', 
                    image: 'public/image/ReportRTBS.png',
                    description: 'โปรเจกต์นี้เป็นระบบรายงานปัญหาสำหรับนักศึกษาและบุคลากรของมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี โดยมีฟีเจอร์หลักในการรายงานปัญหาและติดตามสถานะการแก้ไขปัญหา',
                  },
                  {
                    title: 'Fleetex Vecabo',
                    image: 'public/image/VecaboFleetex.png',
                    description: 'โปรเจกต์นี้เป็นระบบจัดการทรัพยากรภายในของบริษัท Vecabo Co., Ltd. โดยมีฟีเจอร์หลักในการจัดการทรัพยากรต่างๆ เช่น การจัดการพนักงาน ออกเอกสารต่างๆ',
                  },
                  {
                    title: 'Comming Soon...',
                    image: '/image/comingsoon.png',
                    description: 'Comming Soon...',
                  },
                  {
                    title: 'Report Problem',
                    image: '/image/comingsoon.png',
                    description: 'Comming Soon...',
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 transform hover:scale-[1.01] transition-all duration-300 ease-in-out ${
                      isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                    }`}
                  >
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                    {/* Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-4 shadow"
                      />
                    )}

                    {/* Description */}
                    <p className={`${textColors.secondary}`}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer Section */}
          <footer className={`text-center py-6 mt-6 transition-all duration-300 ease-in-out ${textColors.secondary}`}>
            © 2025 Rittinun Disaraphong. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;