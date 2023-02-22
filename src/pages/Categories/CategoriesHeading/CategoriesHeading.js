import React from 'react';
import Products from '../Products/Products';

const CategoriesHeading = ({category}) => {
    const {id, category_name, products} = category;
    // console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-40 w-auto '>
            {
                products.map(product =><Products
                key={product.id}
                c_id = {id}
                product = {product}
                ></Products>)
            }
        </div>
    );
};

export default CategoriesHeading;