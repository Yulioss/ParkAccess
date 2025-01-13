import React, { Component} from 'react';

export class NavBarMenu extends Component {
    static displayName = NavBarMenu.name;

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
        <nav id="mainnav-container" className="mainnav">
         
        <div className="mainnav__inner">
  
            
            <div className="mainnav__top-content scrollable-content pb-5">
  
                
                <div className="mainnav__profile mt-3 d-flex3">
  
                    <div className="mt-2 d-mn-max"></div>
  
                    
                    <div className="mininav-toggle text-center py-2">
                        <img className="mainnav__avatar img-md rounded-circle border" src={require('../../assets/img/profile-photos/1.png')} alt="Profile Picture" />
                    </div>
  
                    <div className="mininav-content collapse d-mn-max show">
                        <div className="d-grid">
  
                        
                            <button className="d-block btn shadow-none p-2" data-bs-toggle="collapse" data-bs-target="#usernav" aria-expanded="false" aria-controls="usernav">
                                <span className="dropdown-toggle d-flex justify-content-center align-items-center">
                                    <h6 className="mb-0 me-3">Aaron Chavez</h6>
                                </span>
                                <small className="text-muted">Administrator</small>
                            </button>
  
                            
                            <div id="usernav" className="nav flex-column collapse">
                                <a href="#" className="nav-link d-flex justify-content-between align-items-center">
                                    <span><i className="pli-mail fs-5 me-2"></i><span className="ms-1">Messages</span></span>
                                    <span className="badge bg-danger rounded-pill">14</span>
                                </a>
                                <a href="#" className="nav-link">
                                    <i className="pli-male fs-5 me-2"></i><span className="ms-1">Profile</span>
                                </a>
                                <a href="#" className="nav-link">
                                    <i className="pli-gear fs-5 me-2"></i><span className="ms-1">Settings</span>
                                </a>
                                <a href="#" className="nav-link">
                                    <i className="pli-computer-secure fs-5 me-2"></i><span className="ms-1">Lock screen</span>
                                </a>
                                <a href="#" className="nav-link">
                                    <i className="pli-unlock fs-5 me-2"></i><span className="ms-1">Logout</span>
                                </a>
                            </div>
  
                        </div>
                    </div>
  
                </div>
              
  
                <div className="mainnav__categoriy py-3">
                    <h6 className="mainnav__caption mt-0 px-3 fw-bold">Link Items</h6>
                    <ul className="mainnav__menu nav flex-column">
  
                        <li className="nav-item">
                            <a href="/counter" className="nav-link mininav-toggle collapsed"><i className="pli-bar-chart fs-5 me-2"></i>
                                <span className="nav-label mininav-content ms-1">Regular</span>
                            </a>
                        </li>
  
                        <li className="nav-item">
                            <a href="#" className="nav-link mininav-toggle collapsed active"><i className="pli-home fs-5 me-2"></i>
                                <span className="nav-label mininav-content ms-1">Active state</span>
                            </a>
                        </li>
  
                        <li className="nav-item">
                            <a href="#" className="nav-link mininav-toggle collapsed"><i className="pli-brush fs-5 me-2"></i>
                                <span className="nav-label mininav-content ms-1 fw-bold">Bolder link</span>
                            </a>
                        </li>
  
                        <li className="nav-item">
                            <a href="#" className="nav-link mininav-toggle collapsed">
                                <i className="pli-roller fs-5 me-2"></i>
                                <span className="nav-label mininav-content ms-1 flex-fill">
                                    <span className="d-flex flex-row w-100">
                                        Badge <span className="badge bg-info ms-auto">NEW</span>
                                    </span>
                                </span>
                            </a>
                        </li>
  
                    </ul>
                </div>
  
                <div className="mainnav__categoriy py-3">
                    <h6 className="mainnav__caption mt-0 px-3 fw-bold">Submenus</h6>
                    <ul className="mainnav__menu nav flex-column">
  
                        <li className="nav-item has-sub">
  
