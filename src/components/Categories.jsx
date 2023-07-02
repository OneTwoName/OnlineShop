import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'closet',
                    name: 'Шкафы'
                },
                {
                    key: 'bed',
                    name: 'Кровати'
                },
                {
                    key: 'pedestal',
                    name: 'Тумбы'
                },
                {
                    key: 'bench',
                    name: 'Банкетки'
                },
                {
                    key: 'dresser',
                    name: 'Комоды'
                },
            ]
        }
    }

    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories