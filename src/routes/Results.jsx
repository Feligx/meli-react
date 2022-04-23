import React from 'react';
import Searchbar from '@components/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';

const API_results = 'http://localhost:3000/api/items?q=';
const API_categories = 'http://localhost:3000/api/categories/';

const Results= () => {
    
    const [items, setItems] = useState([]);
    const [parentCategories, setParentCategories] = useState({});

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const getData = async () => {
            const result = await axios(API_results+searchParams.get('search'));
            const parentCategoriesResult=  (await axios(API_categories+result.data.categories[0])).data;
            
            setItems(result.data.items);
            setParentCategories(parentCategoriesResult);
        }
        getData();
    }, []);

    const breadcrumbs = parentCategories['parents'];
    const permalinks = parentCategories['parents_permalinks'];

    return (
        <div>
            <Searchbar/>       
            { (breadcrumbs)
                ?<Breadcrumbs breadcrumbs={breadcrumbs} permalinks={permalinks}/>
                :<></>
            }
            <div className='container'>
                {items.map((item,index)=> (
                    <>
                        <Card item={ item } index={ index }/>
                        <hr/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Results