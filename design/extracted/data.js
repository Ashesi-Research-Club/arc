// Ashesi Review — shared sample content (the two real articles + researchers).
// Plain global; loaded before the screen scripts.
window.ARC_DATA = {
  researchers: {
    'isaac-osei-nyantakyi': {
      slug: 'isaac-osei-nyantakyi',
      firstName: 'Isaac', lastName: 'Osei Nyantakyi',
      name: 'Isaac Osei Nyantakyi',
      program: 'Electrical Engineering', yearOfStudy: 'Faculty',
      bio: "Ghanaian signal-processing researcher and avid gamer with a master's in e-sports management. Did his master's and PhD in China and was part of Huawei's founding 5G deployment-and-testing team. Believes every project must have real-world impact.",
      interests: ['Signal processing', 'Localization (AOA/TDOA)', 'The ACGA algorithm', 'Renewable energy'],
    },
    'elijah-boateng': {
      slug: 'elijah-boateng',
      firstName: 'Elijah', lastName: 'Kwaku Adutwum Boateng',
      name: 'Elijah Kwaku Adutwum Boateng',
      program: 'Computer Science', yearOfStudy: 'Graduate · Class of 2023',
      bio: 'Curious and determined Intelligent Computing master\'s student at Ashesi, Class of 2023. Built a 95–96% accurate facial-recognition capstone and now works on low-cost, locally-runnable vision-language models — a "hospital in your pocket" for healthcare in Ghana.',
      interests: ['Machine intelligence', 'Computer vision', 'Facial recognition', 'Vision-language models', 'Low-cost healthcare AI'],
    },
  },
  articles: [
    {
      slug: 'did-dr-nyantakyi-just-replace-gps',
      title: 'Did Dr. Nyantakyi Just Replace GPS? A Silent Revolution in Signal Tracking',
      category: 'computer-science', categoryLabel: 'Computer Science',
      writtenBy: 'Sinam Afi Serwa Ametewee',
      researcher: 'isaac-osei-nyantakyi',
      publishedDate: 'March 13, 2026', dateSort: 20260313,
      readTime: 5, featured: true,
      excerpt: 'Isaac Osei Nyantakyi blends passion with purpose. From gaming and e-sports management to cutting-edge signal processing research, his work focuses on one core idea: research should solve real-world problems. Through innovations like the ACGA algorithm, he is developing technologies that work even in messy, real-life environments.',
      tags: ['Signal Processing', 'Localization', '5G'],
    },
    {
      slug: 'from-curiosity-to-impact',
      title: 'From Curiosity To Impact',
      category: 'engineering', categoryLabel: 'Engineering',
      writtenBy: 'Ashesi Research Club',
      researcher: 'elijah-boateng',
      publishedDate: 'December 3, 2025', dateSort: 20251203,
      readTime: 6, featured: false,
      excerpt: 'Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges.',
      tags: ['Machine Learning', 'Computer Vision', 'Healthcare AI'],
    },
  ],
  team: [
    { name: 'Sinam Afi Serwa Ametewee', role: 'Editor-in-Chief', year: 'Year 3', specialization: 'Computer Science', description: 'Leads the editorial desk and writes long-form researcher profiles.', order: 1 },
    { name: 'Kojo Mensah', role: 'Managing Editor', year: 'Year 4', specialization: 'Engineering', description: 'Runs the publishing pipeline and commissions the category desks.', order: 2 },
    { name: 'Ama Owusu', role: 'Research Editor', year: 'Year 3', specialization: 'Business', description: 'Fact-checks technical claims and liaises with profiled researchers.', order: 3 },
    { name: 'Yaw Darko', role: 'Design Lead', year: 'Year 2', specialization: 'Interdisciplinary', description: 'Owns the black-and-white house style and the reading experience.', order: 4 },
  ],
  categories: [
    ['all', 'All'], ['computer-science', 'Computer Science'], ['engineering', 'Engineering'],
    ['business', 'Business'], ['social-sciences', 'Social Sciences'], ['humanities', 'Humanities'],
    ['interdisciplinary', 'Interdisciplinary'], ['other', 'Other'],
  ],
};
