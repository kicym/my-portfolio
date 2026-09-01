

import {Menu} from "../menu/Menu.tsx";
import React, {useState} from "react";
import {S} from "./../HeaderMenu_Styles.ts"



export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuSsOpen] = useState(false);
    const onBurgerBtnClick = () => {setMenuSsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuSsOpen(false)}>

                <Menu/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

