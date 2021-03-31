import React, { Component } from 'react'
import ChartsPage  from '../product-details/ChartsPage '

export default class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card product-details">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic">
                    <div className="tab-pane active" id="pic-1"><img className="img-responsive" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1789925.svg" alt="crypto-kitten"/></div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">Crypto Kitten 1</h3>
                  <div className="rating">
                    <span className="review-no">4 Bids</span>
                  </div>
                  <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <h4 className="price">Current price: <span>18 EGLD</span></h4>
                  <div className="action">
                    <button className="btn primary-btn" type="button">Make Offer</button>
                    &nbsp;
                    <button className="btn primary-btn" type="button"><span className="fa fa-heart" /></button>
                    <div>
                        <ChartsPage  /></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
