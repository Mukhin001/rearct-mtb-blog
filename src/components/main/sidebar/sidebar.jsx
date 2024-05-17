import st from './sidebar.module.css';
import Menu from '../../header/menu/menu.jsx';
import React from 'react';

const SideBar = () => {

    return (
       <div className={st.SideBarWrapper} >
            <div className={st.SideBarText}></div>
            <div className={st.SideBar} >
                <Menu classCss={'SideBarMenu'}/>
            </div>
       </div>
    );
};

export default SideBar;