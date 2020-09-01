import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <section>
                    <ProductConsumer>
                        {
                            value =>{
                                const {cart} = value;
                                if(cart.length >0)
                                {
                                    return(
                                        <React.Fragment>
                                             <Title name="your" title="cart"></Title>
                                             <CartColumn />
                                             <CartList value ={value}/>
                                             <CartTotals value={value} histroy = {this.props.histroy}></CartTotals>
                                        </React.Fragment>
                                       
                                    )
                                }
                                else{
                                    return(<EmptyCart></EmptyCart>)
                                }
                            }
                        }
                    </ProductConsumer>
                    
                    
                </section>
            </div>
        )
    }
}
