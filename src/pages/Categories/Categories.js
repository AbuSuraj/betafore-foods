import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import CategoriesHeading from './CategoriesHeading/CategoriesHeading';

const Categories = () => {
    const [categories, setCategories] = useState([]);  
    useEffect(() => {
        fetch("categories.json")
        .then (res => res.json())
        .then(data => setCategories(data))
    })
    return (
 <div>
    {
    categories.map(category => <CategoriesHeading
    key={category.id}
    category = {category}
    ></CategoriesHeading> )
    
    }
 </div>
    );
};

export default Categories;