import st from './Main.module.css';

import SideBar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import {useState} from "react";

const Main = () => {

    const [dataContent, setDataContent] = useState('test content data');

    const onContentSelected = (content) => {
        setDataContent(content);
    }

    return (
        <main className={st.wrapper}>
            <h3>Main</h3>
            <div className={st.wrapContent}>
                <SideBar onContentSelected={onContentSelected}/>
                <Content content={dataContent}/>
            </div>
        </main>
    );
};

export default Main;
