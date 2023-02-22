import React from 'react';

const Products = ({product,c_id}) => {
    const {name,price,img} = product;
    return (
        <div>
            {
                c_id ===1 && <div><div className="card w-60 h-60 bg-base-100 shadow-xl">
                <figure><img className='h-36' src= {img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>Price:{price}</p>
                </div>
              </div></div>
            }
             
            
             
        </div>
    );
};

export default Products;