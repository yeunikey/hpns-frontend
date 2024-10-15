
import IPage from '../../entity/page';
import './navigation.scss';

function Navigation(props: { pages: IPage[], currentPage: number, setCurrentPage: Function }) {
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__content flex center">
                    <div className="navigation__pages flex center">
                        {props.pages.map((page, i) => {
                            return <Item key={page.key} i={i} page={page} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} ></Item>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Item(props: { i: number, page: IPage, currentPage: number, setCurrentPage: Function }) {
    return (
        <div className={"navigation__page" + (
            props.currentPage == props.i
                ? " navigation__page__active"
                : ""
        )}
            onClick={() => {
                props.setCurrentPage(props.i)
            }}
        >
            {props.page.text}
        </div>
    )
}

export default Navigation;