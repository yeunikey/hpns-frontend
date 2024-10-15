
import './target.scss';

function Target() {
    return (
        <div className="target">
            <div className="container">
                <div className="target__content">
                    <Item num={1} text={<>Представление интересов студентов - <b>Ответственность</b></>}></Item>
                    <Item num={2} text={<>Поддержка и помощь студентам - <b>Оперативность</b></>}></Item>
                    <Item num={3} text={<>Укрепление взаимодействия между студентами - <b>Нетворкинг</b></>}></Item>
                    <Item num={4} text={<>Повышение академической успеваемости - <b>GPA</b></>}></Item>
                    <Item num={5} text={<>Организация и поддержка внеучебных мероприятий - <b>SSCI</b></>}></Item>
                    <Item num={6} text={<>Эффективное управление информацией - <b>Flexibility</b></>}></Item>
                    <Item num={7} text={<>Развитие конструктивного диалога с преподавателями - <b>Обратная связь</b></>}></Item>
                </div>
            </div>
        </div>
    );
}

function Item(props: { num: number, text: any }) {
    return (
        <div className="target__item">
            <div className="target__item__num">
                {props.num}
            </div>
            <div className="target__item__text">
                {props.text}
            </div>
        </div>
    )
}

export default Target;