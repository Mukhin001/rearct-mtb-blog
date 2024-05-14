import st from './Menu.module.css';

import menudb from './menudb';

const MenuOne = ({elements}) => {
    return (
        <div className={st.HeaderUnderMenu}>
            <ul>
                {elements.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
        </div>
    );
};

const Menu = () => {
    return (
        <div className={st.HeaderMenu}>
            <ul className={st.HeaderMenuUl}>
                {menudb.map((item, i) => (<li> {i + 1} Menu <MenuOne elements={item.elements}/></li>))}
            </ul>
        </div>
    );
};

export default Menu;
