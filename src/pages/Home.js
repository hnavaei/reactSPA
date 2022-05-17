import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import BestSeller from "../components/BestSeller";

const Home = () => {
    return (
        <>
            <div className={'container'}></div>
            <div className={'container-fluid'}>
                <Navbar/>
                <div className={'flex'}>
                    <BestSeller/>
                    <Products/>
                </div>
            </div>
        </>
    )
}

export default Home;