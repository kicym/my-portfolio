import React from "react";

import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobilerMenu/MobileMenu";
import {LanguageSwitcher} from "../../components/LanguageSwitcher";
import {S} from './Header_Styles.ts'



export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper align={"center"} gap={"20px"}>
                    {width < breakpoint ? <MobileMenu/>
                                        :  <DesktopMenu/>}
                        <LanguageSwitcher />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
