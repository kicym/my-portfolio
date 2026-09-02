import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/img-1.webp'
import timerImg from './../../../assets/images/img-2.webp'
import {Container} from "../../../components/Container.ts";
import {S} from "./Works_Styles.ts"
import {AnimatePresence, motion} from "framer-motion";
import {useTranslation} from "react-i18next";



const tabsItems: Array<{ status: TabsStatusType }> = [
    { status: "all" },
    { status: "landing" },
    { status: "react" },
    { status: "spa" },
]


const worksData = [
    {
        projKey: "socialNetwork",
        src: socialImg,
        type: "spa",
        id: 1
    },
    {
        projKey: "timer",
        src: timerImg,
        type: "react",
        id: 2
    },
]

export const Works: React.FC = () => {
    const { t } = useTranslation();


    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")

    const translatedTabsItems = tabsItems.map(item => ({
        status: item.status,
        title: t(`works.tabs.${item.status}`) // Ищет ключи 'works.tabs.all', 'works.tabs.landing' и т.д.
    }));

    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>{t('works.mainTitle')}</SectionTitle>
                <TabMenu tabsItems={translatedTabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "330px", flexGrow: 1, maxWidth: "540px"}}
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work tittle={t(`works.projects.${w.projKey}.title`)}
                                          src={w.src}
                                          text={t(`works.projects.${w.projKey}.text`)}
                                          key={w.id}
                                    />
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
