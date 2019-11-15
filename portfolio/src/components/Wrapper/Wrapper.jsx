import React, { Component } from 'react'
import './Wrapper.styles.scss'
export default class Wrapper extends Component {
  render() {
    return (
      <div className="WrapperWrapper">
        {this.props.children}
      </div>
    )
  }
}
