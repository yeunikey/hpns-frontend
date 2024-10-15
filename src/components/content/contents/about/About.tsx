
import './about.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="about__content">
                    <Slider></Slider>
                    <Info></Info>
                </div>
            </div>
        </div>
    );
}

function Info() {
    return (
        <div className="about__info">
            <h1>Привет! Меня зовут Данияр aka hpns47. </h1>
            <br />
            Я староста <b>SE-2408</b> и очень люблю <b>YUQI</b>.
            <br />
            <br />
            Родом с Караганды, окончил <b>ШЦДО №5</b>, в которой являлся президентом.
            <br />
            <br />
            В свободное время я решаю задачи Сындара и пишу бэкенд на питоне.
        </div>
    )
}

function Slider() {
    return (
        <Swiper
            modules={[Autoplay]}
            className={"about__swiper"}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500
            }}
        >
            <SwiperSlide><Image imageUrl='https://i.imgur.com/AaJVvfQ.jpeg'></Image></SwiperSlide>
            <SwiperSlide><Image imageUrl='https://i.imgur.com/1iHJwIl.jpeg'></Image></SwiperSlide>
        </Swiper>
    );
}

function Image(props: { imageUrl: string }) {
    return (
        <img className="about__swiper__image" src={props.imageUrl} />
    )
}

export default About;