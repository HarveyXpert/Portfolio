// 1. Dark Mode Toggle with Local Storage
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Switch icon visually
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// 2. Dynamic Content (Simulating a Database)
const projects = [
    { 
        title: "E-Commerce Landing Page", 
        desc: "A responsive storefront design featuring a dynamic cart and product filtering.",
        tech: "HTML • CSS • JavaScript",
        github: "#",
        live: "#"
    },
    { 
        title: "Task Management App", 
        desc: "A productivity tool to track daily tasks with local storage integration.",
        tech: "JavaScript • DOM Manipulation",
        github: "#",
        live: "#"
    },
    { 
        title: "Weather Dashboard", 
        desc: "Real-time weather tracking application utilizing external REST APIs.",
        tech: "JS • Fetch API • CSS Grid",
        github: "#",
        live: "#"
    }
];

const container = document.getElementById('project-container');

// Use map and join for cleaner DOM insertion
const projectHTML = projects.map(proj => `
    <div class="card">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <div class="card-tech">${proj.tech}</div>
        <div class="card-links">
            <a href="${proj.github}" target="_blank">Code &rarr;</a>
            <a href="${proj.live}" target="_blank">Live Site &rarr;</a>
        </div>
    </div>
`).join('');

container.innerHTML = projectHTML;
