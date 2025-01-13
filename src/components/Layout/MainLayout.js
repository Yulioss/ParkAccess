import React, { Component } from 'react';
import { NavBarMenu } from '../Menu/NavBarMenu';
import { SideBarMenu } from '../Menu/SideBarMenu';
import { HeaderBarMenu } from '../Menu/HeaderBarMenu';

export class MainLayout extends Component {
  static displayName = MainLayout.name;

  render() {
    return (
      <div id='rootTemplate' className="root mn--max hd--expanded" >
          <section id="content" className="content">
            {this.props.children}
          </section>
        <HeaderBarMenu />
        <NavBarMenu />
        <SideBarMenu />
        
      </div>
    );
  }
}
