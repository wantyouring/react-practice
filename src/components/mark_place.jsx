import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {markPlaceStyle} from '../style/mark_place_style';

export default class MarkPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={markPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}