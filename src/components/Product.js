import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
      <Link to= {`/products/${props.product._id}`} >
      <div>
             <div className="text-center">
          <img src={props.product.image} alt="peperoni" />
          <h2 className="text-lg font-bold py-2">{props.product.name}</h2>
          <span className="bg-gray-200 rounded-full py-1 text-sm px-4">
            {props.product.size}
          </span>
          <div className="flex justify-between mt-4 items-center">
            <span className="text-lg font-bold">{props.product.price} ₹</span>
            <button className="py-1 px-4 rounded-full bg-yellow-500 font-bold">ADD</button>
          </div>
        </div>
        </div>
      </Link>
       
    )
}

export default Product
