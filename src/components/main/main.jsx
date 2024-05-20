import st from './Main.module.css';

import SideBar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import {useState} from "react";

const Main = (props) => {
    
    // const [dataContent, setDataContent] = useState('test content data');

    // const onContentSelected = (content) => {
    //     setDataContent(content);
    // }
    const [dataContent, setDataContent] = useState('props li');

    const clickLiContent = (content) => {
        setDataContent(content);
    };
        console.log(props.propsStyle);
    return (
        <main className={st.wrapper}>
            <h3>Main</h3>
            <div className={st.wrapContent}>
                <SideBar 
                //onContentSelected={onContentSelected}
                   clickLiContent={clickLiContent}
                />
                <Content 
                    //content={dataContent}
                   
                />
            </div>
        </main>
    );
};

export default Main;
