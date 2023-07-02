import React, { Component } from 'react'

export class Item extends Component {
    
    isItemIn(){
        
    }

    render() {
        return (
            <div className='item'>
                <div onClick={() => {this.props.onShowItem()}} className='item_img_block'>
                    <img className='item_img' src={'./img/'+this.props.item.img} alt="" />
                </div>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div onClick={() => this.props.onAddItem(this.props.item)} className={`add-to-cart ${this.props.item.clas}`}>{this.props.item.clas.length === 0 ? 'В корзину' : 'Добавлен'}</div>
            </div>
        )
    }
}

export default Item