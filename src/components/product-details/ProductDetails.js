import React, { Component } from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import ProductInfo from '../product-details/product_info'


export default class ProductDetails extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{margin:'5%'}}></div>
                 <NavBar />
                <ProductInfo />
                <br></br>
                <Footer />
            </div>
        )
    }
}
