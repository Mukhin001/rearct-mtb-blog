import st from './Main.module.css';

import SideBar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';

const Main = () => {
    return (
        <main className={st.wrapper}>
            <h3>Main</h3>
            <div className={st.wrapContent}>
                <SideBar />
                <Content />
            </div>
        </main>
    );
};

export default Main;
