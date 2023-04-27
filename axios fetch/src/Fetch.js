import './Fetch.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = "https://api.github.com/users";

const Fetch = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get(url);
        setData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='container'>
            <h1>Fetch Profiles</h1>
            <hr className='hr'></hr>
            <div className='card-wrap'>
                {data.map(user => (
                    <article className='card' key={user.id}>
                        <img src={user.avatar_url} alt={user.login} width={"80px"} height={"80px"} />
                        <div className='profile'>
                            <h2>{user.login}</h2>
                            <a href={user.html_url} target='_blank' rel="noreferrer">Profile</a>
                        </div>
                    </article>
                ))}
            </div>
        </div>

    )
}

export default Fetch