
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import React from "react";
import {S} from "./Footer_Styles.ts"

const socialItemsData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "linkedin",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>

            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Raman</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialIconLink>
                                <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Raman Navumau, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};
