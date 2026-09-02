import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts"
import {Fade} from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const skillData = [
    {
        iconId: "codeSvg",
        title: "HTML5",
        descKey: "html5"
    },
    {
        iconId: "css",
        title: "CSS",
        descKey: "css"
    },
    {
        iconId: "react",
        title: "React",
        descKey: "react"
    },
    {
        iconId: "typescript",
        title: "typescript",
        descKey: "typescript"
    },
    {
        iconId: "styled-comp-icons",
        title: "styled components",
        descKey: "styledComponents"
    },
    {
        iconId: "web-design",
        title: "WEB DESIgN",
        descKey: "webDesign"
    },

]

export const Skills = () => {
    const { t } = useTranslation();
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>{t('skills.mainTitle')}</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.3}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          description={t(`skills.descriptions.${s.descKey}`)}/>
                        })}
                    </Fade>
                </FlexWrapper>

            </Container>

        </S.Skills>
    );
};
