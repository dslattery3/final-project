import React from 'react'
import { NavLink } from 'react-router-dom'

function StoreContainer({ categories }) {

    const storeCards = categories && categories.map((e, i) => {
        return (
            <NavLink key={i} to={`${e && e}`}>
                <button className='store-card'>
                    <h1>{e && e}</h1>
                </button>
            </NavLink>
        )
    })

    return (
        <div>
            <h2>cantina</h2>
            <div className='store-card-container'>
                {categories && storeCards}
            </div>
        </div>
    )
}

export default StoreContainer