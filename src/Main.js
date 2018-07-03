import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import { SIGUNUSED } from 'constants';

class Main extends Component {
    render () {
        return (
        <div className="Main">
        <Sidebar />
        <Chat />
        </div>
        )
    }
}

export default Main