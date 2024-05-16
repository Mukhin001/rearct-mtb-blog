import st from './sidebar.module.css';
import Menu from '../../header/menu/menu.jsx';
import React from 'react';

const SideBar = () => {
    let btnSideBar = React.createRef();
    let sidebarOpen = React.createRef();

    function openSideBar() {
       
        if (btnSideBar.current.textContent === 'open') {
            sidebarOpen.current.style.display = 'block';
            btnSideBar.current.textContent = 'close';
        } else {
            sidebarOpen.current.style.display = 'none';
            btnSideBar.current.textContent = 'open';
        }
    };



    return (
       <div className={st.SideBarWrapper}>
            <button onClick={openSideBar} ref={btnSideBar}>open</button>
            <div className={st.SideBar} ref={sidebarOpen}>
                <Menu classCss={'SideBarMenu'}/>
            </div>
       </div>
    );
};

export default SideBar;