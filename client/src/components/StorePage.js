import React from 'react'
import { useParams } from 'react-router-dom'

function StorePage({ storeStickers, categories, setUser, user }) {
    const { catName } = useParams()

    let storeItems = storeStickers && storeStickers.filter(o => o.category === catName)
        .filter(o => !user.useritems.map(e => e.id).includes(o.id))
        .map(o => {
            return (
                <button className='store-button'>
                    <img src={o.image_url} alt={o.name} />
                    <h5>{o.name}</h5>
                    <h3>
                        {o.price}
                    </h3>
                </button>
            )
        })

    return (
        <div>
            <h1>{catName} store</h1>
            <div className='store-item-container'>
                {storeItems}
            </div>
        </div>
    )
}

export default StorePage