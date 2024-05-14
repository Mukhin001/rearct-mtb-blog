import st from './Menu.module.css';

const MenuOne = ({elements}) => {
    return (
        <div className={st.HeaderUnderMenu}>
            <ul>
                {elements.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
        </div>
    );
};

const menus = [
    {
        elements: [0, 1, 2, 3, 4, 5]
    },
    {
        elements: [0, 1, 2, 3, 4, 5]
    },
    {
        elements: [0, 1, 2, 3, 4, 5]
    },
    {
        elements: [0, 1, 2, 3, 4, 5]
    },

]

const Menu = () => {
    return (
        <div className={st.HeaderMenu}>
            <ul className={st.HeaderMenuUl}>
                {menus.map((item, i) => (<li> {i + 1} Menu <MenuOne elements={item.elements}/></li>))}
            </ul>
        </div>
    );
};

export default Menu;
