import React from 'react'
import Menu from './menu.jsx'
import '../App.css'

class Header extends React.Component {


    render() {
        return (
            <header className="header">
                <h1>{this.props.name}</h1>
                <Menu link={this.props.links}></Menu>
            </header>
        )
    }

}

export default Header