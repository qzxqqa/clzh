import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <section>
                <Link to='/zhDetail'>平衡派策略组合</Link><br/>
                <Link to='/zhDetail'>积极派策略组合</Link>
            </section>
        )
    }
}

export default Home