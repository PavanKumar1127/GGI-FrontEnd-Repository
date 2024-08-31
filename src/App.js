import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DataList from './components/DataList';
import Form from './components/Form';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<DataList />} />
                <Route path="/submit" element={<Form />} />
            </Routes>
        </Router>
    );
}

export default App;
