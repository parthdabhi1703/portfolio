// Skills data
const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/parthdabhi1703/assets/db932a672dbc20b4aeb4c1b0da675f11e634befd/github.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

// Projects data
const projects = [
    {
        id: "spotify-clone",
        title: "Spotify Clone",
        technologies: ["HTML", "CSS"],
        description: "A responsive web application replicating the Spotify UI, built entirely with HTML and CSS.",
        image: "https://i.ibb.co/VpWsM85/file-2024-12-29-13-15-28.png",
        liveUrl: "https://parthdabhi1703.github.io/Spotify-Clone",
        githubUrl: "https://github.com/parthdabhi1703/Spotify-Clone"
    },
    {
        id: "simon-game",
        title: "Simon Game",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "A round-shaped Simon game with four colors and a button at the center, offering an engaging gameplay experience with stylish designs.",
        image: "https://i.ibb.co/MhDdnNw/file-2024-12-29-12-57-08.png",
        liveUrl: "https://parthdabhi1703.github.io/Simon-Says-Game",
        githubUrl: "https://github.com/parthdabhi1703/Simon-Says-Game"
    },
    {
        id: "number-guessing-game",
        title: "Number Guessing Game",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "A simple and interactive game where users guess a randomly generated number, with feedback provided to guide the player closer to the correct answer.",
        image: "https://i.ibb.co/J260YH2/file-2024-12-29-13-21-26.png",
        liveUrl: "https://parthdabhi1703.github.io/Number-Guessing-Game",
        githubUrl: "https://github.com/parthdabhi1703/Number-Guessing-Game"
    },
    {
        id: "snake-game",
        title: "Snake Game",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "A classic snake game where the player navigates a snake to collect food while avoiding collisions with the snake's own body and the walls.",
        image: "https://i.ibb.co/ZJhJ47G/file-2024-12-29-13-11-37.png",
        liveUrl: "https://parthdabhi1703.github.io/Snake-Game",
        githubUrl: "https://github.com/parthdabhi1703/Snake-Game"
    }
];

// Initialize Lucide icons
lucide.createIcons();

// Populate skills carousel
const skillsTrack = document.querySelector('.skills-track');
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');
    skillItem.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}">
        <p>${skill.name}</p>
    `;
    skillsTrack.appendChild(skillItem);
});

// Clone skills for infinite loop
skillsTrack.innerHTML += skillsTrack.innerHTML;

// Populate projects
const projectsList = document.querySelector('.projects-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.innerHTML = `
        <div class="project-header">
            <div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-technologies">${project.technologies.join(', ')}</p>
            </div>
            <i data-lucide="chevron-down"></i>
        </div>
        <div class="project-content">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i data-lucide="external-link"></i>
                    Live Demo
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i data-lucide="github"></i>
                    Source Code
                </a>
            </div>
        </div>
    `;
    projectsList.appendChild(projectItem);
});

// Initialize Lucide icons again for dynamically added content
lucide.createIcons();

// Add click event listeners to project headers
document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('expanded');
        const chevron = header.querySelector('[data-lucide="chevron-down"]');
        chevron.style.transform = content.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0)';
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.getElementById('message').value;
    window.location.href = `mailto:dabhiparth309@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
});

// Add hover effect to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        icon.setAttribute('data-lucide-props', '{"stroke":"url(#gradient)"}');
        lucide.createIcons();
    });
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        icon.removeAttribute('data-lucide-props');
        lucide.createIcons();
    });
});

// Create gradient for icons
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "0");
svg.setAttribute("height", "0");
svg.innerHTML = `
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(76, 0, 255);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(59,130,246);stop-opacity:1" />
        </linearGradient>
    </defs>
`;
document.body.appendChild(svg);

const background = document.getElementById('background');

// Generate the dots
const rows = Math.ceil(window.innerHeight / 20); // Adjust grid spacing
const cols = Math.ceil(window.innerWidth / 20);

for (let i = 0; i < rows * cols; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot'); // Optional: Add a class for styling
    background.appendChild(dot);
}

// Handle mouse movement to add glow effect
document.addEventListener('mousemove', (e) => {
    const dots = document.querySelectorAll('#background div');
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        const distance = Math.hypot(cursorX - dotX, cursorY - dotY);

        if (distance < 150) {
            dot.classList.add('glow');
        } else {
            dot.classList.remove('glow');
        }
    });
});

