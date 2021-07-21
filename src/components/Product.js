import React from 'react'

const Product = () => {
    return (
        <div>
             <div className="text-center">
          <img src="/images/peproni.png" alt="peperoni" />
          <h2 className="text-lg font-bold py-2">Havana Special</h2>
          <span className="bg-gray-200 rounded-full py-1 text-sm px-4">
            Small
          </span>
          <div className="flex justify-between mt-4 items-center">
            <span className="text-lg font-bold">$10</span>
            <button className="py-1 px-4 rounded-full bg-yellow-500 font-bold">ADD</button>
          </div>
        </div>
        </div>
    )
}

export default Product
