import React, { useState } from 'react'
import './App.css'

let activities = ['Take a Walk', 'Go Biking', 'Play a Game', 'Watch a Movie']

let outdoorLocations = ['Klett', 'Garden', 'Kattem', 'Skjetlein', 'Beach', 'Forest']

let chores = ['Laundry', 'Vaccum & Mop', 'Take Out Trash', 'Clean', 'Tidy', 'Organize']

let indoorLocations = ['Kitchen', 'Living Room', 'Dining Room', 'Bedroom', ' Bathroom', 'Lobby', 'Office', 'Guest Room', 'Basement']

function App() {
    const [randomVal, setRandomVal] = useState([])
    
    const getRandomVal = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    const handleClick1 = () => {
        const val1 = getRandomVal(activities)
        const val2 = getRandomVal(outdoorLocations)
        const val3 = getRandomVal(chores)
        const val4 = getRandomVal(indoorLocations)

        setRandomVal([val1, val2, val3, val4])
    }


    
    const [isShown, setIsShown] = useState(true)

    const handleClick2 = () => {
        setIsShown(!isShown)
    }
    

    return (
        <section className='main'>
            <section className='diagonal'>
                <h1 className='site-title'>Activity Generator</h1>
                <p className='intro'>Click the button to generate a random activity and chore, as well as indoor and outdoor locations.</p>

                <button onClick={handleClick1}>Generate</button>
                <button onClick={handleClick2}>
                        {isShown ? 'Hide Locations' : 'Show Locations'}
                </button>

                <section className='results'>
                    <span className='result-label'>Activity: <span className='result-val'>{randomVal[0]}</span></span>
                    <span className='result-label'>Chore: <span className='result-val'>{randomVal[2]}</span></span>

                </section>
                    
                {isShown && (
                    <section className='results'>
                        <span className='result-label'>Outdoors: <span className='result-val'>{randomVal[1]}</span></span>
                        <span className='result-label'>Indoors: <span className='result-val'>{randomVal[3]}</span></span>    
                    </section>    
                )} 
            </section>   

            <footer>
                <span>Application made by Ronja Dahl</span>
            </footer>                                     
        </section>
    )
}

export default App
