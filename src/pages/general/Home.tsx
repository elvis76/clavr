import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='home'>
            <button onClick={() => navigate('/dashboard/meet')}>
                Launch App
            </button>
        </div>
    )
}

export default Home
