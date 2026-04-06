const themeBtn = document.getElementById('theme-toggle');
const ApplyTheme = (theme) => {
    if (theme == 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
};

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
applyTheme(localStorage.getItem('theme'));
const modal = document.getElementById('modal');
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.querySelector('.close');

if (contactBtn) {
    contactBtn.onclick = function() {
        modal.style.display = 'block';
    };
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

const projects = {
    3: {
        title: "аналитика",
        goal: "анализировать статистику матчей",
        description: "веб сервис показывает статистику матчей, winrate, pickrate, kda через API",
        technologies: ["GO"],
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (window.location.pathname.includes('details.html')) {
    const container = document.getElementById('projectInfo');
    
    if (id && projects[id]) {
        const p = projects[id];
        container.innerHTML = `
            <div class="detail-box">
                <h1>${p.title}</h1>
                <h3>цель:</h3>
                <p>${p.goal}</p>
                <h3>описание:</h3>
                <p>${p.description}</p>
                <h3>технологии:</h3>
                <div class="tech-list">
                    ${p.technologies.map(t => `<span class="tech-item">${t}</span>`).join('')}
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '<p>оашфыошафыоашфышоафоша</p>';
    }
}
