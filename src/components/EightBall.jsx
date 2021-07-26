import './EightBall.css';

const EightBall = (props) => {
    return (
        <>
            <div className="shadow"></div>
            <div className="epos">
                <div className={props.shake}>
                    <div className="egrad"></div>
                    <div className="ewin"></div>
                    <div className={`triangle ${props.show}`}></div>
                    <div className={`textbox ${props.show}`}>{props.message.answer}</div>
                </div>
            </div>
        </>
    )
}

export default EightBall;