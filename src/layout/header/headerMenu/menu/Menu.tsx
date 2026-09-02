import React from 'react';
import { useTranslation } from 'react-i18next';
import {S} from './../HeaderMenu_Styles'


// const items = [
//     {
//         title: 'Home',
//         href: "home"
//     },
//     {
//         title: 'Skills',
//         href: "skills"
//     },
//     {
//         title: 'Works',
//         href: "works"
//     },
//     {
//         title: 'Testimony',
//         href: "testimony"
//     },
//     {
//         title: 'Contact',
//         href: "contact"
//     },
// ]
const items = [
    { href: "home" },
    { href: "skills" },
    { href: "works" },
    { href: "testimony" },
    { href: "contact" },
]

export  const Menu: React.FC = () => {
    const { t } = useTranslation();
    return (
            <ul>
                {items.map((item, index) => {
                    const translatedTitle = t(`nav.${item.href}`);
                    return <S.MenuItem key={index}>
                        <S.NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={true}
                            spy={true}
                        >
                            {translatedTitle}
                            <S.Mask>
                                <span>{translatedTitle}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{translatedTitle}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                })}
            </ul>
    );
};

