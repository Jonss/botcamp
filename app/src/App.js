import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp'
import BotcampLogo from './components/Logo'
import "./reset.css"
import "./app.css"

class App extends Component {
    render() {
        return (
            <div className="container">
                <BotcampLogo />
                <BtnBotcamp />
            </div>
        )
    }
}

export default App