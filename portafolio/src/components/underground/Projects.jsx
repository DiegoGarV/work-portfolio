import { useEffect, useRef }  from 'react'
import './Projects.css'

const Projects = () => {
    
    const topSectionRef = useRef();

    useEffect(() => {
        const treeHeight = document.querySelector('.tree').offsetHeight
        topSectionRef.current.style.height = `${treeHeight}px`
    }, [])
    
    return (
        <div className='projects' id='projects'>
            <div className='top-section' ref={topSectionRef}></div>
            <div className='bottom-section'>
                <h1 className='texto'>HOLA</h1>
            </div>
        </div>
    )
}

export default Projects
