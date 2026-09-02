
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {useTranslation} from "react-i18next";
import React from "react";

export const Slogan: React.FC = () => {
    const { t } = useTranslation();
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>{t('slogan.title')}</SectionTitle>
                    <Button>{t('slogan.button')}</Button>
                </FlexWrapper>
            </Container>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #c9a1a1;
`

