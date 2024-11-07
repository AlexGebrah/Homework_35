import './App.css'
import Navigation from "./Components/Navigation.jsx";
import Body from "./Components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./Utils/context.js";

function App() {
const [user, setUser] = useState({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
})
    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    })

  return (
    <div className={'app'}>
        <TwitterContext.Provider value={{
            user /*user: user*/,
            stats /*stats: stats*/
        }}>
            <Navigation/>
            <Body/>
        </TwitterContext.Provider>
    </div>
  )
}

export default App
