import React from "react";
import CartList from "./CartList";

const Sidebar = ({isToggle}) => {
    return (
        <div className={`${isToggle ? 'show ' : ''} sidebar`}>
            <CartList/>
        </div>
    )
}


export default Sidebar;