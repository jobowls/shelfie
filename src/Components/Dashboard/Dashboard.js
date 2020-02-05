import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
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

    render() {
        return (
            <section id="home-feed">
                {this.state.inventory.map(element => (<Product editProduct={this.editProduct} key={element.id} product={element} deleteProduct={this.deleteProduct}/>))}
                {/* {this.state.inventory.length === 0 && <div> <button onClick={() => this.props.history.push('/form')}> New Product </button> </div>} */}
            </section>
        )
    }
}
export default Dashboard