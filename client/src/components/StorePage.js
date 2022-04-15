import React from 'react'
import { useParams } from 'react-router-dom'
import { postPurchase } from '../tools/api'

function StorePage({ storeStickers, categories, setUser, user }) {
    const { catName } = useParams()

    const handlePurchase = (stickerObj) => {
        console.log(stickerObj.id)
        console.log(user)

        if (user.wallet >= stickerObj.price) {
            const body = JSON.stringify({
                user_id: user.id,
                item_id: stickerObj.id
            })
            postPurchase(body).then(data => {
                console.log(data)
                const copy = { ...user }
                copy.useritems.push(data)
                copy.wallet = (copy.wallet - stickerObj.price)
                setUser(copy)
            })
        }
        else {
            alert('insufficient funds')
        }
    }

    let storeItems = storeStickers && storeStickers.filter(o => o.category === catName)
        .filter(o => !user.useritems.map(e => e.name).includes(o.name))
    storeItems = storeStickers && storeItems.map((o, i) => {
        return (
            <button key={i} onClick={() => handlePurchase(o)} className='store-button'>
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