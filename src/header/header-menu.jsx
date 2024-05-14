import './header-css.css/header-menu.css';

const HeaderMenuOne = () => {
    return (
        <div className='HeaderUnderMenu'>
            <ul>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
};

const HeaderMenuTwo = () => {
    return (
        <div className='HeaderUnderMenu'>
            <ul>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
};

const HeaderMenuThree = () => {
    return (
        <div className='HeaderUnderMenu'>
            <ul>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
};

const HeaderMenuFour = () => {
    return (
        <div className='HeaderUnderMenu'>
            <ul>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
};

const HeaderMenu = () => {
    return (
        <div className="HeaderMenu">
            <ul className='HeaderMenuUl'>
                <li> 1 Menu <HeaderMenuOne /></li>
                <li> 2 Menu <HeaderMenuTwo /></li>
                <li> 3 Menu <HeaderMenuThree /></li>
                <li> 4 Menu <HeaderMenuFour /></li>
            </ul>
        </div>
    );
};

export default HeaderMenu;