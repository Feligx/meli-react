import React from 'react';
import Searchbar from '../components/Searchbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs';
import DetailedCard from '../components/DetailedCard';

const API_details = 'https://murmuring-springs-21967.herokuapp.com/api/items/';
const API_categories = 'https://murmuring-springs-21967.herokuapp.com/api/categories/';

const DetailedResult= () => {

    const [item, setItem] = useState({});
    const [categories, setCategories] = useState([]);
    const [permalinks, setPermalinks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const result = await axios(API_details+id);
            const categoriesResult = await axios(API_categories+result.data.item.category_id);
            setItem(result.data);
            setCategories(categoriesResult.data.parents);
            setPermalinks(categoriesResult.data.parents_permalinks);
        }
        getData();
    }, []);

    return (
        <div>
            <Searchbar/>
            <Breadcrumbs breadcrumbs={categories} permalinks={permalinks}/>
            <div className='container'>
                <div className="details">
                    {
                    (Object.keys(item)!=0)
                    ?<> 
                        <DetailedCard item={ item }/>
                    </>
                    :<></>
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailedResult;