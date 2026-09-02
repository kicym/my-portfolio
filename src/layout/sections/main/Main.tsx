import React from "react";
import photo from '../../../assets/images/foto-me_11zon.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Menu_Styles.ts"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

export const Main: React.FC = () => {
    const { t } = useTranslation();
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>{t('hero.greeting')}</S.SmallText>
                        <S.Name>{t('hero.intro')} <span>{t('hero.name')}</span></S.Name>
                        <S.MainTittle>
                            <p>{t('hero.role1')}</p>
                            <Typewriter
                                options={{
                                    strings: [t('hero.role1'), t('hero.role2')],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTittle>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>

        </S.Main>
    );
};

