import Image from "next/image";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <body>
        <div className="header-top">
            <div className="empty"></div>
            <button className="header-top__button">
                <svg viewBox="0 0 24 24" focusable="false" className="header-top__svg"
                     data-automation="tile-master-c-icon" data-metatip="true"
                     style={{height: "26px", transform: 'translate("0px", "0px")'}} data-selected="true"
                     data-label-id="0">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g stroke="currentColor">
                            <rect vector-effect="non-scaling-stroke" x="0.5" y="3.5" width="15" height="16"></rect>
                            <path vector-effect="non-scaling-stroke"
                                  d="M15.5,6.5 L15.5,19.5 L23.5,19.5 L23.5,12.1426602 L19.9947111,6.5 L15.5,6.5 Z"></path>
                            <path vector-effect="non-scaling-stroke"
                                  d="M3,20 C3,21.1045695 3.8954305,22 5,22 C6.1045695,22 7,21.1045695 7,20"></path>
                            <path vector-effect="non-scaling-stroke"
                                  d="M16,20 C16,21.1045695 16.8954305,22 18,22 C19.1045695,22 20,21.1045695 20,20"></path>
                        </g>
                    </g>
                </svg>
                <span className="header-service__span">Free Delivery Over $99*</span>
            </button>
            <button className="header-top__button">
                <svg focusable="false" viewBox="0 0 32 32" className="header-top__svg"
                     data-automation="tile-master-c-icon">
                    <path fill="none" stroke="currentColor" className="cls-1"
                          d="M13.11,14.5l-.11.12,2.24,6.88H16l.8-3.19L20,17.1v-.51Z"
                          vector-effect="non-scaling-stroke"></path>
                    <polyline fill="none" stroke="currentColor" className="cls-2"
                              points="21 10.5 21 6.5 11 6.5 11 10.5"
                              vector-effect="non-scaling-stroke"></polyline>
                    <path fill="none" stroke="currentColor" className="cls-3"
                          d="M6,10.5V21.76A16.67,16.67,0,0,0,16,25.5a16.67,16.67,0,0,0,10-3.74V10.5Z"
                          vector-effect="non-scaling-stroke"></path>
                </svg>
                <span className="header-service__span">Free Click & Collect</span>
            </button>
            <button className="header-top__button">
                <svg focusable="false" viewBox="0 0 32 32" className="header-top__svg"
                     data-automation="tile-master-c-icon">
                    <polyline fill="none" stroke="currentColor" points="21 10.5 21 6.5 11 6.5 11 10.5"
                              vector-effect="non-scaling-stroke"></polyline>
                    <path fill="none" stroke="currentColor"
                          d="M6,10.5V21.76A16.67,16.67,0,0,0,16,25.5a16.67,16.67,0,0,0,10-3.74V10.5Z"
                          vector-effect="non-scaling-stroke"></path>
                    <polyline fill="none" stroke="currentColor" points="14.94 20.37 12 17.5 14.94 14.5"
                              vector-effect="non-scaling-stroke"></polyline>
                    <path fill="none" stroke="currentColor" d="M12,17.5h9" vector-effect="non-scaling-stroke"></path>
                </svg>
                <span className="header-service__span">30-Day Returns</span>
            </button>
            <div className="empty"></div>
        </div>
        <header>
            <nav className="navbar">
                <svg className="navbar-logo" fill="none" height="26" viewBox="0 0 1136 180" width="168"
                     xmlns="http://www.w3.org/2000/svg"
                     data-automation="myer-logo">
                    <g fill="#1f1f1f">
                        <path
                            d="M181.345 0L140.017 80.9964L98.6859 0H-0.000244141V179.053H24.3022V61.8109L84.2637 179.053H137.379L189.127 61.8109V179.053H279.344V0H181.345ZM1135.92 51.2313C1135.59 15.7004 1104.63 0 1066.02 0H876.729V179.049H970.706V109.736L1026.47 179.049H1135.92L1074.16 102.152C1108.77 99.6536 1136.2 81.8085 1135.92 51.2313ZM1009.98 65.4786H970.597V37.0967H1009.98C1021.99 37.0967 1031.62 41.4443 1031.73 51.2896C1031.82 60.4433 1021.99 65.4786 1009.98 65.4786ZM851.642 0V37.0928H706.93V70.9802H836.081V108.073H706.93V141.964H851.642V179.057H613.062V0H851.642ZM527.489 0L475.997 68.4819L418.037 0H299.431L398.35 117.001V179.053H501.609V121.353L592.975 0H527.489Z"
                            fill="#1F1F1F"></path>
                    </g>
                </svg>
                <div className="search">
                    <input className="navbar-search__input" type="text" name="search"
                           placeholder="Search for product or brand"/>
                    <svg className="navbar-search--submit" width="24px" height="24px" viewBox="0 0 24 24"
                         focusable="false">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Search" stroke="currentColor">
                                <circle vector-effect="non-scaling-stroke" id="Oval-13" cx="10.5" cy="10.5"
                                        r="7"></circle>
                                <path vector-effect="non-scaling-stroke"
                                      d="M15.510498,15.2756348 L21.6812898,21.4464265"
                                      id="Path-2"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <ul className="navbar-list">
                    <li>
                        <button className="nav-list__login-btn">
                            <svg className="navbar-list__svg" width="32" height="32" stroke-width="1.5px"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg" data-automation="logged-out">
                                <path
                                    d="m2 22c0-4.4872 5.47619-8.3333 10-8.3333m0 0c4.5238 0 10 3.8461 10 8.3333m-10-8.3333c3.2217 0 5.8333-2.6117 5.8333-5.83337 0-3.22166-2.6116-5.83333-5.8333-5.83333-3.22166 0-5.83333 2.61167-5.83333 5.83333 0 3.22167 2.61167 5.83337 5.83333 5.83337z"
                                    stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
                                    stroke-width="1.5px"></path>
                            </svg>
                            <a href="#">Sign In / Join</a>
                        </button>
                    </li>
                    <li><a href="#">
                        <svg className="navbar-list__svg" width="32" height="32" stroke-width="1.5px"
                             viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m12 20.5714 8.5786-8.721c1.8952-1.92665 1.8952-5.05029 0-6.97689-1.8951-1.9266-4.9677-1.9266-6.8629 0l-1.7157 1.74421-1.7157-1.74421c-1.89517-1.9266-4.9678-1.9266-6.86294 0-1.89515 1.9266-1.89515 5.05024 0 6.97689z"
                                stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
                                stroke-width="1.5px"></path>
                        </svg>
                    </a></li>
                    <li><a href="#">
                        <svg className="navbar-list__svg" width="32" height="32" color="#1F1F1F" stroke-width="1.5px"
                             viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m8.42857 8.42857c0-.02005.00037-.39647.00111-.88373.00141-.92452.00418-2.24807.0084-2.29359.09649-1.04159.94959-3.25125 3.56512-3.25125 2.7899 0 3.5682 2.45874 3.5682 3.44314v2.98543m-13.5714-2.14286h20v13.57139c0 1.1835-.9594 2.1429-2.1429 2.1429h-15.71424c-1.18347 0-2.14286-.9594-2.14286-2.1429z"
                                stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
                                stroke-width="1.5px"></path>
                        </svg>
                    </a></li>
                </ul>
            </nav>
            <div className="search-small">
                <button>
                    <svg width="32" height="32" stroke-width="1.5px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" data-automation="burger-menu-icon">
                        <path d="M0 20H24M0 12H16M0 4H24" stroke-linecap="round" strokeLinejoin="round"
                              stroke="#1F1F1F" stroke-width="1.5px"></path>
                    </svg>
                </button>
                <input className="navbar-search__input" type="text" name="search"
                       placeholder="Search for product or brand"/>
                <svg className="navbar-search--submit" width="24px" height="24px" viewBox="0 0 24 24" focusable="false">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Search" stroke="currentColor">
                            <circle vector-effect="non-scaling-stroke" id="Oval-13" cx="10.5" cy="10.5" r="7"></circle>
                            <path vector-effect="non-scaling-stroke" d="M15.510498,15.2756348 L21.6812898,21.4464265"
                                  id="Path-2"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="navbar-categories">
                <button className="navbar-categories__button">Stocktake Sale</button>
                <button className="navbar-categories__button">Women</button>
                <button className="navbar-categories__button">Men</button>
                <button className="navbar-categories__button">Beauty</button>
                <button className="navbar-categories__button">Home</button>
                <button className="navbar-categories__button">Travel & Tech</button>
                <button className="navbar-categories__button">Kids</button>
                <button className="navbar-categories__button">Toys</button>
                <button className="navbar-categories__button">Gifts</button>
                <button className="navbar-categories__button">Clearance</button>
                <button className="navbar-categories__button">MYER one</button>
            </div>

        </header>
        <main>
            <p className="main-promotion__top">STOCKTAKE SALE ON NOW</p>
            <div className="main-promotion__main">
                <div className="main-promotion__left">
                    <div className="main-promotion__left-top">Stocktake
                        <div className="main-promotion__beauty"></div>
                        <div className="main-promotion__beauty"></div>
                    </div>
                    <div className="main-promotion__left-bottom">Sale
                        <div className="main-promotion__beauty"></div>
                        <div className="main-promotion__beauty"></div>
                    </div>

                </div>
                <div className="main-promotion__right">
                    <p>UP TO 50%<span className="main-promotion__right-off">OFF</span></p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>A range of women's, men's and kids' fashion and homewares</p>
                    <button type="button" className="main-promotion__button">SHOP NOW</button>
                </div>

            </div>
            <div className="main-promotion__recommendation">
            {/*    <h2 className="main-promotion__recommendation-title">Top Sale Picks For You</h2>*/}
            {/*    <div className="main-promotion__recommendation-list">*/}
            {/*        <button className="main-promotion__recommendation-button">*/}
            {/*            &lt;*/}
            {/*        </button>*/}
            {/*        <div className="main-promotion__recommendation-item-list">*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <div><p className="main-promotion__item-brand">Soho</p>*/}
            {/*                        <span*/}
            {/*                            className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-promotion__recommendation-item">*/}
            {/*                <div className="main-promotion__item-img-container">*/}
            {/*                    <img src="./img/1.jpeg"*/}
            {/*                         alt=""></img>*/}
            {/*                </div>*/}

            {/*                <div className="main-promotion__item-info">*/}
            {/*                    <p className="main-promotion__item-brand">Soho</p>*/}
            {/*                    <span*/}
            {/*                        className="main-promotion__item-name">Flannelette Pyjama Set in Leopard Skin</span>*/}
            {/*                    <div></div>*/}
            {/*                    <div className="main-promotion__recommendation-item-price-old">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-old-number">100</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="main-promotion__recommendation-item-price-new">*/}
            {/*                        <span>$</span>*/}
            {/*                        <span className="main-promotion__recommendation-item-price-new-number">50</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}


            {/*        </div>*/}

            {/*        <button className="main-promotion__recommendation-button">&gt;</button>*/}
            {/*    </div>*/}
            </div>
        </main>
        </body>
    );
}
