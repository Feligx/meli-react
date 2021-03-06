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
                <Route path='/' element={<Searchbar/>}/>
                <Route path='/items' element={<Results/>}/>
                <Route path='/items/:id' element={<DetailedResult/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;