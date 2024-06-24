import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./context.css";
import { contextProvider } from './ContextData';

export const Products = () => {

    const{data,increaseQuantity}=useContext(contextProvider);
  return (
    <>
    {
        data.map((val)=>{
            return (
            <div className="content bg-light col-6" key={val.id}>

            <div className="d-flex justify-content-between">
            <div>
                <h2>{val.title}</h2>
                <p>{val.category}</p>
                <p>{val.description}</p>
            </div>
            <div>
                <div className="d-flex">
                <select style={{color:"rgb(236 125 75)"}} onChange={(e)=>{
                    increaseQuantity(e,val.id);
                }}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select><p style={{marginLeft:"10px"}}>${val.price}</p>
                </div>

                <p style={{color:"rgb(236 125 75)",marginTop:"70px"}}>Remove</p>
            </div>
            </div>
    
            <hr></hr>
            
            <div>
                <div className="d-flex justify-content-between">
                <p style={{color:"rgb(194 194 203)"}}>SUBTOTAL:</p>
                <p style={{fontWeight:"bolder"}}>${val.price}</p>
                </div>
    
                <div className="d-flex justify-content-between">
                <p style={{color:"rgb(194 194 203)"}}>SHIPPING:</p>
                <p style={{fontWeight:"bolder"}}>FREE</p>
                </div>
            </div>
    
            <hr></hr>
            <div className="d-flex justify-content-between">
            <p style={{fontWeight:"bolder"}}>TOTAL:</p>
            <p style={{fontWeight:"bolder"}}>${val.price}</p>
            </div>
    
        </div>
            )
        })
    }
    </>
  )
}

export default Products;
