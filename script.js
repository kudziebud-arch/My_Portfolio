// script.js

// 1) Put current year in the footer automatically
// Finds the footer element and replaces the text with the current year.
(function setFooterYear() {
  const footer = document.querySelector('footer p');
  if (!footer) return;
  const year = new Date().getFullYear();
  footer.textContent = © ${year} Bud Kudzie | All rights reserved.;
})();

// 2) Dynamic list of projects
// Edit this array to add or remove projects.
const projects = [
  { title: "Calculator App", url: "https://yourname.github.io/calculator-app/" },
  { title: "Weather App", url: "https://yourname.github.io/weather-app/" },
  { title: "Student Info App", url: "https://yourname.github.io/student-info-app/" }
];

// Finds the #projects section and replaces the <ul> contents with our list
function renderProjectList() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  let ul = projectsSection.querySelector('ul');
  if (!ul) {
    ul = document.createElement('ul');
    projectsSection.appendChild(ul);
  }
  ul.innerHTML = ''; // clear old content

  projects.forEach((p, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = p.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 🔗 ${p.title};
    // when clicked, show a tiny console message and allow opening in new tab
    a.addEventListener('click', (e) => {
      // This simple message is for learning — it does not stop the link.
      console.log(Opening project: ${p.title});
    });

    li.appendChild(a);
    ul.appendChild(li);
  });
}

// run the renderer when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderProjectList();
});