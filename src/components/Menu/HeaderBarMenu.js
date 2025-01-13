import React, { Component } from 'react';



export class HeaderBarMenu extends Component {
  static displayName = HeaderBarMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
        <header className="header">
        <div className="header__inner">

            
            <div className="header__brand">
                <div className="brand-wrap">

                    
                    <a href="./index.html" className="brand-img stretched-link">
                        <img src={require('../../assets/img/IconoSIPPA.ico')} alt="Nifty Logo" className="Nifty logo" width="40" height="40"/>
                    </a>

                    
                    <div className="brand-title">Sippa</div>

                    

                </div>
            </div>
            

            <div className="header__content">

                
                <div className="header__content-start">

                    
                    <button type="button" className="nav-toggler header__btn btn btn-icon btn-sm" aria-label="Nav Toggler">
                        <i className="psi-list-view" ></i>
                    </button>

                    
                    <div className="header-searchbox">

                        
                        <label htmlFor="header-search-input" className="header__btn d-md-none btn btn-icon rounded-pill shadow-none border-0 btn-sm" type="button">
                            <i className="psi-magnifi-glass"></i>
                        </label>

                        
                        <form className="searchbox searchbox--auto-expand searchbox--hide-btn input-group">
                            <input id="header-search-input" className="searchbox__input form-control bg-transparent" type="search" placeholder="Type for search . . ." aria-label="Search"/>
                            <div className="searchbox__backdrop">
                                <button className="searchbox__btn header__btn btn btn-icon rounded shadow-none border-0 btn-sm" type="button" id="button-addon2">
                                    <i className="pli-magnifi-glass"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="header__content-end">

                    
                    <div className="dropdown">

                        
                        <button className="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="Megamenu dropdown" aria-expanded="false">
                            <i className="psi-layout-grid"></i>
                        </button>

                        
                        <div className="dropdown-menu dropdown-menu-end p-3 mega-dropdown">
                            <div className="row">
                                <div className="col-md-3">

                                    
                                    <div className="list-group list-group-borderless">
                                        <div className="list-group-item d-flex align-items-center border-bottom mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="pli-file fs-4"></i>
                                            </div>
                                            <h5 className="flex-grow-1 m-0">Pages</h5>
                                        </div>
                                        <a href="#" className="list-group-item list-group-item-action">Profile</a>
                                        <a href="#" className="list-group-item list-group-item-action">Search Result</a>
                                        <a href="#" className="list-group-item list-group-item-action">FAQ</a>
                                        <a href="#" className="list-group-item list-group-item-action">Screen Lock</a>
                                        <a href="#" className="list-group-item list-group-item-action">Maintenance</a>
                                        <a href="#" className="list-group-item list-group-item-action">Invoices</a>
                                        <a href="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Disabled Item</a>
                                    </div>

                                </div>
                                <div className="col-md-3">

                                    
                                    <div className="list-group list-group-borderless mb-3">
                                        <div className="list-group-item d-flex align-items-center border-bottom mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="pli-mail fs-4"></i>
                                            </div>
                                            <h5 className="flex-grow-1 m-0">Mailbox</h5>
                                        </div>
                                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                            Inbox <span className="badge bg-danger rounded-pill">14</span>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">Read Messages</a>
                                        <a href="#" className="list-group-item list-group-item-action">Compose</a>
                                        <a href="#" className="list-group-item list-group-item-action">Template</a>
                                    </div>

                                    
                                    <div className="list-group list-group-borderless">
                                        <div className="list-group-item d-flex align-items-center border-bottom">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="pli-calendar-4 fs-4"></i>
                                            </div>
                                            <h5 className="flex-grow-1 m-0">News</h5>
                                        </div>
                                        <small className="list-group-item">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolore unde autem, molestiae eum laborum aliquid at commodi cum? Blanditiis.
                                        </small>
                                    </div>

                                </div>
                                <div className="col-md-3">

                                    
                                    <div className="list-group list-group-borderless">
                                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                            <div className="flex-shrink-0 me-3">
                                                <i className="pli-data-settings fs-2"></i>
                                            </div>
                                            <div className="flex-grow-1 ">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <a href="#" className="h6 d-block mb-1 stretched-link text-decoration-none">Data Backup</a>
                                                    <span className="badge bg-success rounded-pill ms-auto">40%</span>
                                                </div>
                                                <small className="text-muted">Current usage of disks for backups.</small>
                                            </div>
                                        </div>

                                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                            <div className="flex-shrink-0 me-3">
                                                <i className="pli-support fs-2"></i>
                                            </div>
                                            <div className="flex-grow-1 ">
                                                <a href="#" className="h6 d-block mb-1 stretched-link text-decoration-none">Support</a>
                                                <small className="text-muted">Have any questions ? please don't hesitate to ask.</small>
                                            </div>
                                        </div>

                                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                            <div className="flex-shrink-0 me-3">
                                                <i className="pli-computer-secure fs-2"></i>
                                            </div>
                                            <div className="flex-grow-1 ">
                                                <a href="#" className="h6 d-block mb-1 stretched-link text-decoration-none">Security</a>
                                                <small className="text-muted">Our devices are secure and up-to-date.</small>
                                            </div>
                                        </div>

