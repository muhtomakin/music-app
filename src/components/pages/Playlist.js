import React from 'react'
import { useParams } from 'react-router-dom'
import {ReactComponent as PlayIcon} from '../../svgs/play.svg'
import {ReactComponent as HeartIcon} from '../../svgs/heart.svg'


const PlaylistPage = () => {

    let { id } = useParams()

    return (
        <div className='playlistPage'>
            <div className='mainInner'>
                <div className='playlistPageInfo'>
                    <div className='playlistPageImage'>
                    <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='pic' />
                    </div>
                    <div className='playlistPageContent'>
                        <p className='smallText uppercase'>Playlist</p>
                        <h1>Title</h1>
                        <p className='tagline'>Description</p>
                        <div className='playlistPageDesc'>
                            <p className='spotify'>Spotify</p> 
                            <span>333, 333 likes</span>
                            <span>1hr 52 min</span> 
                        </div>                           
                    </div>         
                </div>
                
                <div className='playlistPageSongs'>
                    <div className='playlistButtons'>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                        <div className='icons'>
                            <div className='icon iconsHeart'>  
                                <HeartIcon />     
                            </div>
                            <div className='icon iconsDots'></div>
                        </div>
                    </div>
                    <ul className='songList'>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'></div>
                            <div className='songDetails'>
                                <h3>Sexy Back</h3>
                                <span>Justin Timberlake</span>
                            </div>
                            <div className='songTime'>
                                <span>4.32</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage
