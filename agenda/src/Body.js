import React, { useState } from 'react'
import './Body.css'

const lista = [
    {
        "id": 1,
        "utente": "John Doe",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        "img": "https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg"
    },
    {
        "id": 2,
        "utente": "Luigi Verdi",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        "img": "https://64.media.tumblr.com/7474b3b2aa6279f8fb5d9483a0c9415e/95af84067c1e1c78-8f/s1280x1920/b7d97cdb152d96a8b11be085e907210924657a38.jpg"
    },
    {
        "id": 3,
        "utente": "Mario Rossi",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        "img": "https://i.pinimg.com/originals/67/85/ed/6785ed59293366d5d34ac3c775e735d9.jpg"
    },
    {
        "id": 4,
        "utente": "Peach Rosi",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        "img": "https://64.media.tumblr.com/ff1f141e0db135e5a04a37c4f0be2c7a/2311463b7155ba79-66/s1280x1920/0b0dffd50069ee0fae83bad8d325fecfd8d2d953.jpg"
    },
    {
        "id": 5,
        "utente": "Toad Gialli",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        "img": "https://pbs.twimg.com/media/EQh43qjXUAE3sBe.png"
    }
]

const Body = () => {
    const [utenti, setUtenti] = useState(lista);

    const elimina = (id) => {
        const nuovaLista = utenti.filter((utente) => utente.id !== id);
        setUtenti(nuovaLista);
        console.log(nuovaLista);
    }

    const reload = () => {
        setUtenti(lista);
    }

    const deleteAll = () => {
        setUtenti([]);
    }

    return (
        <div className='d-flex justify-content-center flex-column align-items-center text-light'>
            <h1 className='pt-3 fw-bold'>Prossimi Appuntamenti</h1>
            <ul className='w-100'>
                {utenti.map((utente) => {
                    return (
                        <li style={{ width: "300px" }} key={utente.id} className='d-flex w-100 justify-content-center align-items-center item p-3'>
                            <img src={utente.img} alt={utente.utente} width={"70px"} height={"70px"} className='me-3' />
                            <div>
                                <h2>{utente.utente}</h2>
                                <p>{utente.quote}</p>
                            </div>
                            <div className='text-danger fs-1 ms-4 click' onClick={() => elimina(utente.id)}>
                                [x]
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className='d-flex justify-content-evenly w-50'>
                <button className='btn btn-outline-primary bottone'  onClick={reload}>Reload</button>
                <button className='btn btn-outline-danger bottone' onClick={deleteAll}>Delete All</button>
            </div>
        </div>
    )
}

export default Body