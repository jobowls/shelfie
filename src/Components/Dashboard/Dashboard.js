import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: [],
            id: ''
        }
    }    
    componentDidMount() {
        this.getInventory()
    }    
    getInventory = () => {
        axios.get('/api/inventory').then(results => {
            console.log(results.data)
            this.setState({inventory: results.data})
        }).catch(err => console.log(err))
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(results => {
            this.props.getInventory()
        }).catch(err => console.log(err))
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(results => {
            this.setState({inventory: results.data})
        }).catch(err => console.log(err))
    }    
    editProduct = (id) => {
        this.setState({id: id})
        this.props.history.push(`/dashboard/${id}`)
    }    
    addToCart = (id) => {
        this.setState({id: id})
        this.props.cart.push(`/cart/${id}`)
    }
    render() {
        return (
            <div>
                <div id='home-feed'>
                    <h1 id='best-seller'> Best-Sellers </h1>
                </div>
                <div id='showcase'>
                    {this.state.inventory.map(element => (<Product editProduct={this.editProduct} key={element.id} product={element} deleteProduct={this.deleteProduct} addToCart={this.addToCart} />))}
                </div>
            </div>
        )
    }
}
export default Dashboard