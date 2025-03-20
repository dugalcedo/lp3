import plan from "./plan.js";
const planEl = document.querySelector('#plan')

globalThis.handleClick = function(concept, index) {
    concept.style.borderColor = colors[index]
    setSkillLevel(concept.dataset.id, index)
}

plan.forEach(renderCourse)
const colors = ['gray', 'orange', 'green']
checkRadios()
colorConcepts()


function renderCourse(course) {
    planEl.insertAdjacentHTML('beforeend', `
        <div class="course">
            <h2>${course.title}</h2>
            ${course.chapters.map(chapter => `
                <div class="chapter">
                    <h3>${chapter.title}</h3>
                    ${chapter.concepts.map(concept => `
                        <div class="concept  strength-weak" data-id="${chapter.title}|${concept}">
                            <p>${concept}</p>
                            <div class="radios">
                                <input onclick="handleClick(this.parentElement.parentElement, 0)" name="${chapter.title}-${concept}" type="radio" checked>
                                <input onclick="handleClick(this.parentElement.parentElement, 1)" name="${chapter.title}-${concept}" type="radio">
                                <input onclick="handleClick(this.parentElement.parentElement, 2)" name="${chapter.title}-${concept}" type="radio">
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    `)
}

function checkRadios() {
    const skillLevels = getSkillLevels()
    Object.entries(skillLevels).forEach(([id, index]) => {
        const concept = document.querySelector(`div[data-id="${id}"]`)
        if (!concept) return;
        const radios = concept.querySelectorAll(':scope input')
        radios[index].checked = true
    })
}

function colorConcepts() {
    const concepts = document.querySelectorAll('.concept')
    concepts.forEach(concept => {
        const radios = concept.querySelectorAll(':scope input')
        const level = ([...radios]).findIndex(r => r.checked)
        concept.style.borderColor = colors[level]
    })
}

function getSkillLevels() {
    return JSON.parse(localStorage.getItem('dugs-lesson-plan-skill-levels') || '{}')
}

function setSkillLevel(id, index) {
    const skillLevels = getSkillLevels()
    skillLevels[id] = index
    localStorage.setItem('dugs-lesson-plan-skill-levels', JSON.stringify(skillLevels))
}