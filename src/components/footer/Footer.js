import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer">
                    <div className="container bottom_border">
                        <div className="row">
                            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">NFT Marketplace</h5>

                                <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p><i className="fa fa-location-arrow" /> Tunisia </p>
                                <p><i className="fa fa-phone" />  +216 71717171</p>
                                <p><i className="fa fa fa-envelope" /> info@nft-marketplace.com</p>
                            </div>
                            <div className=" col-sm-4 col-md  col-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Account</h5>

                                <ul className="footer_ul_amrc">
                                    <li><a href="#!">My Account</a></li>
                                    <li><a href="#!">My Items</a></li>
                                    <li><a href="#!">My Activity</a></li>
                                    <li><a href="#!">My Offers</a></li>
                                </ul>

                            </div>
                            <div className=" col-sm-4 col-md  col-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Marketplace</h5>

                                <ul className="footer_ul_amrc">
                                    <li><a href="#!">browse and Discover</a></li>
                                    <li><a href="#!">Rankings</a></li>
                                    <li><a href="#!">Recently Sold</a></li>
                                    <li><a href="#!">Biggest Sales</a></li>
                                    <li><a href="#!">Ending Soon</a></li>
                                    <li><a href="#!">Most Viewed</a></li>
                                </ul>

                            </div>
                            <div className=" col-sm-4 col-md  col-12 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                                <ul className="footer_ul2_amrc">
                                    <li><a href="#!"><i className="fa fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...</p></li>
                                    <li><a href="#!"><i className="fa fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...</p></li>
                                    <li><a href="#!"><i className="fa fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...</p></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ul className="foote_bottom_ul_amrc">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Browse</a></li>
                            <li><a href="#!">Activity</a></li>
                            <li><a href="#!">blog</a></li>
                            <li><a href="#!">Create</a></li>
                        </ul>

                        <p className="text-center">Copyright @2021 | Designed by <a href="#!">Bilel.M</a></p>
                        <ul className="social_footer_ul" style={{ margin:'0 0 0 35%'}}>
                            <li><a href="#!"><i className="fa fa-facebook-f" /></a></li>
                            <li><a href="#!"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#!"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#!"><i className="fa fa-instagram" /></a></li>
                        </ul>

                    </div>
                </footer>

            </div>
        )
    }
}
