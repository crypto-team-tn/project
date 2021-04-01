import React, { Component } from 'react'
import ChartsPage from '../product-details/ChartsPage '
import { useParams } from 'react-router-dom';

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

export default class ProductInfo extends Component {

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        {Data.map((data, key) => {
          if (data.id == id) {
            return (
              <div className="container">
                <div className="card product-details">
                  <div className="container-fliud">
                    <div className="wrapper row">
                      <div className="preview col-md-6">
                        <div className="preview-pic">
                          <div className="tab-pane active" id="pic-1"><img className="img-responsive" src={data.img} alt="crypto-kitten" /></div>
                        </div>
                      </div>
                      <div className="details col-md-6">
                        <h3 className="product-title">{data.name}</h3>
                        <div className="rating">
                          <span className="review-no">{data.bids}</span>
                        </div>
                        <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4 className="price">Current price: <span>{data.price}</span></h4>
                        <div className="action">
                          <button className="btn primary-btn" type="button">Make Offer</button>
              &nbsp;
              <button className="btn primary-btn" type="button"><span className="fa fa-heart" /></button>
                          <div>
                            <ChartsPage /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="container">
          <h2>Trading <b>History</b></h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
