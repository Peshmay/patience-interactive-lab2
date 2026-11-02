"use strict";

/*
  SKILLS DATA

  Each object represents one technical skill.
  The cards are created from this array instead
  of being written manually in skills.html.
*/

const skills = [
  // FRONTEND
  {
    id: 1,
    name: "HTML5",
    category: "frontend",
    proficiency: 5,
    yearsExperience: 2,
    description:
      "I use semantic HTML to create accessible and well-structured web pages.",
    iconClass: "devicon-html5-plain colored",
  },
  {
    id: 2,
    name: "CSS3",
    category: "frontend",
    proficiency: 5,
    yearsExperience: 2,
    description:
      "I use CSS Grid, Flexbox, media queries and custom properties to create responsive layouts.",
    iconClass: "devicon-css3-plain colored",
  },
  {
    id: 3,
    name: "JavaScript",
    category: "frontend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use JavaScript for form validation, DOM manipulation and interactive interfaces.",
    iconClass: "devicon-javascript-plain colored",
  },
  {
    id: 4,
    name: "TypeScript",
    category: "frontend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use TypeScript to create safer applications with clear and maintainable code.",
    iconClass: "devicon-typescript-plain colored",
  },
  {
    id: 5,
    name: "React",
    category: "frontend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use React to create reusable components and responsive user interfaces.",
    iconClass: "devicon-react-original colored",
  },
  {
    id: 6,
    name: "Next.js",
    category: "frontend",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I use Next.js to create structured React applications with routing and server-side features.",
    iconClass: "devicon-nextjs-original",
  },
  {
    id: 7,
    name: "Redux",
    category: "frontend",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I use Redux to manage shared and predictable application state.",
    iconClass: "devicon-redux-original colored",
  },

  // BACKEND
  {
    id: 8,
    name: "Node.js",
    category: "backend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use Node.js to create server-side applications and backend services.",
    iconClass: "devicon-nodejs-plain colored",
  },
  {
    id: 9,
    name: "Express",
    category: "backend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use Express to organise routes, middleware and REST API logic.",
    iconClass: "devicon-express-original",
  },
  {
    id: 10,
    name: "Python",
    category: "backend",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I use Python for programming exercises, automation and problem-solving.",
    iconClass: "devicon-python-plain colored",
  },
  {
    id: 11,
    name: "REST API Development",
    category: "backend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I design RESTful endpoints with validation, clear responses and structured error handling.",
    iconClass: "devicon-swagger-plain colored",
  },
  {
    id: 12,
    name: "Microservices Architecture",
    category: "backend",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I understand how applications can be divided into smaller services with separate responsibilities.",
    iconClass: "fa-solid fa-diagram-project",
  },

  // DATABASES
  {
    id: 13,
    name: "PostgreSQL",
    category: "database",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use PostgreSQL to store, query and manage relational application data.",
    iconClass: "devicon-postgresql-plain colored",
  },
  {
    id: 14,
    name: "Prisma ORM",
    category: "database",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use Prisma ORM to define schemas, create migrations and access databases safely.",
    iconClass: "devicon-prisma-original",
  },
  {
    id: 15,
    name: "Database Design",
    category: "database",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I design relational schemas with clear models, relationships and constraints.",
    iconClass: "devicon-azuresqldatabase-plain colored",
  },

  // TESTING AND DEVOPS
  {
    id: 16,
    name: "Jest",
    category: "testing-devops",
    proficiency: 4,
    yearsExperience: 1,
    description:
      "I use Jest to write unit and integration tests for JavaScript and TypeScript applications.",
    iconClass: "devicon-jest-plain colored",
  },
  {
    id: 17,
    name: "GitHub Actions",
    category: "testing-devops",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I use GitHub Actions to automate testing and continuous integration workflows.",
    iconClass: "devicon-githubactions-plain colored",
  },
  {
    id: 18,
    name: "Docker",
    category: "testing-devops",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I use Docker to create consistent environments for application development and deployment.",
    iconClass: "devicon-docker-plain colored",
  },

  // CLOUD AND AI
  {
    id: 19,
    name: "Firebase Authentication",
    category: "cloud-ai",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I use Firebase Authentication to provide secure sign-in and protected application access.",
    iconClass: "devicon-firebase-plain colored",
  },
  {
    id: 20,
    name: "AWS",
    category: "cloud-ai",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I have experience with AWS concepts for hosting and managing cloud-based applications.",
    iconClass: "devicon-amazonwebservices-plain-wordmark colored",
  },
  {
    id: 21,
    name: "Cloud Development",
    category: "cloud-ai",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I build applications that use cloud hosting, authentication and managed services.",
    iconClass: "devicon-googlecloud-plain colored",
  },
  {
    id: 22,
    name: "AI-Powered Applications",
    category: "cloud-ai",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I integrate AI services into applications to create assistants and intelligent user experiences.",
    iconClass: "fa-solid fa-brain",
  },
];

/*
  DOM SELECTIONS
*/

const skillsGrid = document.querySelector("#skills-grid");
const skillsCounter = document.querySelector("#skills-counter");
const filterButtons = document.querySelectorAll(".skill-filter");
const skillSortSelect = document.querySelector("#skill-sort");

