import React from 'react';
import st from './Menu.module.css';

import menudb from './menudb';



const InsideMenu = (description) => {
    //console.log(description.classCss.classCss);
    const headerUnderMenu = {left: '0'};
    const sideBarUnderMenu = {left: '80%',
        top: 0
    };
    const styleUnderMenu = (description.classCss.classCss === 'SideBarMenu') ? sideBarUnderMenu : headerUnderMenu;

    //let btnLiMenu = React.createRef();
    
     function fBtnLiMenu(e) {
            let nameBtnMenu  = e.target.textContent;
        // export nameBtnMenu в блок ../../main/content.jsx.    
        };
    
    return (
        <div className={st.HeaderUnderMenu} style={styleUnderMenu}>
            {<ul>
                {description.description.map((item, i) => (<li key={i} onClick={fBtnLiMenu}>{item}</li>))}
            </ul>}
        </div>
    );
    
};


const Menu = (classCss) => {
    let classCssProps = classCss;
    const menuheader = {display: 'flex'};
    const menuSideBar = {display: 'block'};
    const styleUl = (classCss.classCss === 'SideBarMenu') ? menuSideBar : menuheader;

    return (
        <div className={st.HeaderMenu}>
            {<ul style={styleUl} className={st.HeaderMenuUl}>
                {menudb.map((item, i) => (<li className={st.HeaderMenuLi} key={i}> {item.name} <InsideMenu description={item.description} classCss={classCssProps}/></li>))}
            </ul>}
        </div>
    );
};

export default Menu;
