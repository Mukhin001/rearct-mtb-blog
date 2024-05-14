import Login from "./login/login";
import Language from "./language/language";
import Search from "./search/search";
import Menu from "./menu/menu";

import st from './Header.module.css'


const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <div className={st.headerChoiceMenu}>
                <Menu/>
                <Search/>
                <Language/>
                <Login/>
            </div>
        </header>
    );
};

export default Header;
