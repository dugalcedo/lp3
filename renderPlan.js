import plan from "./plan.js";
const planEl = document.querySelector('#plan')

globalThis.handleRadioClick = function(concept, index) {
    concept.style.borderColor = colors[index]
    setSkillLevel(concept.dataset.id, index)
}

globalThis.handleQuestionClick = function(id) {
    openNoteModal(id)
}

plan.forEach(renderCourse)
const colors = ['#794343', 'yellow', 'lime']
checkRadios()
colorConcepts()


function renderCourse(course) {
    planEl.insertAdjacentHTML('beforeend', `
        <div class="course">
            <h2>${course.title}</h2>
            ${course.chapters.map(chapter => `
                <div class="chapter">
                    <h3>${chapter.title}</h3>
                    <div className="concepts">
                        ${chapter.concepts.map(concept => `
                            <div class="concept  strength-weak" data-id="${chapter.title}|${concept.title}">
                                <p class="concept-title">${concept.title}</p>
                                <div class="radios">
                                    <input onclick="handleRadioClick(this.parentElement.parentElement, 0)" name="${chapter.title}-${concept.title}" type="radio" checked>
                                    <input onclick="handleRadioClick(this.parentElement.parentElement, 1)" name="${chapter.title}-${concept.title}" type="radio">
                                    <input onclick="handleRadioClick(this.parentElement.parentElement, 2)" name="${chapter.title}-${concept.title}" type="radio">
                                </div>
                                ${!concept.description ? "" : `
                                    <p class="concept-description">${concept.description}</p>
                                `}
                                ${!concept.questions ? "" : `
                                    <ul class="concept-questions">
                                        ${concept.questions.map((q, qi) => {
                                            const id = `${chapter.title}|${concept.title}|${qi}`
                                            return `
                                            <li>
                                                <button
                                                    data-id="${id}"
                                                    onclick="handleQuestionClick('${id}')"
                                                >
                                                    ${q}
                                                </button>
                                            </li>
                                            `
                                        }).join('')}
                                    </ul>
                                `}
                            </div>
                        `).join('')}
                    </div>
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
    try {
        return JSON.parse(localStorage.getItem('dugs-lesson-plan-skill-levels') || '{}')
    } catch (_) {
        return []
    }
}

function setSkillLevel(id, index) {
    const skillLevels = getSkillLevels()
    skillLevels[id] = index
    localStorage.setItem('dugs-lesson-plan-skill-levels', JSON.stringify(skillLevels))
}

function getNotes() {
    try {
        return JSON.parse(localStorage.getItem('dugs-lesson-plan-notes') || '{}')
    } catch (_) {
        return {}
    }
}

globalThis.saveNote = function(id, value) {
    const notes = getNotes()
    notes[id] = value
    localStorage.setItem('dugs-lesson-plan-notes', JSON.stringify(notes))
}

function openNoteModal(id) {
    const notes = getNotes()
    const note = notes[id]

    document.body.insertAdjacentHTML('beforeend', `
        <div id="note-modal-backdrop">
            <div id="note-modal">
                <h4>Add a note</h4>
                <textarea>${note || ''}</textarea><br>
                <div class="controls">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Cancel</button>
                    <button onclick="saveNote('${id}', this.parentElement.parentElement.children[1].value); this.parentElement.parentElement.parentElement.remove()">Save</button>
                </div>
            </div>
        </div>
    `)
}