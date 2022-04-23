import React, { useRef } from 'react';
import { useSearchParams, createSearchParams, useNavigate } from 'react-router-dom';
import '@styles/global.scss';
import logo from '@assets/Logo_ML.png';
import searchIcon from '@assets/ic_Search.png';

const Searchbar = () => {
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        //event.preventDefault();
        
        const formData = new FormData(form.current);
        const data = {
            search: formData.get('search')
        };
        console.log(data);

        navigate({pathname: '/meli-react/items',
        search: `${createSearchParams(data)}`});
    }

    return (
            <header>
                <nav className="header">
                    <a className="header--image" href='/meli-react'>
                        <img src={ logo }/>
                    </a>
                    <div className="header--searchbar">
                        <form className="header--form" ref={ form } onSubmit={handleSearch}>
                            <input name="search" className="header--searchbar--input" type="text" placeholder="Nunca dejes de buscar"/>
                            <button type="submit" className="header--searchbar--btn" onClick={handleSearch} >
                            <img src={ searchIcon }/>
                            </button>
                        </form>
                        
                    </div>
                </nav>
            </header>
    );
}

export default Searchbar;