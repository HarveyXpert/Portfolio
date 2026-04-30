// 1. Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// 2. Dynamic Content (Simulating a Database)
const projects = [
    { title: "Project One", desc: "HTML & CSS Basics" },
    { title: "Project Two", desc: "JavaScript Logic" }
];

const container = document.getElementById('project-container');

projects.forEach(proj => {
    const card = `
        <div class="card">
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
        </div>
    `;
    container.innerHTML += card;
});