import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'
import Categories from './Categories'
import { Switch, Route } from 'react-router-dom' 
import PlaylistPage from './pages/Playlist'

const Main = () => {
    return (
        <div className='main'>
            <div className='upperNav'>

            </div>
            <div className='mainContent'>
                <Switch>
                    <Route path="/" exact component={Categories}></Route>
                    <Route path="/search">Search</Route>
                    <Route path="/your-library">Your library</Route>
                    <Route path="/playlist/:id" component={PlaylistPage}></Route>
                </Switch>            
            </div>            
        </div>
    )
}

export default Main
