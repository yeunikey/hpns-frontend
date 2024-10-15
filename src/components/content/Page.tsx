
import './page.scss';

function Page(props: {content: any}) {
    return (
        <div className="page">
            <div className="page__content">
                {props.content}
            </div>
        </div>
    );
}

export default Page;