import React from 'react'
//import {ReactComponent as PlayIcon} from '../svgs/play.svg'
import Playlists from './Playlists'

const Categories = () => {

    const dataCategories = [
        {
            id: 1,
            name: 'Focus',
            tagLine: 'Music to help you concentrate.'
        },
        {
            id: 2,
            name: 'Motivation',
            tagLine: 'Music to run.'
        },
        {
            id: 3,
            name: 'Trip',
            tagLine: 'Music to trip.'
        },
        {
            id: 4,
            name: 'Classic',
            tagLine: 'Classic music.'
        },
    ]

    return (
        <div className='mainInner'>
            {dataCategories.map((category, id) => (
                <div className='cardsWrap' key={id}>
                    <h1>{category.name}</h1>
                    <p className='subText'>{category.tagLine}</p>
                    <Playlists category_id={category.id} />  
                </div>
            ))}
            
        </div>
    )
}

export default Categories
