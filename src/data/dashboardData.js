// src/data/dashboardData.js
export const dashboardCards = [ 
    { 
        id: 1, 
        title: "Courses", 
        value: 4, 
        subtitle: "2 completed", 
        footer: "See Roadmap", 
        color: "#2563eb", 
        icon: "book", 
    }, 
    { 
        id: 2, 
        title: "Projects", 
        value: 6, 
        subtitle: "4 published", 
        footer: "See Projects", 
        color: "#16a34a", 
        icon: "laptop", 
    }, 
    { 
        id: 3, 
        title: "Skills", 
        value: 18, 
        subtitle: "12 dominated", 
        footer: "See Skills", 
        color: "#ea580c", 
        icon: "rocket", 
    }, 
    { 
        id: 4, 
        title: "Goals", 
        value: 9, 
        subtitle: "6 completed", 
        footer: "View Goals", 
        color: "#9333ea", 
        icon: "target", 
    },
];

export const metrics = [ 
    { 
        id: 1, 
        label: "Hours studied", 
        metric: "256h", 
        variation: "+6h this week", 
        variationType: "positive", 
        icon: "clock", 
    }, 
    { 
        id: 2, 
        label: "Career Readiness", 
        metric: "82%", 
        variation: "+4%", 
        variationType: "positive", 
        icon: "rocket", 
    }, 
    { 
        id: 3, 
        label: "Projects", 
        metric: "8", 
        variation: "", 
        variationType: "neutral", 
        icon: "laptop", 
    }, 
    { 
        id: 4, 
        label: "Resume", 
        metric: "100%", 
        variation: "", 
        variationType: "neutral", 
        icon: "file", 
    },
];

export const progressIndicators = [
    {
        id: 1,
        title: "Employability",
        percentage: 82,
        color: "#2563eb",
        description:
            "Profile ready to start applying for jobs.",
    },
    {
        id: 2,
        title: "Technical Profile",
        percentage: 74,
        color: "#16a34a",
        description:
            "Good progress in skills.",
    },
    {
        id: 3,
        title: "Portfolio",
        percentage: 90,
        color: "#9333ea",
        description:
            "Projects nearly complete.",
    },
    {
        id: 4,
        title: "Networking",
        percentage: 45,
        color: "#ea580c",
        description:
            "Keep expanding your network.",
    },
    {
        id: 5,
        title: "GitHub",
        percentage: 76,
        color: "#0f766e",
        description:
            "Good number of commits.",
    },
    {
        id: 6,
        title: "LinkedIn",
        percentage: 92,
        color: "#2563eb",
        description:
            "Profile practically finished.",
    },
];