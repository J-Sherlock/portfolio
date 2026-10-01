---
layout: default
title: About
permalink: /about/
---

<section class="about-page" aria-labelledby="about-title">
  <div class="about-header">
    <h1 id="about-title">About Me</h1>
    <p class="intro-text">
      Software engineer with a passion for game development and creating elegant solutions.
    </p>

    <div class="profile-image">
      <img
        src="{{ '/assets/images/profile.jpg' | relative_url }}"
        alt="Jack Sherlock profile photo"
        width="150"
        height="150"
      >
    </div>

  </div>

  <div class="about-content">
    <section class="about-section">
      <h2>Who I Am</h2>
      <p>
        I'm Jack Sherlock, a software engineer based in Ventura, California.
        I specialize in web development and have a deep interest in game development.
      </p>
      <p>
        When I'm not coding, you can find me reading or playing Trading Card Games.
      </p>
    </section>

    <section class="about-section">
      <h2>Skills & Technologies</h2>

      <div class="skills-grid">
        <div class="skill-category">
          <h3>🔤 Languages</h3>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>⚙️ Frameworks & Tools</h3>
          <ul>
            <li>React Native</li>
            <li>Unity</li>
            <li>Jekyll</li>
            <li>.NET</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Node.js</li>
            <li>VS Code</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>🎯 Other Skills</h3>
          <ul>
            <li>Web Development</li>
            <li>Game Development</li>
            <li>Agile/Scrum</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Background & Education</h2>
      <div class="education-item">
        <div class="education-header">
          <p class="degree">Bachelor of Science — Computer Science</p>
          <p class="graduation-year">Graduated: December 2023</p>
        </div>
        <p class="school">California State University Channel Islands</p>
        <p class="education-description">
          Completed coursework in software engineering, algorithms, data structures,
          and web development.
        </p>
      </div>
    </section>

    <section class="about-section">
      <h2>Notable Projects</h2>

      <div class="projects-list">
        <div class="project-card">
          <h3>Starfighter Galaxy</h3>
          <p class="project-meta">Unity • C# • Team Project (4 members)</p>
          <ul>
            <li>Collaborated with a four-person team to develop a Unity game in C#.</li>
            <li>Implemented level progression, scene transitions, and gameplay-state flow.</li>
            <li>Developed main menu, Level Select, Options, and supporting UI systems.</li>
            <li>Implemented persistent Save/Load functionality and player settings.</li>
            <li>Integrated UI, progression, and persistence systems with teammates' gameplay features.</li>
          </ul>
        </div>

        <div class="project-card">
          <h3>Wizard Tower Game</h3>
          <p class="project-meta">Unity • C# • CS Capstone</p>
          <ul>
            <li>Designed and developed an original 2D Unity game independently using C#.</li>
            <li>Programmed gameplay systems, player interactions, and UI.</li>
            <li>Created original pixel art assets and animations.</li>
          </ul>
        </div>

        <div class="project-card">
          <h3>Coffee Mobile Application</h3>
          <p class="project-meta">React Native • Team Project (3 members)</p>
          <ul>
            <li>Worked in a team of three to develop a mobile application with responsive UI, navigation, persistent settings, and modular code organization.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Experience</h2>
      <div class="experience-item">
        <h3>Software Development Intern</h3>
        <p class="company-info">The Final Code • July 2025 – July 2026</p>
        <p>Contributed to production web applications, internal tools, and modernization projects while collaborating with professional developers.</p>
        <ul>
          <li>Modernized legacy ASP.NET applications by migrating .NET Framework code to modern .NET and updating legacy architectural patterns.</li>
          <li>Implemented and updated REST API endpoints and integrated Entity Framework Core, AutoMapper, authentication libraries, and dependency injection.</li>
          <li>Configured development environments using Visual Studio, npm, GitLab, and PostgreSQL; debugged authentication, database, dependency, and runtime issues.</li>
          <li>Designed and developed a Chrome Extension to automate technical SEO analysis, including metadata, headers, tracking tags, canonical URLs, CMS identification, links, and image validation.</li>
          <li>Built reusable HTML/CSS/JavaScript components including parallax effects, logo sliders, before/after comparisons, animated counters, and responsive UI elements.</li>
          <li>Performed technical SEO audits and production QA, identifying usability, responsive layout, redirect, broken link, search, and browser compatibility issues.</li>
          <li>Documented defects, reproduced issues, and communicated findings to development staff.</li>
        </ul>
      </div>
    </section>

    <section class="about-section">
      <h2>Notable Interests</h2>
      <ul class="highlights-list">
        <li><strong>Game Development:</strong> Interested in game design and mechanics using Unity</li>
        <li><strong>Web Development:</strong> Building responsive, accessible web experiences</li>
        <li><strong>Trading Card Games:</strong> Competitive TCG player and collector</li>
      </ul>
    </section>

    <section class="about-section about-cta">
      <h2>Let's Connect</h2>
      <p>
        Interested in collaborating or learning more?
        <a href="{{ '/contact/' | relative_url }}">Get in touch!</a>
      </p>
    </section>

  </div>
</section>
