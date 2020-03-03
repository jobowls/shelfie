import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
// import Cart from './Components/Cart/Cart'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/form' component={Form}/>
        <Route path='/form/:id' component={Form}/>
        {/* <Route path='/cart/' component={Cart}/> */}
        
    </Switch>
)