import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'
import { Link } from 'react-router-dom'

const Playlists = (props) => {
    const dataPlaylist = [
        {
            id: 101,
            category_id: 3,
            name: 'Trip playlist 1',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Trip playlist 2',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Trip playlist 3',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Classic playlist 1',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Motivation playlist 1',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Motivation playlist 2',
            img: 'https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
    ]

    const matchedPlaylist = dataPlaylist.filter((playlist) => playlist.category_id === props.category_id)

    return (
        <div className="cardsWrapInner">
        {matchedPlaylist.map((playlist, id) => (
          <Link to={`/playlist/` + playlist.id} key={id}>
            <div className="card" key={id}>
              <div className="cardImage">
                <img src={playlist.img} alt="Pic 1" />
              </div>
              <div className="cardContent">
                <h3>{playlist.name}</h3>
                <span>{playlist.desc}</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
          </Link>
        ))}
      </div>
    )
  }

export default Playlists
