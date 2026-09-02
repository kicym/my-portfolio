
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import "./../../styles/slider.css"
import { useTranslation } from "react-i18next";


type SlidePropsType = {
    text: string;
    userName: string;
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>
                {props.text}
            </S.Text>
            <S.Name>
                @{props.userName}
            </S.Name>
        </S.Slide>
    )
}

const slidesData = [
    { userName: "ivan ivanow", reviewKey: "user1" },
    { userName: "piotr petrov", reviewKey: "user2" },
    { userName: "igor igorev", reviewKey: "user3" }
];


export const Slider = () => {
    const { t, i18n } = useTranslation();

    // Генерируем слайды внутри компонента, чтобы они реагировали на смену языка
    const items = slidesData.map((slide, index) => (
        <Slide
            key={index}
            userName={slide.userName}
            text={t(`testimony.reviews.${slide.reviewKey}`)}
        />
    ));

    return (
        <S.Slider>
            <AliceCarousel
                key={i18n.language}
                mouseTracking
                items={items}
            />
        </S.Slider>
    );
};