import { useState, useEffect, useRef } from 'react'
import './Technologies.css'

const Technologies = () => {
    const [selectedFruit, setSelectedFruit] = useState(null)
    const [isModelOpen, setIsModelOpen] = useState(false)

    const techFruitsInfo = {
        'Postgresql': { name: 'Postgresql', description: 'Relational database' },
        'NodeJS': { name: 'NodeJS', description: 'JavaScript runtime environment' },
        'AWS': { name: 'AWS', description: 'Cloud computing services' },
        'CSS': { name: 'CSS', description: 'Style sheet language' },
        'Docker': { name: 'Docker', description: 'Container platform' },
        'ExpressJS': { name: 'ExpressJS', description: 'Framework for NodeJS' },
        'Git': { name: 'Git', description: 'Version control system' },
        'GitHub': { name: 'GitHub', description: 'Collaborative development platform' },
        'HTML': { name: 'HTML', description: 'Markup language for the web' },
        'Java': { name: 'Java', description: 'Programming language' },
        'JavaScript': { name: 'JavaScript', description: 'Programming language' },
        'Python': { name: 'Python', description: 'Programming language' },
        'React': { name: 'React', description: 'Library for user interfaces' },
        'Vite': { name: 'Vite', description: 'Frontend build tool' },
        'NextJS': { name: 'NextJS', description: 'React framework for server-side rendering and static site generation' }
    }

    const handleFruitClick = (fruitName) => {
        setSelectedFruit(techFruitsInfo[fruitName])
        setIsModelOpen(true)
    }

    const hadleCloseModal = () => {
        setIsModelOpen(false)
    }

    return (
        <div className='technologies' id='technologies'>
            <h1 className='title'>Technologies</h1>
            <div className='tree'>
                <img src='../src/img/arbol.png' alt='Árbol' />
                <div className='techFruits'>
                    {Object.keys(techFruitsInfo).map((fruit, index) => (
                        <img
                            key={index}
                            className='techFruit'
                            src={`../src/img/${fruit.toLowerCase()}.png`}
                            alt={techFruitsInfo[fruit].name}
                            onClick={() => handleFruitClick(fruit)}
                        ></img>
                    ))}
                </div>
            </div>
            {isModelOpen && selectedFruit && (
                <div className='modal' onClick={hadleCloseModal}>
                    <div className='modal-content'>
                        <img src={`../src/img/${selectedFruit.name.toLowerCase()}.png`} alt={selectedFruit.name} className='modal-img' />
                        <div className='modal-text'>
                            <h1>{selectedFruit.name}</h1>
                            <h2>{selectedFruit.description}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Technologies