import React, { Component } from 'react';


export class SideBarMenu extends Component {
  static displayName = SideBarMenu.name;

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
        <aside className="sidebar">
        <div className="sidebar__inner scrollable-content">


            <div className="sidebar__stuck align-item-center mb-3 px-4">
                <p className="m-0 text-danger">Close the sidebar</p>
                <button type="button" className="sidebar-toggler btn-close btn-lg rounded-circle ms-auto" aria-label="Close"></button>
            </div>

            <div className="sidebar__wrap">
                <nav className="px-3">
                    <div className="nav nav-callout nav-fill flex-nowrap" id="nav-tab" role="tablist">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-chat" type="button" role="tab" aria-controls="nav-chat" aria-selected="true">
                            <i className="d-block pli-speech-bubble-5 fs-3 mb-2"></i>
                            <span>Chat</span>
                        </button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-reports" type="button" role="tab" aria-controls="nav-reports" aria-selected="false">
                            <i className="d-block pli-information fs-3 mb-2"></i>
                            <span>Reports</span>
                        </button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-settings" type="button" role="tab" aria-controls="nav-settings" aria-selected="false">
                            <i className="d-block pli-wrench fs-3 mb-2"></i>
                            <span>Settings</span>
                        </button>
                    </div>
                </nav>
            </div>

            <div className="tab-content sidebar__wrap" id="nav-tabContent">

                <div id="nav-chat" className="tab-pane fade py-4 show active" role="tabpanel" aria-labelledby="nav-chat-tab">

                    <h5 className="px-3">Family</h5>
                    <div className="list-group list-group-borderless">

                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-2">
                            <div className="flex-shrink-0 me-3">
                                <img className="img-xs rounded-circle" src="./assets/img/profile-photos/2.png" alt="Profile Picture" loading="lazy"/>
                            </div>
                            <div className="flex-grow-1 ">
                                <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Stephen Tran</a>
                                <small className="text-muted">Available</small>
                            </div>
                        </div>

                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-2">
                            <div className="flex-shrink-0 me-3">
                                <img className="img-xs rounded-circle" src="./assets/img/profile-photos/8.png" alt="Profile Picture" loading="lazy"/>
                            </div>
                            <div className="flex-grow-1 ">
                                <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Betty Murphy</a>
                                <small className="text-muted">Iddle</small>
                            </div>
                        </div>

                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-2">
                            <div className="flex-shrink-0 me-3">
                                <img className="img-xs rounded-circle" src="./assets/img/profile-photos/7.png" alt="Profile Picture" loading="lazy"/>
                            </div>
                            <div className="flex-grow-1 ">
                                <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Brittany Meyer</a>
                                <small className="text-muted">I think so!</small>
                            </div>
                        </div>

                        <div className="list-group-item list-group-item-action d-flex align-items-start mb-2">
                            <div className="flex-shrink-0 me-3">
                                <img className="img-xs rounded-circle" src="./assets/img/profile-photos/4.png" alt="Profile Picture" loading="lazy"/>
                            </div>
                            <div className="flex-grow-1 ">
                                <a href="#" className="h6 d-block mb-0 stretched-link text-decoration-none">Jack George</a>
                                <small className="text-muted">Last seen 2 hours ago</small>
                            </div>
                        </div>

                    </div>

                    <h5 className="d-flex mt-5 px-3">Friends <span className="badge bg-success ms-auto">587 +</span></h5>
                    <div className="list-group list-group-borderless">
                        <a href="#" className="list-group-item list-group-item-action">
                            <span className="d-inline-block bg-success rounded-circle p-1"></span>
                            Joey K. Greyson
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <span className="d-inline-block bg-info rounded-circle p-1"></span>
                            Andrea Branden
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <span className="d-inline-block bg-warning rounded-circle p-1"></span>
                            Johny Juan
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <span className="d-inline-block bg-secondary rounded-circle p-1"></span>
                            Susan Sun
                        </a>
                    </div>

                    <div className="px-3">
                        <h5 className="mt-5">News</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consequatur ipsum porro a repellat eaque exercitationem necessitatibus esse voluptate corporis.</p>
                        <small className="fst-italic">Last Update : Today 13:54</small>
                    </div>


