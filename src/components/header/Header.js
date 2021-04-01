import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#!">NFT Marketplace</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">Browse <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Activity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Create</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item">
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                </form>
              </li>
              <li className="nav-item dropdown">
                <a href="#!" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                  <img
                    src="https://developers.google.com/search/images/google-search-central-logo_96.png"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#!">My Profile</a>
                  <a className="dropdown-item" href="#!">Sell</a>
                  <a className="dropdown-item" href="#!">Transfer</a>
                  <a className="dropdown-item" href="#!">Account Settings</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={{ height: '400px', backgroundSize: 'cover', backgroundImage: 'url(https://i.ibb.co/fx7fbqb/nf-header.jpg)' }}>
          <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex text-center h-100">
              <div className="col-12 col-md-8  h-50 ">
                <h1 className="display-2  text-light mb-2 mt-5"><strong>NFT Marketplace</strong> </h1>
                <h3 className="  text-light mb-5">Buy, sell, and discover rare digital items</h3>
                <p>
                  <a href="#!" className="btn primary-btn shadow-lg btn-round text-light btn-lg btn-rised" style={{ margin: '1%', padding: '2%' }}  >Explore Now <FontAwesomeIcon icon={["fal", "coffee"]} /></a>
                  <a href="#!" className="btn primary-btn shadow-lg btn-round text-light btn-lg btn-rised" style={{ margin: '1%', padding: '2%' }}>Create</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
