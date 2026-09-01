import {Link} from "../../../../components/Link.ts";
import {Button} from "../../../../components/Button.ts";
import React from "react";
import {S} from "../Works_Styles.ts"

type WorkPropsType = {
    tittle: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Tittle>{props.tittle}</S.Tittle>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Description>

        </S.Work>
    );
};
