const plan = [
    {
        title: "HTML/CSS",
        chapters: [
            {
                title: "HTML",
                concepts: [
                    'HTML Vocabulary',
                    'Inline elements',
                    'Block elements',
                    'Images',
                    'Anchors',
                    'DOCTYPE, html, head, & body',
                    'Lists',
                    'Inputs',
                    'Tables',
                    'Forms'
                ]
            },
            {
                title: "CSS 1",
                concepts: [
                    'CSS Vocabulary',
                    'Inline, embedded, and external CSS',
                    'Styling text',
                    'Colors',
                    'Backgrounds',
                    'Borders',
                    'Padding and margin',
                    'Width and height',
                    ':hover',
                    'Float',
                    'Developer tools',
                    'Box-sizing',
                    'Layouts with tables'
                ]
            },
            {
                title: 'CSS 2',
                concepts: [
                    'CSS variables',
                    'Grid',
                    'Flex',
                    'Responsive design',
                    'Media queries',
                    'Relative position',
                    'Absolute position',
                    'Fixed & sticky position',
                    'Filter & transform',
                    'Importing fonts',
                    'Transitions',
                    'Animations'
                ]
            }
        ]
    },
    {
        title: "Javascript",
        chapters: [
            {
                title: 'Javascript 1',
                concepts: [
                    'Embedded & external javascript',
                    'console.log()',
                    'Data types: number',
                    'Data types: boolean',
                    'Data types: string',
                    'Data types: Array',
                    'Variables',
                    'If statements',
                    'For-loops',
                    'While-loops',
                    'Functions',
                    'Data types: Object',
                    'Methods',
                    'Event attributes on HTML Elements'
                ]
            },
            {
                title: 'Javascript 2',
                concepts: [
                    'What is the DOM?',
                    'HTML elements as objects',
                    'HTMLElement.innerText & HTMLElement.innerHTML',
                    'HTMLElement.style',
                    'HTMLElement.classList',
                    'HTMLElement.getAttribute/setAttribute',
                    'HTMLElement.addEventListener',
                    'HTMLInputElements',
                    'Form handling & form validation',
                    'document.createElement & HTMLElement.append',
                    'HTMLElement.insertAdjacentHTML',
                    'localStorage',
                    'JSON'
                ]
            },
            {
                title: 'Javascript 3',
                concepts: [
                    'Async functions & Promises',
                    'Fetch',
                    'APIs',
                    'Arrow functions',
                    'Anonymous functions',
                    'Array methods',
                    'Modules',
                    'Classes / Object Oriented Programming'
                ]
            }
        ]
    },
    {
        title: "React",
        chapters: [
            {
                title: "React",
                concepts: [
                    'Creating a React app with Vite',
                    'React app architecture',
                    'JSX',
                    'Functional components',
                    'Props',
                    'Conditional rendering',
                    'Rendering from arrays',
                    'react-router-dom',
                    'useState',
                    'useRef',
                    'useEffect',
                    'useContext',
                    'Other hooks',
                    'Custom hooks',
                    'Deploying with Vercel',
                    'Next.js'
                ]
            }
        ]
    },
    {
        title: "Node.js/Backend",
        chapters: [
            {
                title: "Node",
                concepts: [
                    'package.json and dependencies',
                    'Modules',
                    'Built-in module: path',
                    'Built-in module: fs',
                    'HTTP basics & creating a server',
                    'NPM and third-party modules',
                ]
            },
            {
                title: 'Express',
                concepts: [
                    'Creating a server using express',
                    'Defining routes: app.get, app.post, app.put, app.delete',
                    'Sending a response: res.send, res.sendFile, res.json, res.status',
                    'Middleware & app.use',
                    'req.params',
                    'req.search',
                    'req.body',
                    'Routers',
                    'More on middleware'
                ]
            },
            {
                title: 'SQL Databases',
                concepts: [
                    'Query builders vs. ORMs',
                    'SELECT queries',
                    'INSERT queries',
                    'UPDATE queries',
                    'DELETE queries',
                    'Sequelize'
                ]
            },
            {
                title: 'MongoDB',
                concepts: [
                    'MongoDB Atlas',
                    'Mongoose'
                ]
            }
        ]
    },
    {
        title: "Typescript",
        chapters: [
            {
                title: "Typescript",
                concepts: [
                    'Types',
                    'Union types',
                    'Function signatures',
                    'Generics',
                    'tsconfig',
                    'jsdoc'
                ]
            }
        ]
    }
]

export default plan