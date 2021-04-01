import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Data = [

    {
        "id": 1,
        "user": "User 2",
        "name": "Crypto Kitty 1",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1789925.svg",
        "year": "2021",
        "bids": "5 Bids",
        "price": "10 EGLD"
    },
    {
        "id": 2,
        "user": "User 1",
        "name": "Crypto Kitty 2",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1788382.svg",
        "year": "2021",
        "bids": "5 Bids",
        "price": "7 EGLD"
    },
    {
        "id": 3,
        "user": "User 1",
        "name": "Crypto Kitty 3",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1971632.svg",
        "year": "2021",
        "bids": "8 Bids",
        "price": "7 EGLD"
    },
    {
        "id": 4,
        "user": "User 1",
        "name": "Crypto Kitty 4",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1824482.svg",
        "year": "2021",
        "bids": "5 Bids",
        "price": "17 EGLD"
    },
    {
        "id": 5,
        "user": "User 2",
        "name": "Crypto Kitty 5",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1977036.svg",
        "year": "2021",
        "bids": "5 Bids",
        "price": "7 EGLD"
    },
    {
        "id": 6,
        "user": "User 3",
        "name": "Crypto Kitty 6",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1977340.svg",
        "year": "2021",
        "bids": "5 Bids",
        "price": "7 EGLD"
    },
    {
        "id": 7,
        "user": "User 3",
        "name": "Crypto Kitty 7",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1971733.svg",
        "year": "2021",
        "bids": "15 Bids",
        "price": "3 EGLD"
    },
    {
        "id": 8,
        "user": "User 2",
        "name": "Crypto Kitty 8",
        "img": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1972110.svg",
        "year": "2021",
        "bids": "13 Bids",
        "price": "22 EGLD"
    }
];
export default class Products extends Component {

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <h2>Trending <b>Collections</b></h2>
                </div>
                <div className="container">
                    <div className="row" id="products">
                        {/* Category Card */}
                        {Data.map((data, key) => {
                            return (
                                <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                    <div className="card rounded">
                                        <div className="card-image">
                                            <span className="card-notify-badge">{data.user}</span>
                                            <span className="card-notify-year">{data.year}</span>
                                            <img className="img-fluid" src={data.img} alt="Alternate Text" />
                                        </div>
                                        <div className="card-image-overlay m-auto">
                                            <span className="card-detail-badge">{data.price}</span> &nbsp;
                                        <span className="card-detail-badge">{data.bids}</span>
                                        </div>
                                        <div className="card-body text-center">
                                            <div className="m-auto">
                                                <h5>{data.name}</h5>
                                            </div>
                                            <Link className="btn" to={"/product_detail/" + data.id} >View</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="container">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end ">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
