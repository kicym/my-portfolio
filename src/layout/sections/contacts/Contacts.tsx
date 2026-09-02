import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts"
import {useTranslation} from "react-i18next";


export const Contact: React.FC = () => {
    const { t } = useTranslation();
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>{t('contacts.mainTitle')}</SectionTitle>
                <S.Form>
                    <S.Field placeholder={t('contacts.placeholders.name')}/>
                    <S.Field placeholder={t('contacts.placeholders.subject')}/>
                    <S.Field placeholder={t('contacts.placeholders.message')} as={"textarea"}/>
                    <Button type={"submit"}> {t('contacts.buttons.send')}</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
