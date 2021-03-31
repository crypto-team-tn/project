import React, { Component } from 'react'
import Header from '../header/Header'
import NavBar from '../header/NavBar'
import Products from '../products/Products'
import Footer from '../footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Products />
                <br></br>
                <Footer />
            </div>
        )
    }
}