                                        <div className="list-group-item list-group-item-action d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <i className="pli-map-2 fs-2"></i>
                                            </div>
                                            <div className="flex-grow-1 ">
                                                <a href="#" className="h6 d-block mb-1 stretched-link text-decoration-none">Location</a>
                                                <small className="text-muted">From our location up here, we kept in close touch.</small>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-3">

                                    {}
                                    <div className="d-grid gap-2 ps-5 pe-2">
                                        <div className="row g-1 rounded-3 overflow-hidden">
                                            <div className="col-6 mt-0">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-1.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                            <div className="col-6 mt-0">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-3.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                            <div className="col-6">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-2.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                            <div className="col-6">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-4.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                            <div className="col-6">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-6.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                            <div className="col-6">
                                                <img className="img-fluid" src={require("../../assets/img/megamenu/img-5.jpg")} alt="thumbnails" loading="lazy"/>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary">Browse Gallery</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="dropdown">

                        
                        <button className="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-label="Notification dropdown" aria-expanded="false">
                            <span className="d-block position-relative">
                                <i className="psi-bell"></i>
                                <span className="badge badge-super rounded bg-danger p-1">

                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </span>
                        </button>

                        
                        <div className="dropdown-menu dropdown-menu-end w-md-300px">
                            <div className="border-bottom px-3 py-2 mb-3">
                                <h5>Notifications</h5>
                            </div>

                            <div className="list-group list-group-borderless">

                                
                                <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="psi-data-settings text-muted fs-2"></i>
                                    </div>
                                    <div className="flex-grow-1 ">
                                        <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Your storage is full</a>
                                        <small className="text-muted">Local storage is nearly full.</small>
                                    </div>
                                </div>

                                
                                <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="psi-file-edit text-blue-200 fs-2"></i>
                                    </div>
                                    <div className="flex-grow-1 ">
                                        <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Writing a New Article</a>
                                        <small className="text-muted">Wrote a news article for the John Mike</small>
                                    </div>
                                </div>

                                
                                <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="psi-speech-bubble-7 text-green-300 fs-2"></i>
                                    </div>
                                    <div className="flex-grow-1 ">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <a href="#" className="h6 mb-0 stretched-link text-decoration-none">Comment sorting</a>
                                            <span className="badge bg-info rounded ms-auto">NEW</span>
                                        </div>
                                        <small className="text-muted">You have 1,256 unsorted comments.</small>
                                    </div>
                                </div>

                                
                                <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div className="flex-shrink-0 me-3">
                                        <img className="img-xs rounded-circle" src="./assets/img/profile-photos/7.png" alt="Profile Picture" loading="lazy"/>
                                    </div>
                                    <div className="flex-grow-1 ">
                                        <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Lucy Sent you a message</a>
                                        <small className="text-muted">30 minutes ago</small>
                                    </div>
                                </div>

                                
                                <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div className="flex-shrink-0 me-3">
                                        <img className="img-xs rounded-circle" src="./assets/img/profile-photos/3.png" alt="Profile Picture" loading="lazy"/>
                                    </div>
                                    <div className="flex-grow-1 ">
                                        <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Jackson Sent you a message</a>
                                        <small className="text-muted">1 hours ago</small>
                                    </div>
                                </div>

                                <div className="text-center mb-2">
                                    <a href="#" className="btn-link">Show all Notifications</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="dropdown">

                        
                        <button className="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-label="User dropdown" aria-expanded="false">
                            <i className="psi-male"></i>
                        </button>

                        
                        <div className="dropdown-menu dropdown-menu-end w-md-450px">

                          
                            <div className="d-flex align-items-center border-bottom px-3 py-2">
                                <div className="flex-shrink-0">
                                    <img className="img-sm rounded-circle" src="./assets/img/profile-photos/1.png" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-0">Aaron Chavez</h5>
                                    <span className="text-muted fst-italic">aaron_chavez@example.com</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-7">

                                    
                                    <div className="list-group list-group-borderless mb-3">
                                        <div className="list-group-item text-center border-bottom mb-3">
                                            <p className="h1 display-1 text-green">17</p>
                                            <p className="h6 mb-0"><i className="pli-basket-coins fs-3 me-2"></i> New orders</p>
                                            <small className="text-muted">You have new orders</small>
                                        </div>
                                        <div className="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Today Earning
                                            <small className="fw-bolder">$578</small>
                                        </div>
                                        <div className="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Tax
                                            <small className="fw-bolder text-danger">- $28</small>
                                        </div>
                                        <div className="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Total Earning
                                            <span className="fw-bold text-primary">$6,578</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-5">

                                   
                                    <div className="list-group list-group-borderless h-100 py-3">
                                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                            <span><i className="pli-mail fs-5 me-2"></i> Messages</span>
                                            <span className="badge bg-danger rounded-pill">14</span>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <i className="pli-male fs-5 me-2"></i> Profile
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <i className="pli-gear fs-5 me-2"></i> Settings
                                        </a>

                                        <a href="#" className="list-group-item list-group-item-action mt-auto">
                                            <i className="pli-computer-secure fs-5 me-2"></i> Lock screen
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <i className="pli-unlock fs-5 me-2"></i> Logout
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </header>
    );
  }
}