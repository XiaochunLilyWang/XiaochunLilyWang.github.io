// 个人主页双语数据 —— 修改这里即可自定义你的内容
// zh = 中文版本，en = 英文版本，结构完全一致
// 所有 url: "#" 的地方都是待填充的链接

export type Lang = "zh" | "en"

// 论文数据：中英文共享（论文字段本身语言无关，仅 titleZh 仅在中文版展示）
type Author = { name: string; highlight?: boolean }
type Paper = {
  titleEn: string
  titleZh: string
  authors: Author[]
  type: "Journal" | "Conference"
  year: string
  venue: string
  link: string
  linkText?: { zh: string; en: string }
  image?: string
}

const papers: Paper[] = [
  {
    titleEn:
      "Swapped faces, swayed beliefs: How deepfakes affect trust in data videos with human narrators",
    titleZh: "换脸易貌，认知动摇：深度伪造如何影响用户对真人讲解数据视频的信任",
    authors: [
      { name: "Xingyu Lan" },
      { name: "Xiaochun Wang", highlight: true },
      { name: "Xiuqi Tian" },
    ],
    type: "Journal",
    year: "2026",
    venue: "Visual Informatics",
    link: "https://www.sciencedirect.com/science/article/pii/S2468502X26000227",
    image: "/images/deepfake-figure.png",
  },
  {
    titleEn:
      "The Algorithmic Turn in Mediatized Motherhood: Exploring How AI Learning Tablets Reconfigure Parental Mediation in Chinese After-School Tutoring",
    titleZh: "媒介化母职的算法转向：探究 AI 学习机如何重塑中国课后辅导中的家长媒介干预",
    authors: [{ name: "Xiaochun Wang", highlight: true }],
    type: "Conference",
    year: "2026",
    venue: "NCA",
    link: "https://www.natcom.org/nca-112th-annual-convention/",
    linkText: { zh: "会议官网 →", en: "Conference →" },
    image: "/images/nca-figure.png",
  },
]