                            <a href="#" className="mininav-toggle nav-link">
                                <i className="pli-data-center fs-5 me-2"></i>
                                <span className="nav-label ms-1">Submenu</span>
                            </a>
  
                            <ul className="mininav-content nav collapse">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                            </ul>
  
                        </li>
  
                        <li className="nav-item has-sub">
  
                            <a href="#" className="mininav-toggle nav-link active">
                                <i className="pli-idea fs-5 me-2"></i>
                                <span className="nav-label ms-1">Active Item</span>
                            </a>
  
                            <ul className="mininav-content nav collapse">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">Active state</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                            </ul>
  
                        </li>
  
                        <li className="nav-item has-sub">
  
                            <a href="#" className="mininav-toggle nav-link">
                                <i className="pli-pizza-slice fs-5 me-2"></i>
                                <span className="nav-label ms-1">Badge</span>
                            </a>
  
                            <ul className="mininav-content nav collapse">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Submenu Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link d-flex align-items-center">
                                        Badge
                                        <span className="badge bg-danger ms-auto">NEW</span>
                                    </a>
                                </li>
  
                            </ul>
  
                        </li>
  
                    </ul>
                </div>
  
                <div className="mainnav__categoriy py-3">
                    <h6 className="mainnav__caption mt-0 px-3 fw-bold">Multi Level</h6>
                    <ul className="mainnav__menu nav flex-column">
                        <li className="nav-item has-sub">
  
                            <a href="#" className="mininav-toggle nav-link collapsed"><i className="pli-tactic fs-5 me-2"></i>
                                <span className="nav-label ms-1">Menu Levels</span>
                            </a>
  
                            <ul className="mininav-content nav collapse">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Menu Link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Menu Link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Menu Link</a>
                                </li>
                                <li className="nav-item has-sub">
                                    <a href="#" className="mininav-toggle nav-link collapsed">Submenu</a>
                                    <ul className="mininav-content nav collapse">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-sub">
                                    <a href="#" className="mininav-toggle nav-link collapsed">Submenu</a>
                                    <ul className="mininav-content nav collapse">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Menu Link</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
  
                        </li>
                    </ul>
                </div>
  
              
                <div className="mainnav__profile">
  
                    
                    <div className="mininav-toggle text-center py-2 d-mn-min">
                        <i className="pli-monitor-2"></i>
                    </div>
  
                    <div className="d-mn-max mt-5"></div>
  
               
                    <div className="mininav-content collapse d-mn-max">
                        <h6 className="mainnav__caption px-3 fw-bold">Server Status</h6>
                        <ul className="list-group list-group-borderless">
                            <li className="list-group-item text-reset">
                                <div className="d-flex justify-content-between align-items-start">
                                    <p className="mb-2 me-auto">CPU Usage</p>
                                    <span className="badge bg-info rounded">35%</span>
                                </div>
                                <div className="progress progress-md">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '35%'}} aria-label="CPU Progress" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="list-group-item text-reset">
                                <div className="d-flex justify-content-between align-items-start">
                                    <p className="mb-2 me-auto">Bandwidth</p>
                                    <span className="badge bg-warning rounded">73%</span>
                                </div>
                                <div className="progress progress-md">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '73%'}} aria-label="Bandwidth Progress" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                        </ul>
                        <div className="d-grid px-3 mt-3">
                            <a href="#" className="btn btn-sm btn-success">View Details</a>
                        </div>
                    </div>
                </div>
                
  
            </div>
            
            <div className="mainnav__bottom-content border-top pb-2">
                <ul id="mainnav" className="mainnav__menu nav flex-column">
                    <li className="nav-item has-sub">
                        <a href="#" className="nav-link mininav-toggle collapsed" aria-expanded="false">
                            <i className="pli-unlock fs-5 me-2"></i>
                            <span className="nav-label ms-1">Logout</span>
                        </a>
                        <ul className="mininav-content nav flex-column collapse">
                            <li className="nav-item">
                                <a href="#" className="nav-link">This device only</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">All Devices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Lock screen</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}
