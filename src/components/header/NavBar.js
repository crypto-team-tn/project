import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to={"/"} >NFT Marketplace</Link>
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
      </div>

    )
  }
}