const zh = {
  meta: {
    title: "王小淳 · Xiaochun Lily Wang",
  },
  nav: {
    items: [
      { id: "academic", label: "学术" },
      { id: "internships", label: "实习" },
      { id: "content", label: "作品" },
      { id: "funfacts", label: "生活" },
    ],
    toggleLabel: "EN",
    menuAria: "菜单",
  },
  profile: {
    name: "王小淳",
    altName: "Xiaochun (Lily) Wang",
    title: "And In that light, I will find deliverance.",
    tagline:
      "清华大学数据传播硕士在读。游走于产品、研究与写作之间，相信好的产品始于对人的理解。",
    email: "wangxc25@mails.tsinghua.edu.cn",
    location: "清华大学 · 南加州大学",
    photoNote: "照片",
    scrollAria: "向下滚动",
    social: [
      { name: "小红书", icon: "red", url: "https://www.xiaohongshu.com/user/profile/61f3a5e9000000001000459c" },
      { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/xiaochun-wang-640525326/" },
      { name: "GitHub", icon: "github", url: "https://github.com/XiaochunLilyWang" },
      { name: "Google Scholar", icon: "scholar", url: "https://scholar.google.com/citations?user=Xgwh0v8AAAAJ&hl=zh-CN" },
    ],
  },
  about: {
    label: "About",
    heading: "关于我",
    paragraphs: [
      "我是清华大学新闻传播学院数据传播专业的一名硕士研究生，同时在修读南加州大学传播数据科学双学位，本科毕业于复旦大学新闻学院新闻学专业。",
      "是一个经历极其不垂直的P人，足迹横跨传统媒体、商业杂志、互联网用研和产品。我的学术和职业兴趣围绕技术对人类认知/情感的影响和人机关系的未来展开。比如，近期我最喜欢的两个研究计划作业，关注的现象分别是AI应用关停后的用户情感（#keep4o）和小红书上的文科生vibe coding博主。",
    ],
  },
  academic: {
    label: "Academic",
    heading: "学术研究",
    imageNote: "配图",
    linkText: "阅读论文 →",
    list: papers,
  },
  internships: {
    label: "Internships",
    heading: "实习经历",
    list: [
      {
        period: "2026.05 – 2026.08",
        company: "🚕 高德地图",
        role: "产品经理（打车点线业务）",
      },
      {
        period: "2026.02 – 2026.05",
        company: "📱 小米科技",
        role: "用户研究（小爱智能助手）",
      },
      {
        period: "2025.03 – 2025.06",
        company: "🍠 小红书",
        role: "用户研究（社交 · 搜索）",
      },
    ],
  },
  content: {
    label: "Portfolio",
    heading: "内容生产",
    intro:
      "曾任《第一财经杂志》科技栏目实习记者、复旦大学校级学生媒体《复旦人周报》主编，热爱观察技术、商业与青年文化。以下是部分媒体作品。",
    imageNote: "封面",
    linkText: "阅读全文 →",
    list: [
      {
        title: "揭穿 AI 脸",
        period: "2024.11",
        source: "第一财经杂志",
        description: "独立主笔，关于 Deepfake 检测技术如何走出实验室的故事。",
        link: "https://www.cbnweek.com/article_detail/32100",
        image: "/images/unmasking-ai-faces.png",
      },
      {
        title: "谁在使用星野？",
        period: "2025.01",
        source: "第一财经杂志",
        description:
          "参与案头研究、采访写作，关于 Minimax 旗下 AI 陪伴软件星野用户与自己创作的 AI 角色相遇、相爱的故事。",
        link: "https://mp.weixin.qq.com/s/L8oUMwBht7GScn6z43ItVA",
        image: "/images/xingye-users.png",
        imagePosition: "center",
      },
      {
        title: "当陪诊成为生意：“临时家人”们的探索与忧虑",
        period: "2024.02",
        source: "潮新闻",
        description:
          "独立主笔，记录“陪诊师”的日常生活和对陪诊这一新兴行业的观察。",
        link: "https://tidenews.com.cn/news.html?id=2719325",
        image: "/images/peizhen-shengyi.png",
      },
      {
        title: "与 AI 共处的复旦人",
        period: "2025.02",
        source: "复旦人周报",
        description:
          "担任《复旦人周报》主编后策划的第一个选题，彼时 DeepSeek 方兴未艾，我们记录了大学生对人机协作的初探。",
        link: "https://mp.weixin.qq.com/s/gnoRcCRh9YvtIjfeqUqERA",
        image: "/images/fudanren-ai.png",
      },
    ],
  },
  funfacts: {
    label: "Fun Facts",
    heading: "工作之外",
    photography: {
      title: "摄影",
      note: "快门是我观察世界的另一种方式。喜欢扫街和拍舞台。",
      photoNote: "照片",
    },
    hobbies: {
      title: "爱好",
      items: [
        {
          name: "书法",
          desc: "小时候临摹过 10 遍以上《兰亭序》，现在在小红书上发 iPad 写的拉丝字（在线接单）。",
        },
        {
          name: "Arcaea",
          desc: "断断续续地玩了 4 年，但是 ptt 一直没有达到 12。这个主页里我名字下方的第一句话来源于游戏中我最喜欢的曲子 Aegleseeker，歌名的意思是追光的人。",
        },
        {
          name: "音乐",
          desc: "最近几年的年度歌手是 GALI 和徐佳莹。但是：我听到一个声音对我说，啦啦啦我们都是 summer boy。",
        },
      ],
    },
  },
  contact: {
    label: "Contact",
    heading: "联系我",
    text: "无论是学术合作、产品岗位机会，还是只是想聊聊 AI 与人的关系，都欢迎写信给我。",
    email: "wangxc25@mails.tsinghua.edu.cn",
  },
  footer: {
    backToTop: "回到顶部 ↑",
  },
}

const en: typeof zh = {
  meta: {
    title: "Xiaochun Lily Wang · 王小淳",
  },
  nav: {
    items: [
      { id: "academic", label: "Academic" },
      { id: "internships", label: "Internships" },
      { id: "content", label: "Portfolio" },
      { id: "funfacts", label: "Fun Facts" },
    ],
    toggleLabel: "中",
    menuAria: "Menu",
  },
  profile: {
    name: "Xiaochun (Lily) Wang",
    altName: "王小淳",
    title: "And In that light, I will find deliverance.",
    tagline:
      "Master's student in Data Communication at Tsinghua University, moving between product, research, and writing. I believe good products begin with understanding people.",
    email: "wangxc25@mails.tsinghua.edu.cn",
    location: "Tsinghua University · USC",
    photoNote: "Photo",
    scrollAria: "Scroll down",
    social: [
      { name: "RED", icon: "red", url: "https://www.xiaohongshu.com/user/profile/61f3a5e9000000001000459c" },
      { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/xiaochun-wang-640525326/" },
      { name: "GitHub", icon: "github", url: "https://github.com/XiaochunLilyWang" },
      { name: "Google Scholar", icon: "scholar", url: "https://scholar.google.com/citations?user=Xgwh0v8AAAAJ&hl=zh-CN" },
    ],
  },
  about: {
    label: "",
    heading: "About Me",
    paragraphs: [
      "I am a master's student in Data Communication at Tsinghua University's School of Journalism and Communication, concurrently pursuing a second degree in Communication Data Science at USC, with a B.A. in Journalism from Fudan University.",
      "I'm an INTP whose path has been anything but linear — my footprints stretch across traditional media, business magazines, internet user research, and product management. My academic and professional interests center on how technology shapes human cognition and emotion, and the future of human-machine relationships. For instance, two of my favorite recent research projects looked at user emotions after AI apps shut down (#keep4o) and the liberal-arts vibe-coding bloggers on Xiaohongshu.",
    ],
  },
  academic: {
    label: "",
    heading: "Academic Research",
    imageNote: "Figure",
    linkText: "Read the paper →",
    list: papers,
  },
  internships: {
    label: "",
    heading: "Internships",
    list: [
      {
        period: "May 2026 – Aug 2026",
        company: "Amap (Alibaba)",
        role: "Product Manager, Ride-hailing POI & Route",
      },
      {
        period: "Feb 2026 – May 2026",
        company: "Xiaomi",
        role: "User Research, XiaoAI Assistant",
      },
      {
        period: "Mar 2025 – Jun 2025",
        company: "Xiaohongshu (RED)",
        role: "User Research, Social & Search",
      },
    ],
  },
  content: {
    label: "",
    heading: "Portfolio",
    intro:
      "Formerly a journalist intern at CBN Weekly and editor-in-chief of Fudan Weekly, I keep writing about technology, business, consumption and youth culture. Selected works below.",
    imageNote: "Cover",
    linkText: "Read →",
    list: [
      {
        title: "Unmasking AI Faces",
        period: "Nov 2024",
        source: "CBN Weekly",
        description:
          "Sole author. A story about how Deepfake detection technology moves out of the lab.",
        link: "https://www.cbnweek.com/article_detail/32100",
        image: "/images/unmasking-ai-faces.png",
      },
      {
        title: "Who's on Xingye?",
        period: "Jan 2025",
        source: "CBN Weekly",
        description:
          "Contributed desk research and interviews. A story about how users of Minimax's AI companion app Xingye meet and fall in love with the AI characters they create.",
        link: "https://mp.weixin.qq.com/s/L8oUMwBht7GScn6z43ItWA",
        image: "/images/xingye-users.png",
        imagePosition: "center",
      },
      {
        title:
          "When Companion Care Becomes a Business: Explorations and Anxieties of the 'Temporary Family'",
        period: "Feb 2024",
        source: "Tide News",
        description:
          "Sole author. A documentary portrait of 'medical companions' and their daily lives, observing the rise of a new caregiving trade.",
        link: "https://tidenews.com.cn/news.html?id=2719325",
        image: "/images/peizhen-shengyi.png",
      },
      {
        title: "Fudaners Living with AI",
        period: "Feb 2025",
        source: "Fudan Weekly",
        description:
          "The first topic I planned as editor-in-chief of Fudan Weekly. DeepSeek was just emerging — we documented how college students first encountered human-AI collaboration.",
        link: "https://mp.weixin.qq.com/s/gnoRcCRh9YvtIjfeqUqERA",
        image: "/images/fudanren-ai.png",
      },
    ],
  },
  funfacts: {
    label: "",
    heading: "Fun Facts About Me",
    photography: {
      title: "Photography",
      note: "The shutter is another way I observe the world. I enjoy street photography and stage shoots.",
      photoNote: "Photo",
    },
    hobbies: {
      title: "Hobbies",
      items: [
        {
          name: "Calligraphy",
          desc: "I copied the Lantingji Xu (Preface to the Poems Collected from the Orchid Pavilion) more than 10 times as a kid. Now I post iPad-drawn brushed type on RED (taking commissions online).",
        },
        {
          name: "Arcaea",
          desc: "I've been playing on and off for 4 years, but my ptt still hasn't reached 12. The first line under my name on this homepage comes from my favorite track in the game, Aegleseeker — the name means 'one who seeks the light.'",
        },
        {
          name: "Music",
          desc: "My top artists of recent years are GALI and LaLa Hsu. ",
        },
      ],
    },
  },
  contact: {
    label: "",
    heading: "Contact",
    text: "Whether it's academic collaboration, a product role, or simply a conversation about AI and people — I'd love to hear from you.",
    email: "wangxc25@mails.tsinghua.edu.cn",
  },
  footer: {
    backToTop: "Back to Top ↑",
  },
}

export const content: Record<Lang, typeof zh> = { zh, en }
