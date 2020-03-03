import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Product from '../Product/Product'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            cart: []
        }
    }
    // addToCart = (id) => {
    //     const {id} = this.props
    // }

    render() {
        return (
            <div id="home">
                <Link to="/" >
                    <button id="return-home" > Continue Shopping </button>
                </Link>
                    <button> Checkout </button>
                {this.state.cart.map(element => (<Product editProduct={this.editProduct} key={element.id} product={element} addToCart={this.addToCart} />))}
            </div>
        )
    }
}
export default Cart