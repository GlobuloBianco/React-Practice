import React from 'react'
import './Component.css'

const Component = ({DarkMode, setDarkMode}) => {

    return (
        <div className={`d-flex justify-content-center flex-column align-items-center fs-1 component animate ${DarkMode ? "" : "light"}`}>
            <p> {DarkMode ? "Patata Dorme" : "Patata Sveglia"} </p>
            <button className={`btn ${DarkMode ? "btn-outline-primary" : "btn-outline-danger"}`} onClick={()=> setDarkMode(!DarkMode)}> {DarkMode ? "giorno ora!" : "notte subito!"} </button>
            <div className='d-flex justify-content-evenly flex-wrap card-wrap'>
                <div className='fs-6 carta'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid lorem
                </div>
                <div className='fs-6 carta'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid lorem
                </div>
                <div className='fs-6 carta'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid lorem
                </div>
            </div>
        </div>
    )
}

export default Component