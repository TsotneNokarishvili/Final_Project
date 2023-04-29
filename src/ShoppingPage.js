import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import apiRequests from 'apiRequests';
import Header from './Header';
import Footer from './Footer';

<Header></Header>
function ShoppingPage() {
  
    const [products, setProducts] = useState([]);
    const {data, isLoading} = useQuery("products", () => apiRequests('GET', "products"));
    

    useEffect(() =>{
        if(data){
            setProducts(data)
        }
    },[data])

  return (
    <>
        <h2>Dialy Suggest</h2>
        
        <div className='container'>
        { 
        products.map(item =>( 
            <div className='items_div' key={item.id}>
                <img className='img' src={item.image} />
                <span>{item.title}</span>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                <button className='add_button'>View More</button>
            </div>  
        ))
        }        
        </div>
        
    </>
  )
}

<Footer></Footer>

export default ShoppingPage