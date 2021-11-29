import React from 'react';

import './Navbar.scss';

export class Navbar extends React.Component {

    render() {
        return <nav>
            <span className="menu"> </span>
            <h1 className="title">TODO</h1>
            <span className="create" onClick={this.props.createHandler}><img src="assets/plus.png" alt="create"></img></span>
        </nav>
    }
}