import React, {useState} from "react";
import {IoDiamondOutline, IoSearch} from "react-icons/io5";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {useProducts} from "../context/ProductsProvider";
import Sidebar from "./Sidebar";
import {useMyReducer} from "../context/ReducerProvider";

const Navbar = () => {
    const [searchText, setSearchText] = useState('')
    const [isToggle, setIsToggle] = useState(false)
    const {products, setProducts, fetchData} = useProducts();
    const {carts} = useMyReducer();

    const handleSearch = () => {
        if (searchText.length === 0) fetchData()
        else setProducts(products.filter(product => product.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
    }

    return (
        <header id={'header'}>
            <Sidebar isToggle={isToggle}/>
            <nav>
                <div className="nav-header">
                    <h3 className={'nav-title'}>Lotus</h3>
                    <IoDiamondOutline className={'icon icon-diamond'}/>
                </div>
                <div className="searchbar-container">
                    <div className="searchbar">
                        <input type="text" name={'search'} placeholder={'Search'} value={searchText}
                               onChange={(e) => setSearchText(e.target.value)} onKeyUp={handleSearch}/>
                        <IoSearch className={'icon icon-search'}/>
                    </div>
                    <div style={{position: 'relative'}}>
                        <HiOutlineShoppingBag className={'icon icon-bag'} onClick={() => setIsToggle(!isToggle)}/>
                        <span className={'shoppingCount'}>{carts.length}</span>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;