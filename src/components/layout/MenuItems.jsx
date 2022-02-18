import { Link } from "react-router-dom";
import { useState } from "react";


const MenuItems = ()=>{
    const [activeTab,setActiveTab] = useState('Home');

    const switchActiveTab = (text) =>{
        setActiveTab(text);
    }
    const texts = ['grocery','shop','vegetables','fruits','cereals','meats','about'];
    return(
        <ul>
            {texts.map(text =>{
                return(
                    <li key={text}>
                        <Link to={text === 'grocery' || text === 'shop' || text === 'about' ? text : `shop/${text}` } 
                        className={activeTab === text ? 'active-tab' : null }
                        onClick = {()=> switchActiveTab(text)}
                        >
                        {text === 'grocery' ? 'home' : text}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuItems;