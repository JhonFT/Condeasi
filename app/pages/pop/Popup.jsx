import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Popup.css';


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'hiden',
    };

    this.handleClick = this.handleClick.bind(this);
 }
 handleClick(e){
    this.state.visible == 'hiden' ? '' : 'hiden';
    this.setState(this.state);
 }


 render() {
    return (
        <section name="Popup" className="Popup" class={this.state.visible}>
          <div className="Component-Popup">
              <h2>{this.props.title}</h2>
              <p>{this.props.body}</p>
          </div>
        </section>
    );
  }
}

export default Popup;