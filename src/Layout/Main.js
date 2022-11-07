import React from 'react';
import { Outlet } from 'react-router-dom';
import TopOfNav from '../OthersComponents/TopOfNav';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <TopOfNav></TopOfNav>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;