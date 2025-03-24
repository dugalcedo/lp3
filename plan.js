const plan = [
    {
        title: "HTML/CSS",
        chapters: [
            {
                title: "HTML",
                concepts: [
                    {
                        title: 'HTML Vocabulary',
                        description: "Do you know what the following words mean?",
                        questions: [
                            'element',
                            'tag',
                            'tagname',
                            'content',
                            'attribute',
                            'start tag',
                            'end tag',
                            'indentation',
                            'empty/self-closing element'
                        ]
                    },
                    {
                        title: 'Inline elements',
                        questions: [
                            'What is the default width of an inline element?',
                            'Can inline elements be resized?',
                            'What are 3 examples of inline elements?'
                        ]
                    },
                    {
                        title: 'Block elements',
                        questions: [
                            'What is the default width of a block element?',
                            'Can block elements be resized?',
                            'What are 3 examples of block elements?'
                        ]
                    },
                    {
                        title: 'Semantic elements',
                        questions: [
                            'What are 5 examples of semantic elements?',
                            'Why should you use semantic elements whenever possible?'
                        ]
                    },
                    {
                        title: 'Images',
                        questions: [
                            'What two attributes should every image element have at least?',
                            'What are two ways you can resize an image?',
                            'What is the default size of an image?',
                            'How can you remove the small space underneath an image?'
                        ]
                    },
                    {
                        title: 'Anchors',
                        questions: [
                            'What attribute is required in an anchor element?',
                            'What does "href" stand for?',
                            'How can you create a hyperlink that opens in a new tab?',
                            'How do you link to an external webpage?',
                            'How do you link to a local webpage?'
                        ]
                    },
                    {
                        title: 'DOCTYPE, html, head, & body',
                        questions: [
                            "What is VSCode's shortcut for generating HTML 'boilerplate' (starter code)?",
                            "What's the difference between the head and the body?",
                            "What's the difference between head, header, and heading?"
                        ]
                    },
                    {
                        title: 'Lists',
                        questions: [
                            'What are the three types of list in HTML?'
                        ]
                    },
                    {
                        title: 'Inputs',
                        questions: [
                            'What are 5 types of input?',
                            'What are 2 elements that behave like inputs, but have a different tagname?',
                            'How do you create radio buttons?',
                            'How do you create labels?'
                        ]
                    },
                    {
                        title: 'Tables',
                        questions: [
                            'What elements are involved in creating an HTML table?',
                            'How do you define a column in an HTML table?',
                            'How do you create table cells which span multiple columns and/or rows?',
                            'What is the difference between a &lt;td&gt; and a &lt;th&gt;?',
                            'Is a table a block element or inline element?'
                        ]
                    },
                    {
                        title: 'Forms',
                        questions: [
                            'What does the form action represent?',
                            'What about the method?',
                            'What is the default behavior of a form?',
                            'How do you create a button that does NOT submit the form?'
                        ]
                    },
                ]
            },
            {
                title: "CSS 1",
                concepts: [
                    {
                        title: 'CSS Vocabulary',
                        description: 'Do you know what the following words mean?',
                        questions: [
                            'declaration',
                            'selector',
                            'style',
                            'property',
                            'value',
                            'combinator'
                        ]
                    },
                    {
                        title: 'Inline, embedded, and external CSS',
                        description: 'Do you know how to write CSS the following ways?',
                        questions: [
                            'inline',
                            'embedded',
                            'external'
                        ]
                    },
                    {
                        title: 'Styling text',
                        description: 'How can you...',
                        questions: [
                            'make text bold?',
                            'change the color of text?',
                            'change the font?',
                            'italicize?',
                            'underline/remove underline?',
                            'change size?',
                            'add shadow?'
                        ]
                    },
                    {
                        title: 'Colors',
                        description: 'Do you know these color formats?',
                        questions: [
                            'named HTML colors',
                            'rgb',
                            'rgba',
                            'hex',
                            'hsl',
                            'hsla'
                        ]
                    },
                    {
                        title: 'Backgrounds',
                        description: 'Can you create the following backgrounds?',
                        questions: [
                            'color',
                            'image',
                            'gradient'
                        ]
                    },
                    {
                        title: 'Borders',
                        questions: [
                            'What three values should you provide when adding a border?',
                            'How do you round the corners?',
                            'How can you have different borders on different sides of an element?'
                        ]
                    },
                    {
                        title: 'Padding and margin',
                        questions: [
                            'What is the difference between padding and margin?',
                            'What happens when you provide just one value to padding/margin? (e.g. padding: 5px;)',
                            'Two values?',
                            'Four?'
                        ]
                    },
                    {
                        title: 'Width and height',
                        questions: [
                            `True or false: it's important to always set the height of your elements`,
                            "True or false: you should never set width without also setting height",
                            "True or false: the default width of an element is auto",
                            "True or false: the default height of an element is auto"
                        ]
                    },
                    {
                        title: ':hover'
                    },
                    {
                        title: 'Float',
                        questions: [
                            `In the HTML, should the floating element come BEFORE or AFTER the static content?`
                        ]
                    },
                    {
                        title: 'Developer tools',
                        questions: [
                            `What are two ways you can select HTML elements from the dev tools?`,
                            `How do you enable responsive design mode?`,
                            `How do you change the side of the screen your dev tools are docked on?`,
                            `What does the "computed" tab of the CSS panel show?`
                        ]
                    },
                    {
                        title: 'Box-sizing',
                        questions: [
                            `What is the difference between content-box and border-box?`,
                            `Why is it useful to apply box-sizing: border-box to all elements?`
                        ]
                    },
                    {
                        title: 'Layouts with tables',
                        description: `Before there was grid and flex, tables were a useful "hack" for creating complex layouts (and are still widely used in email templates).`
                    },
                ]
            },
            {
                title: 'CSS 2',
                concepts: [
                    {
                        title: 'CSS variables',
                        questions: [
                            `Why are CSS variables useful?`
                        ]
                    },
                    {
                        title: 'Grid',
                        questions: [
                            `Which style do you apply to an element to make it a grid?`,
                            `How do you define the number of columns in a grid?`,
                            `True or false: It's important to always define both the number of columns and the number of rows.`,
                            `True or false: Every child of a grid is a grid-item (as long as it doesn't have display: none;)`,
                            `How can you make it so a grid item takes up multiple columns/rows?`,
                            `How can you add space between the grid items?`
                        ]
                    },
                    {
                        title: 'Flex',
                        questions: [
                            `Which style do you apply to an element to make it a flexbox?`,
                            `Which is the default flex-direction of a flexbox? Column or row?`,
                            `In a row, which property controls the HORIZONTAL alignment of the flex items?`,
                            `In a row, which property controls the VERTICAL alignment of the flex items?`,
                            `How can you add space between the flex items?`,
                            `True or false: Only block elements can be flex items`
                        ]
                    },
                    {
                        title: 'Responsive design'
                    },
                    {
                        title: 'Media queries'
                    },
                    {
                        title: 'Relative position'
                    },
                    {
                        title: 'Absolute position'
                    },
                    {
                        title: 'Fixed & sticky position'
                    },
                    {
                        title: 'Filter & transform'
                    },
                    {
                        title: 'Importing fonts'
                    },
                    {
                        title: 'Transitions'
                    },
                    {
                        title: 'Animations'
                    },
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
                    {
                        title: 'Embedded & external javascript'
                    },
                    {
                        title: 'console.log()'
                    },
                    {
                        title: 'Data types: number'
                    },
                    {
                        title: 'Data types: boolean'
                    },
                    {
                        title: 'Data types: string'
                    },
                    {
                        title: 'Data types: Array'
                    },
                    {
                        title: 'Variables'
                    },
                    {
                        title: 'If statements'
                    },
                    {
                        title: 'For-loops'
                    },
                    {
                        title: 'While-loops'
                    },
                    {
                        title: 'Functions'
                    },
                    {
                        title: 'Data types: Object'
                    },
                    {
                        title: 'Methods'
                    },
                    {
                        title: 'Event attributes on HTML Elements'
                    },
                ]
            },
            {
                title: 'Javascript 2',
                concepts: [
                    {
                        title: 'What is the DOM?'
                    },
                    {
                        title: 'HTML elements as objects'
                    },
                    {
                        title: 'HTMLElement.innerText & HTMLElement.innerHTML'
                    },
                    {
                        title: 'HTMLElement.style'
                    },
                    {
                        title: 'HTMLElement.classList'
                    },
                    {
                        title: 'HTMLElement.getAttribute/setAttribute'
                    },
                    {
                        title: 'HTMLElement.addEventListener'
                    },
                    {
                        title: 'HTMLInputElements'
                    },
                    {
                        title: 'Form handling & form validation'
                    },
                    {
                        title: 'document.createElement & HTMLElement.append'
                    },
                    {
                        title: 'HTMLElement.insertAdjacentHTML'
                    },
                    {
                        title: 'localStorage'
                    },
                    {
                        title: 'JSON'
                    },
                ]
            },
            {
                title: 'Javascript 3',
                concepts: [
                    {
                        title: 'Async functions & Promises'
                    },
                    {
                        title: 'Fetch'
                    },
                    {
                        title: 'APIs'
                    },
                    {
                        title: 'Arrow functions'
                    },
                    {
                        title: 'Anonymous functions'
                    },
                    {
                        title: 'Array methods'
                    },
                    {
                        title: 'Modules'
                    },
                    {
                        title: 'Classes / Object Oriented Programming'
                    },
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
                    {
                        title: 'Creating a React app with Vite'
                    },
                    {
                        title: 'React app architecture'
                    },
                    {
                        title: 'JSX'
                    },
                    {
                        title: 'Functional components'
                    },
                    {
                        title: 'Props'
                    },
                    {
                        title: 'Conditional rendering'
                    },
                    {
                        title: 'Rendering from arrays'
                    },
                    {
                        title: 'react-router-dom'
                    },
                    {
                        title: 'useState'
                    },
                    {
                        title: 'useRef'
                    },
                    {
                        title: 'useEffect'
                    },
                    {
                        title: 'useContext'
                    },
                    {
                        title: 'Other hooks'
                    },
                    {
                        title: 'Custom hooks'
                    },
                    {
                        title: 'Deploying with Vercel'
                    },
                    {
                        title: 'Next.js'
                    },
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
                    {
                        title: 'package.json and dependencies'
                    },
                    {
                        title: 'Modules'
                    },
                    {
                        title: 'Built-in module: path'
                    },
                    {
                        title: 'Built-in module: fs'
                    },
                    {
                        title: 'HTTP basics & creating a server'
                    },
                    {
                        title: 'NPM and third-party modules'
                    },
                ]
            },
            {
                title: 'Express',
                concepts: [
                    {
                        title: 'Creating a server using express'
                    },
                    {
                        title: 'Defining routes: app.get, app.post, app.put, app.delete'
                    },
                    {
                        title: 'Sending a response: res.send, res.sendFile, res.json, res.status'
                    },
                    {
                        title: 'Middleware & app.use'
                    },
                    {
                        title: 'req.params'
                    },
                    {
                        title: 'req.search'
                    },
                    {
                        title: 'req.body'
                    },
                    {
                        title: 'Routers'
                    },
                    {
                        title: 'More on middleware'
                    },
                ]
            },
            {
                title: 'SQL Databases',
                concepts: [
                    {
                        title: 'Query builders vs. ORMs'
                    },
                    {
                        title: 'SELECT queries'
                    },
                    {
                        title: 'INSERT queries'
                    },
                    {
                        title: 'UPDATE queries'
                    },
                    {
                        title: 'DELETE queries'
                    },
                    {
                        title: 'Sequelize'
                    },
                ]
            },
            {
                title: 'MongoDB',
                concepts: [
                    {
                        title: 'MongoDB Atlas'
                    },
                    {
                        title: 'Mongoose'
                    },
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
                    {
                        title: 'Types'
                    },
                    {
                        title: 'Union types'
                    },
                    {
                        title: 'Function signatures'
                    },
                    {
                        title: 'Generics'
                    },
                    {
                        title: 'tsconfig'
                    },
                    {
                        title: 'jsdoc'
                    },
                ]
            }
        ]
    }
]

export default plan