import React from 'react';
import st from './Menu.module.css';

import menudb from './menudb';


const InsideMenu = (propsDescription) => {
    //console.log(description.classCss.classCss);
    const headerUnderMenu = {left: '0'};
    const sideBarUnderMenu = {
        left: '80%',
        top: 0
    };
    const styleUnderMenu = (propsDescription.propsStyle.classCss === 'SideBarMenu') ? sideBarUnderMenu : headerUnderMenu;

    return (
        <div className={st.HeaderUnderMenu} style={styleUnderMenu}>
            {<ul>
                {propsDescription.description.map((item, i) => (
                <li key={i} 
                    onClick={(e) => 
                        //console.log(e.target.textContent)
                        propsDescription.clickLiContent(e.target.textContent)
                    }
                >{item}</li>))}
            </ul>}
        </div>
    );

};


const Menu = (propsStyle) => {
    const menuheader = {display: 'flex'};
    const menuSideBar = {display: 'block'};
    const styleUl = (propsStyle.classCss === 'SideBarMenu') ? menuSideBar : menuheader;
    
    return (
        <div className={st.HeaderMenu}>
            {<ul style={styleUl} className={st.HeaderMenuUl}>
                {menudb.map((item, i) => (
                    <li className={st.HeaderMenuLi} key={i}
                         //onClick={() => propsStyle.onContentSelected(item.name)}
                        
                        > 
                        {item.name} 
                        <InsideMenu
                        description={item.description}
                        propsStyle={propsStyle}
                        /></li>))}
            </ul>}
        </div>
    );
};

export default Menu;