/*
  STATE VARIABLES
*/

let activeCategory = "all";
let activeSort = "proficiency";

/*
  FILTERING FUNCTION

  Returns all skills when "all" is selected.
  Otherwise, returns only skills matching the selected category.
*/

function getFilteredSkills() {
  if (activeCategory === "all") {
    return skills;
  }

  return skills.filter((skill) => skill.category === activeCategory);
}

/*
  SORTING FUNCTION
*/

function getSortedSkills(skillsToSort) {
  const sortedSkills = [...skillsToSort];

  if (activeSort === "experience") {
    sortedSkills.sort((firstSkill, secondSkill) => {
      return (
        secondSkill.yearsExperience - firstSkill.yearsExperience ||
        firstSkill.name.localeCompare(secondSkill.name)
      );
    });
  } else if (activeSort === "name") {
    sortedSkills.sort((firstSkill, secondSkill) => {
      return firstSkill.name.localeCompare(secondSkill.name);
    });
  } else {
    sortedSkills.sort((firstSkill, secondSkill) => {
      return (
        secondSkill.proficiency - firstSkill.proficiency ||
        firstSkill.name.localeCompare(secondSkill.name)
      );
    });
  }

  return sortedSkills;
}

/*
  DISPLAY-UPDATE FUNCTION

  Applies the current filter and sort settings,
  then renders the resulting skills.
*/

function updateSkillsDisplay() {
  const filteredSkills = getFilteredSkills();
  const sortedSkills = getSortedSkills(filteredSkills);

  renderSkills(sortedSkills);
}

/*
  CARD-RENDERING FUNCTION

  Creates and displays one card for every skill.
*/

function renderSkills(skillsToDisplay) {
  skillsGrid.replaceChildren();

  skillsToDisplay.forEach((skill) => {
    const skillCard = document.createElement("article");
    skillCard.classList.add("skill-card");
    skillCard.setAttribute("role", "listitem");

    const skillIcon = document.createElement("i");
    skillIcon.className = skill.iconClass;
    skillIcon.setAttribute("aria-hidden", "true");

    const skillName = document.createElement("h2");
    skillName.classList.add("skill-card-title");
    skillName.textContent = skill.name;

    const skillCategory = document.createElement("p");
    skillCategory.classList.add("skill-category");
    skillCategory.textContent = formatCategory(skill.category);

    const skillDescription = document.createElement("p");
    skillDescription.classList.add("skill-description");
    skillDescription.textContent = skill.description;

    const skillDetails = document.createElement("div");
    skillDetails.classList.add("skill-details");

    const proficiency = document.createElement("p");
    const proficiencyLabel = document.createElement("strong");
    proficiencyLabel.textContent = "Proficiency:";
    proficiency.append(proficiencyLabel, ` ${skill.proficiency} out of 5`);

    // Decorative visual bar
    const proficiencyBar = document.createElement("div");
    proficiencyBar.classList.add("proficiency-bar");
    proficiencyBar.setAttribute("aria-hidden", "true");

    const proficiencyLevel = document.createElement("span");
    proficiencyLevel.classList.add("proficiency-level");
    proficiencyLevel.style.width = `${skill.proficiency * 20}%`;

    proficiencyBar.append(proficiencyLevel);

    const experience = document.createElement("p");
    const experienceLabel = document.createElement("strong");
    experienceLabel.textContent = "Experience:";
    experience.append(
      experienceLabel,
      ` ${formatExperience(skill.yearsExperience)}`,
    );

    skillDetails.append(proficiency, proficiencyBar, experience);

    skillCard.append(
      skillIcon,
      skillName,
      skillCategory,
      skillDescription,
      skillDetails,
    );

    skillsGrid.append(skillCard);
  });

  const categoryLabel =
  activeCategory === "all"
    ? "all categories"
    : formatCategory(activeCategory);

skillsCounter.textContent =
  `Showing ${skillsToDisplay.length} of ${skills.length} skills. ` +
  `Category: ${categoryLabel}. ` +
  `Sorted by ${formatSortOption(activeSort)}.`;

/*
  FORMATTING FUNCTIONS
*/

function formatCategory(category) {
  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    "testing-devops": "Testing & DevOps",
    "cloud-ai": "Cloud & AI",
  };

  return categoryNames[category] ?? category;
}

function formatExperience(years) {
  return years === 1 ? "1 year" : `${years} years`;
}

/*
  Converts the stored sorting value into a readable label.
*/
function formatSortOption(sortOption) {
  const sortNames = {
    proficiency: "proficiency from high to low",
    experience: "experience from high to low",
    name: "name from A to Z",
  };

  return sortNames[sortOption] ?? sortOption;
}

/*
  EVENT LISTENERS
*/

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;

      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    updateSkillsDisplay();
  });
});

skillSortSelect.addEventListener("change", () => {
  activeSort = skillSortSelect.value;
  updateSkillsDisplay();
});

/*
  INITIAL DISPLAY CALL
*/

updateSkillsDisplay();
