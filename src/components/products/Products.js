import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const sampleJSON = {
'data1':{
"id":1,
 "user": 'User 2',
        "name": 'Crypto Kitty 1',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1789925.svg',
        "year":'2021',
        "bids":'5 Bids',
        'price':'10 EGLD',

        },
        'data2':{
        "id":2,
         "user": 'User 1',
        "name": 'Crypto Kitty 2',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1788382.svg',
        "year":'2021',
        "bids":'5 Bids',
        'price':'7 EGLD',
        },
        'data3':{
        "id":3,
         "user": 'User 1',
        "name": 'Crypto Kitty 3',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1971632.svg',
        "year":'2021',
        "bids":'8 Bids',
        'price':'7 EGLD',
        },
        'data4':{
        "id":4,
         "user": 'User 1',
        "name": 'Crypto Kitty 4',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1824482.svg',
        "year":'2021',
        "bids":'5 Bids',
        'price':'17 EGLD',
        },
        'data5':{
        "id":5,
         "user": 'User 2',
        "name": 'Crypto Kitty 5',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1977036.svg',
        "year":'2021',
        "bids":'5 Bids',
        'price':'7 EGLD',
        },
        'data6':{
        "id":6,
         "user": 'User 3',
        "name": 'Crypto Kitty 6',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1977340.svg',
        "year":'2021',
        "bids":'5 Bids',
        'price':'7 EGLD',
        },
        'data7':{
        "id":7,
         "user": 'User 3',
        "name": 'Crypto Kitty 7',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1971733.svg',
        "year":'2021',
        "bids":'15 Bids',
        'price':'3 EGLD',
        },
         'data8':{
        "id":8,
         "user": 'User 2',
        "name": 'Crypto Kitty 8',
        "img": 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1972110.svg',
        "year":'2021',
        "bids":'13 Bids',
        'price':'22 EGLD',
        },



};
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

                           <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="card rounded">
                                                        <div className="card-image">
                                                            <span className="card-notify-badge">{sampleJSON.data1.user}</span>
                                                            <span className="card-notify-year">{sampleJSON.data1.year}</span>
                                                            <img className="img-fluid" src={sampleJSON.data1.img} alt="Alternate Text" />
                                                        </div>
                                                        <div className="card-image-overlay m-auto">
                                                            <span className="card-detail-badge">{sampleJSON.data1.price}</span> &nbsp;
                                                            <span className="card-detail-badge">{sampleJSON.data1.bids}</span>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <div className="m-auto">
                                                                <h5>{sampleJSON.data1.name}</h5>
                                                            </div>
                                                            <Link className="btn" to="/product_detail/1" >View</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="card rounded">
                                                        <div className="card-image">
                                                            <span className="card-notify-badge">{sampleJSON.data2.user}</span>
                                                            <span className="card-notify-year">{sampleJSON.data2.year}</span>
                                                            <img className="img-fluid" src={sampleJSON.data2.img} alt="Alternate Text" />
                                                        </div>
                                                        <div className="card-image-overlay m-auto">
                                                            <span className="card-detail-badge">{sampleJSON.data2.price}</span> &nbsp;
                                                            <span className="card-detail-badge">{sampleJSON.data2.bids}</span>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <div className="m-auto">
                                                                <h5>{sampleJSON.data2.name}</h5>
                                                            </div>
                                                            <Link className="btn" to="/product_detail/2" >View</Link>
                                                        </div>
                                                    </div>
                                                </div>

                        <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data3.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data3.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data3.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data3.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data3.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data3.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/3" >View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data4.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data4.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data4.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data4.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data4.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data4.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/5" >View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data5.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data5.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data5.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data5.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data5.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data5.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/5" >View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data6.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data6.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data6.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data6.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data6.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data6.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/6" >View</Link>
                                </div>
                            </div>
                        </div>
                         <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data7.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data7.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data7.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data7.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data7.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data7.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/7" >View</Link>
                                </div>
                            </div>
                            </div>
                            <div className="mt-1 mb-5 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">{sampleJSON.data8.user}</span>
                                    <span className="card-notify-year">{sampleJSON.data8.year}</span>
                                    <img className="img-fluid" src={sampleJSON.data8.img} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{sampleJSON.data8.price}</span> &nbsp;
                                    <span className="card-detail-badge">{sampleJSON.data8.bids}</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="m-auto">
                                        <h5>{sampleJSON.data8.name}</h5>
                                    </div>
                                    <Link className="btn" to="/product_detail/8" >View</Link>
                                </div>
                            </div>
                            </div>










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
                                                                          </nav></div>

                    </div>
                </div>
            </div>
        )
    }
}
