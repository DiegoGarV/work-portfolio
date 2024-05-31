import { useEffect, useRef, useState }  from 'react'
import './Projects.css'

const Projects = () => {
    
    const topSectionRef = useRef();

    useEffect(() => {
        const treeHeight = document.querySelector('.tree').offsetHeight
        topSectionRef.current.style.height = `${treeHeight}px`
    }, [])

    const [projects, setProjects] = useState([
        {image: '../src/img/Blog.png', title: 'Blog', description: 'A blog created using React an Vite. Post are manage with an API.', url: 'http://uwu-guate.site:3777'},
        {image: '../src/img/calculadora.png', title: 'Calculator', description: 'A calculator created using React and Vite.', url: 'https://calculadora-web-efbc5.web.app'},
        {image: '../src/img/chat.png', title: 'Chat', description: 'A chat created using js and node.js for the message management. Messages are stored inside of an API.', url: 'http://uwu-guate.site:3515'},
        {image: '../src/img/dibujo-css.png', title: 'CSS drawing', description: 'A drawing created using only CSS tools and animations.', url: 'http://uwu-guate.site:3415'},
        {image: '../src/img/historia-html.png', title: 'HTML story', description: 'A simple page created using only HTML and CSS.', url: 'http://uwu-guate.site:3315'},
    ])
    const [currentProject, setCurrentProject] = useState(0);
    
    return (
        <div className='projects' id='projects'>
            <div className='top-section' ref={topSectionRef}></div>
            <div className='bottom-section'>
                <h1 className='texto'>Projects</h1>
                <div className='carousel'>
                    <button onClick={() => setCurrentProject(currentProject > 0 ? currentProject - 1 : projects.length - 1)}>&lt;</button>
                    <div className='project'>
                        <div className='project-image-container'>
                        <a href={projects[currentProject].url} target='_blank' rel='noopener noreferrer'>
                            <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                        </a>
                        </div>
                        <div className='project-details'>
                            <h2>{projects[currentProject].title}</h2>
                            <p>{projects[currentProject].description}</p>
                        </div>
                    </div>
                    <button onClick={() => setCurrentProject(currentProject < projects.length - 1 ? currentProject + 1 : 0)}>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Projects
