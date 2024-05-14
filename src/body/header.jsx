import './wrapper-css/header.css';

import HeaderMenu from '../header/header-menu.jsx';
import HeaderSearch from '../header/header-search.jsx';
import HeaderLanguage from '../header/header-language.jsx';
import HeaderLogin from '../header/header-login.jsx';

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <div className='headerChoiceMenu'>
                <HeaderMenu />
                <HeaderSearch />
                <HeaderLanguage />
                <HeaderLogin />
            </div>
        </header>
    );
};

export default Header;