                </div>

                <div id="nav-reports" className="tab-pane fade py-4" role="tabpanel" aria-labelledby="nav-reports-tab">

                    <div className="px-3">
                        <h5 className="mb-3">Billing &amp Reports</h5>
                        <p>Get <span className="badge bg-danger">$15.00 off</span> your next bill by making sure your full payment reaches us before August 5th.</p>

                        <h5 className="mt-5 mb-0">Amount Due On</h5>
                        <p>August 17, 2028</p>
                        <p className="h1">$83.09</p>

                        <div className="d-grid">
                            <button className="btn btn-success" type="button">Pay now</button>
                        </div>
                    </div>

                    <h5 className="mt-5 px-3">Additional Actions</h5>
                    <div className="list-group list-group-borderless">
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className="pli-information me-2 fs-5"></i>
                            Services Information
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className="pli-mine me-2 fs-5"></i>
                            Usage
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className="pli-credit-card-2 me-2 fs-5"></i>
                            Payment Options
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className="pli-support me-2 fs-5"></i>
                            Messages Center
                        </a>
                    </div>

                    <div className="px-3 mt-5 text-center">
                        <div className="mb-3">
                            <i className="pli-old-telephone display-4 text-primary"></i>
                        </div>
                        <p>Have a question ?</p>
                        <p className="h5 mb-0"> (415) 234-53454 </p>
                        <small><em>We are here 24/7</em></small>
                    </div>


                </div>

                <div id="nav-settings" className="tab-pane fade py-4" role="tabpanel" aria-labelledby="nav-settings-tab">

                    <h5 className="px-3">Account Settings</h5>
                    <div className="list-group list-group-borderless">

                        <div className="list-group-item mb-1">
                            <div className="d-flex justify-content-between mb-1">
                                <label className="form-check-label" htmlFor="_dm-sbPersonalStatus">Show my personal status</label>
                                <div className="form-check form-switch">
                                    <input id="_dm-sbPersonalStatus" className="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>
                        </div>

                        <div className="list-group-item mb-1">
                            <div className="d-flex justify-content-between mb-1">
                                <label className="form-check-label" htmlFor="_dm-sbOfflineContact">Show offline contact</label>
                                <div className="form-check form-switch">
                                    <input id="_dm-sbOfflineContact" className="form-check-input" type="checkbox"/>
                                </div>
                            </div>
                            <small className="text-muted">Aenean commodo ligula eget dolor. Aenean massa.</small>
                        </div>

                        <div className="list-group-item mb-1">
                            <div className="d-flex justify-content-between mb-1">
                                <label className="form-check-label" htmlFor="_dm-sbInvisibleMode">Invisible Mode</label>
                                <div className="form-check form-switch">
                                    <input id="_dm-sbInvisibleMode" className="form-check-input" type="checkbox"/>
                                </div>
                            </div>
                            <small className="text-muted">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</small>
                        </div>

                    </div>

                    <h5 className="mt-5 px-3">Public Settings</h5>
                    <div className="list-group list-group-borderless">

                        <div className="list-group-item d-flex justify-content-between mb-1">
                            <label className="form-check-label" htmlFor="_dm-sbOnlineStatus">Online Status</label>
                            <div className="form-check form-switch">
                                <input id="_dm-sbOnlineStatus" className="form-check-input" type="checkbox" />
                            </div>
                        </div>

                        <div className="list-group-item d-flex justify-content-between mb-1">
                            <label className="form-check-label" htmlFor="_dm-sbMuteNotifications">Mute Notifications</label>
                            <div className="form-check form-switch">
                                <input id="_dm-sbMuteNotifications" className="form-check-input" type="checkbox"  />
                            </div>
                        </div>

                        <div className="list-group-item d-flex justify-content-between mb-1">
                            <label className="form-check-label" htmlFor="_dm-sbMyDevicesName">Show my device name</label>
                            <div className="form-check form-switch">
                                <input id="_dm-sbMyDevicesName" className="form-check-input" type="checkbox" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </aside>
  
    );
  }
}
