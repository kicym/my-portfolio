
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "../skills/Skills_Styles.ts"
import React from "react";
import {useTranslation} from "react-i18next";

export const Testimony:React.FC = () => {
    const { t } = useTranslation();
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>{t('testimony.mainTitle')}</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote-alt-right"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`

    background-color: #694e4e;
    min-height: 50vh;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }

`
