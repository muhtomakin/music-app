import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'

const Main = () => {
    return (
        <div className='main'>
            <div className='upperNav'>

            </div>
            <div className='mainContent'>
                <div className='cardsWrap'>
                    <h1>Uniquely Yours</h1>
                    <div className='card'>
                        <div className='cardImage'>
                            <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1
                            &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                            alt="Pic 1"/>
                        </div>
                        <div className='cardContent'>
                            <h3>Liked Songs</h3>
                        </div>
                        <span className='playIcon'>
                            <PlayIcon />
                        </span>
                    </div>
                </div>
                <div className='cardsWrap'>
                    <h1>Focus</h1>
                    <p className='subText'>Music to help you concentrate.</p>
                    <div className='cardsWrapInner'>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1
                                &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                                alt="Pic 1"/>
                            </div>
                            <div className='cardContent'>
                                <h3>Rock & Roll</h3>
                                <span>AC/DC</span>
                            </div>
                            <span className='playIcon'>
                                <PlayIcon />
                            </span>
                        </div>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1
                                &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                                alt="Pic 1"/>
                            </div>
                            <div className='cardContent'>
                                <h3>Rock & Roll</h3>
                                <span>AC/DC</span>
                            </div>
                            <span className='playIcon'>
                                <PlayIcon />
                            </span>
                        </div>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1
                                &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                                alt="Pic 1"/>
                            </div>
                            <div className='cardContent'>
                                <h3>Rock & Roll</h3>
                                <span>AC/DC</span>
                            </div>
                            <span className='playIcon'>
                                <PlayIcon />
                            </span>
                        </div>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src='https://images.unsplash.com/photo-1504290439769-3f6ad906bef5?ixlib=rb-1.2.1
                                &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                                alt="Pic 1"/>
                            </div>
                            <div className='cardContent'>
                                <h3>Rock & Roll</h3>
                                <span>AC/DC</span>
                            </div>
                            <span className='playIcon'>
                                <PlayIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Main
