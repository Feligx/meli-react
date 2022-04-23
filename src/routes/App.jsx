import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import '../styles/global.scss';
import Searchbar from '../components/Searchbar';
import NotFound from './NotFound';
import Results from './Results';
import DetailedResult from './DetailedResult';

const App = ()=>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/meli-react' element={<Searchbar/>}/>
                <Route path='/meli-react/items' element={<Results/>}/>
                <Route path='/meli-react/items/:id' element={<DetailedResult/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;