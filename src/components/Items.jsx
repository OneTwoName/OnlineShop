import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    
    render() {
        return (
        <main>
            {this.props.items.map(el => (
                <Item onAddItem = {this.props.onAddItem} key={el.id} item = {el}  onShowItem = {this.props.onShowItem()}/>
            ))}
        </main>
        )
    }
}

export default Items