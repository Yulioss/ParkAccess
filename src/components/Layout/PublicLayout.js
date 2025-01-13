import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class PublicLayout extends Component {
  static displayName = PublicLayout.name;

  render() {
    return (
        <div id="rootTemplate" className="root front-container">
            <section id="content" className="content">
                <div className="content__boxed w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="content__wrap">
                        <Container>
                        {this.props.children}
                        </Container>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}