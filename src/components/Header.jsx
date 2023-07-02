import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cartOpen: false
        }
    }
    
    
    render(){
        return (
            <header>
                <div>
                    <span className='logo'>House Staff</span>
                    <ul className="nav">
                        <li>О Нас</li>
                        <li>Контакты</li>
                        <li>Кабинет</li>
                    </ul>
                    <FaShoppingCart onClick={() => {
                        this.setState({
                            cartOpen: !this.state.cartOpen
                        })
                    }} className={`shop-cart-button ${this.state.cartOpen && 'active'}`}/>
                    {this.state.cartOpen && (
                        <div className='shop-cart'>
                            {this.props.orders.length > 0 ? this.props.orders.map(el => (
                                <Order key={el.id} item = {el} onDelete = {this.props.onDelete} />
                            )) : 'Ваша корзина пуста :('}
                            <p className='shop-cart-sum'>Сумма: {Number.parseFloat(this.props.orders.reduce((total, order) => total + Number.parseFloat(order.price), 0).toFixed(2))}$</p>
                        </div>
                    )}
                </div>
                <div className="presentation"></div>
            </header>
        )
    }
}

export default Header