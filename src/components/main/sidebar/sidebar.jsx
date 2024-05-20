import st from './sidebar.module.css';
import Menu from '../../header/menu/menu.jsx';
import React from 'react';

const SideBar = (props) => {

    // const toggleClickTest = () => {
    //     props.onContentSelected('testSidebarClick');
    // }
    console.log(props.clickLiContent);

    return (
        <div className={st.SideBarWrapper}>
            <div className={st.SideBarText}
                 //onClick={toggleClickTest}
                 >
            </div>
            <div className={st.SideBar}>
                <Menu 
                   // onContentSelected={props.onContentSelected} 
                   
                classCss={'SideBarMenu'}/>
            </div>
        </div>
    );

   
};

export default SideBar;
