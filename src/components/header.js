import React, { Component } from 'react';

export class Header extends Component {

    constructor() {
        super();
        this.state = {
            username: "bin"
        }
    }

    componentWillMount() {
        console.log('1')
    }


    render() {
        setTimeout(()=>{
            this.setState({
                username: "bingo"
            })
        },1000);
        return(
            <div>
                <header>网站的头部</header>
                <div>{this.state.username}</div>
            </div>
        )
    }
}