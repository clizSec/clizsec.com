import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mark Liapustin',
  title: "Hi all, I'm Mark",
  description:
    "I am a highly experienced Chief Information Security Officer (CISO) currently serving at Trustifi. With a deep understanding of various domains, including email security, website security, API security, SCADA/ICS, and IoT, I am dedicated to safeguarding digital environments against potential threats.",
  resumeLink:
    'https://www.linkedin.com/in/clizsec/',
};

export const openSource = {
  githubUserName: 'clizSec',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://clizsec.com/',
  linkedin: 'https://www.linkedin.com/in/clizSec/',
  github: 'https://github.com/clizSec',
  instagram: 'https://www.instagram.com/clizsec',
  facebook: 'https://www.facebook.com/clizsec',
  //twitter: 'https://www.linkedin.com/in/clizSec/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Keeping Hackers Guessing and Cyber Threats Stressing!',
  data: [
    {
      title: 'Coding and Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Angular/AngularJS and C# development'),
        emoji('⚡ Python and Bash scripting for tools and exploitation'),
        emoji('⚡ Secure Software Development Life Cycle practices, ensuring secure coding standards.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'logos:angular-icon',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Bash',
          fontAwesomeClassName: 'logos:bash-icon',
        },
        {
          skillName: 'C Sharp',
          fontAwesomeClassName: 'logos:c-sharp',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'WebStorm',
          fontAwesomeClassName: 'logos:webstorm',
        },
        {
          skillName: 'Visual Studio',
          fontAwesomeClassName: 'logos:visual-studio',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji('⚡ Hosting and maintaining websites along with integration of databases'),
        emoji('⚡ Working with email infrastructures with multi-purpose security configurations'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Microsoft Office 365 and Exchange',
          fontAwesomeClassName: 'logos:microsoft-icon',
        },
        {
          skillName: 'Microsoft Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'Google Workspace',
          fontAwesomeClassName: 'logos:google-gmail',
        },
        {
          skillName: 'Google Cloud',
          fontAwesomeClassName: 'logos:google-cloud',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'logos:github-icon',
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassName: 'logos:netlify-icon',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'logos:apache',
        },
      ],
    },
    {
      title: 'Hacking',
      lottieAnimationFile: '/lottie/skills/hacker.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ API Security Specialist'),
        emoji('⚡ Web Application Security Experience'),
        emoji('⚡ Vulnerability and Penetration Testing'),
      ],
      softwareSkills: [
        {
          skillName: 'Linux',
          fontAwesomeClassName: 'logos:linux-tux',
        },
        {
          skillName: 'Windows',
          fontAwesomeClassName: 'logos:microsoft-windows-icon',
        },
        {
          skillName: 'Web Application',
          fontAwesomeClassName: 'dashicons:admin-site-alt3',
        },
        {
          skillName: 'APIs',
          fontAwesomeClassName: 'mdi:api',
        },
        {
          skillName: 'Networking',
          fontAwesomeClassName: 'dashicons:networking',
        },
        {
          skillName: 'Internet of Things',
          fontAwesomeClassName: 'eos-icons:iot',
        },
        {
          skillName: 'Databases',
          fontAwesomeClassName: 'material-symbols:database',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Web Application Security', //Insert stack or technology you have experience in
    progressPercentage: '95', //Insert relative proficiency in percentage
  },
  {
    Stack: 'API Security',
    progressPercentage: '85',
  },
  {
    Stack: 'Compliance and Regulations',
    progressPercentage: '100',
  },
  {
    Stack: 'Fullstack',
    progressPercentage: '75',
  },
  {
    Stack: 'Network Security',
    progressPercentage: '80',
  },
  {
    Stack: 'Fullstack',
    progressPercentage: '75',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'John Bryce College',
    subHeader: 'Cyber Security Intelligence Professional (CSI PRO)',
    duration: 'September 2014 - September 2016',
    desc: 'I received a comprehensive education at college in the field of cyber security. This included training in security issues, penetration testing, vulnerability scanning and assessment, exploitation, and social engineering. Through hands-on projects and group work, I developed the necessary technical and communication skills to succeed in this field.',
    grade: 'Grade A+',
    descBullets: [
      'Comprehensive understanding of network security protocols and architectures',
      'Securing APIs to protect sensitive data and prevent unauthorized access',
      'Website security best practices and techniques',
      'Identifying and mitigating website vulnerabilities, including cross-site scripting (XSS), SQL injection, and code injection',
      'Web application firewalls (WAFs) and intrusion detection/prevention systems (IDS/IPS)',
      'Conducting penetration testing and vulnerability scanning for network, APIs, and websites',
      'Industry standards and regulations related to network, API, and website security, such as OWASP, PCI DSS, and GDPR',
      'Proficient in creating and customizing Metasploit payloads, e.g. Meterpreter, for penetration testing and post-exploitation activities',
      'Post-exploitation techniques, such as privilege escalation, lateral movement, and data exfiltration'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Cyber Security Specialist',
    company: 'Nation-E',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Nov 2014 – Aug 2017',
    desc: 'As a Cyber Security Specialist at Nation-E, my main focus was on exploiting ICS/SCADA devices and running proof of concept demonstrations for potential clients to showcase the capabilities of our product in stopping zero day threats and exploitations. I was able to successfully publish a CVE for one of the exploits I discovered. In this role, I gained valuable experience in the field of cyber security and the protection of critical infrastructure systems.',
  },
  {
    role: 'Information Security Specialist',
    company: 'Trustifi',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Aug 2017 – Aug 2018',
    desc: 'As an Information Security Specialist, I have gained expertise in researching and analyzing email security threats and conducting vulnerability and penetration testing. My work has allowed me to become a trusted resource for information security within my organization.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Information Security, Compliance and Data Protection Officer',
    company: 'Trustifi',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Aug 2018 - Oct 2021',
    desc: 'As a Information Security, Compliance and Data Protection Officer, I have developed and implemented email security protections in the product, proprietary metrics and signatures, and managed my company\'s Information Technology environment while also creating internal Information Security policies to ensure the security and compliance of our systems. Leading, developing and certifying the company for compliance, regulations and standards such as GDPR, HIPAA and ISO 27001.',
  },
  {
    role: 'Chief Information Security Officer',
    company: 'Trustifi',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Oct 2021',
    desc: 'As a CISO with experience in email security and compliance, I have developed and implemented email security measures to protect against various threats including spam, phishing, and malware. I am skilled in leading a cyber security team and have managed VIP clients. My expertise in this field has allowed me to effectively secure email systems in accordance with regulations such as GDPR, HIPAA, and ISO 27001.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'ICS and SCADA tools and exploits',
    desc: 'Schneider Electric exploit script confirmed by Scheider Electric in a POC with confirmed CVE.',
    github: 'https://github.com/clizSec/ics-scada',
    link: 'https://ics-cert.us-cert.gov/advisories/ICSA-17-061-02',
    linkButtonName: 'CVE',
    additionalLink: 'https://www.exploit-db.com/exploits/41537',
    additionalLinkButtonName: 'Exploit'
  },
  {
    name: 'Successful Pilot with Israel Electric Corporation (IEC)',
    desc: 'The pilot was conducted throughout 2015 and was led by Dr. Leonid Lev and Leonid Rosenblum of IEC, and cyber-security experts from Nation-E. The successful pilot demonstrated Nation-E’s ability to integrate with IEC’s communication systems and protect against a number of different cyber-attacks on its communication lines.',
    link: 'https://www.benzinga.com/pressreleases/16/03/p7748887/israel-electric-corporation-iec-reports-successful-joint-pilot-with-nat',
    linkButtonName: 'Press Release'
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'United States Department of Defense',
    feedback:
      'In April, 2017, I helped the DoD to find vulnerabilities on their servers under HackerOne\'s program. My research and findings on the DoD servers was on the Pentagon\'s VISA/Passport Program, Military websites and servers and research centers.',
  },
  {
    name: 'Schneider Electric',
    feedback:
      'In March, 2017, I successfully exploited Schneider Electric\'s devices used for SCADA/ICS in critical infrastructures and created CVE\'s.',
  },
  {
    name: 'FlexiSpy',
    feedback:
        'In June, 2017, I found two high to critical vulnerabilities on FlexiSPY\'s service and got awarded with bug bounty.',
  },
  {
    name: 'Instacart',
    feedback:
        'In May, 2017, I found two medium-high vulnerabilities on Instacart service and got awarded with bug bounty.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mark Liapustin (clizSec)',
  description: 'Keeping Hackers Guessing and Cyber Threats Stressing!',
  author: 'Mark Liapustin',
  image: 'https://avatars.githubusercontent.com/u/21152343?v=4',
  url: 'https://clizsec.com/',
  keywords: [
    'Mark',
    'Mark Liapustin',
    '@clizsec',
    'clizsec',
    'Portfolio',
    'Mark Liapustin Portfolio ',
    'clizSec Portfolio',
  ],
};
