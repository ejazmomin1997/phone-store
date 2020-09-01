import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state={
        cart :[],
        products:storeProducts,
        detailProd : detailProduct,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

    }
    setProducts =() =>{
        let tempProducts= [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=>{
            return{
                products : tempProducts
            }
        })
    }
    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product
    }
    handleDetail=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return({detailProd : product})
        })
    }

    addCart =(id) =>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart=true;
        product.count=1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{products :tempProduct, cart:[...this.state.cart, product]};
        },
        ()=>{
            this.addTotals();
        })
    }

    openModel = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct:product, modalOpen:true}
        }

        ) 
    }

    closeModal =id=>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }

    increment =(id) =>{
        console.log('increment')
    }

    decrement =(id) =>{
        console.log('decrement')
    }

    removeItem =(id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(()=>{
            return{
                cart : [...tempCart],
                products : [...tempProducts],


            },
            ()=>{
                this.addTotals();
            }
        })
    }

    clearCart =() =>{
        this.setState(()=>{
            return{
                cart :[]
            }
         },
         ()=>{
             this.setProducts();
         }
         )
    }

    addTotals = () =>{
        let subTotals = 0;
        this.state.cart.map(item=>(subTotals += item.total));
        const tempTax = subTotals * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotals +tax
        this.setState(()=>{
            return{
                cartSubTotal:subTotals,
                cartTax: tax,
                cartTotal: total,
            }
                
            
        })
    }
    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail:this.handleDetail,
                addCart:this.addCart,
                openModel : this.openModel,
                closeModal : this.closeModal,
                increment : this.increment,
                decrement : this.decrement,
                removeItem : this.removeItem,
                clearCart : this.clearCart
            }}>
                {this.props.children}    
            </ProductContext.Provider>

        )
    }
}
const ProductConsumer = ProductContext.Consumer
export  {ProductProvider,ProductConsumer};
