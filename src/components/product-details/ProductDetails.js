import React, { Component } from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import ProductInfo from '../product-details/product_info';
import { BrowserRouter, Route } from 'react-router-dom'


export default class ProductDetails extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ margin: '5%' }}></div>
                <NavBar />
                <Route path="/product_detail/:id" component={ProductInfo} />
                <br></br>
                <Footer />
            </div>
        )
    }
}
