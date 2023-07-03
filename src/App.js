import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Комод Моби Нарвик',
                    img: 'komod.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'dresser',
                    price: '49.99',
                    clas: ''
                },
                {
                    id: 2,
                    title: 'Кровать SV Мебель',
                    img: 'krovat.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'bed',
                    price: '59.99',
                    clas: ''
                },
                {
                    id: 3,
                    title: 'Тумба под телевизор',
                    img: 'tumba.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'pedestal',
                    price: '69.99',
                    clas: ''
                },
                {
                    id: 4,
                    title: 'Банкетка Sheffilton Альберо',
                    img: 'banketka.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'bench',
                    price: '29.99',
                    clas: ''
                },
                {
                    id: 5,
                    title: 'Шкаф распашной Клик',
                    img: 'shkaf.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'closet',
                    price: '39.99',
                    clas: ''
                },
                {
                    id: 6,
                    title: 'Банкетка Puffsib',
                    img: 'banketka2.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit.',
                    category: 'bench',
                    price: '59.99',
                    clas: ''
                },

            ],
            itemsCopy: [],
            showFullItem: false,
            fullItem: {},
        }
        this.state.itemsCopy = this.state.items
        this.addItem = this.addItem.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.filterItem = this.filterItem.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    
    render(){
        return (
            <div className="wrapper">
                <Header onDelete = {this.deleteOrder} orders = {this.state.orders}/>
                <Categories chooseCategory = {this.filterItem}/>
                <Items onShowItem={this.onShowItem} onAddItem = {this.addItem} items = {this.state.itemsCopy}/>

                {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAddItem = {this.addItem} item = {this.state.fullItem} />}
                <Footer/>
            </div>
        )
    }

    addItem(item)
    {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id) isInArray = true
        })
        if(!isInArray) {
            const items = this.state.items;
            const updatedItems = items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, clas: 'add-to-cart-active' };
                }
                return i;
            });

            this.setState({ items: updatedItems });
            // this.setState({ fullItem: updatedItems.forEach(el => {
            //     const itemsFind = updatedItems.find(it => it.id === el.id)
            //     if(itemsFind){
            //         return itemsFind
            //     }
            // }) });
            console.log(this.state.fullItem)
            this.setState({ itemsCopy: this.state.itemsCopy.map((elCopy) => {
                const itemsFind = updatedItems.find(item => item.id === elCopy.id)
                if(itemsFind){
                    return itemsFind
                }
                return elCopy
            }) });

            this.setState({
                orders: [...this.state.orders, item]
            })

        }
    }

    deleteOrder(item){
        const items = this.state.items;
        const updatedItems = items.map((i) => {
            if (i.id === item.id) {
                return { ...i, clas: '' };
            }
            return i;
        });

        this.setState({ items: updatedItems });
        this.setState({ itemsCopy: this.state.itemsCopy.map((elCopy) => {
            const itemsFind = updatedItems.find(item => item.id === elCopy.id)
            if(itemsFind){
                return itemsFind
            }
            return elCopy
        }) });

        this.setState({
            orders: this.state.orders.filter((el) => el.id !== item.id)
        })
    }
    
    filterItem(category){
        if(category === 'all') {this.setState({
            itemsCopy: this.state.items
        })} else {
            const categoryItems = []
            this.state.items.forEach((i) => {
                if (i.category === category) {
                    categoryItems.push(i)
                }
            });
            this.setState({
                itemsCopy: categoryItems 
            })
        }
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

}

export default App;
