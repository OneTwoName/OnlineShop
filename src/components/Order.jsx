import React, { Component } from 'react'
import { FaWindowClose } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <div className='item_img_block'>
            <img className='item_img' src={'./img/'+this.props.item.img} alt="" />
        </div>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaWindowClose onClick={() => {this.props.onDelete(this.props.item)}} className='close-logo'/>
      </div>
    )
  }
}

export default Order