import React from "react";


function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    return (
        <section>
            <section>
                <button
                    className={"plus btn-success"}
                    onClick={increaseSession}>
                    {"+"}
                </button>
                <br />
                <button
                    className={"moins btn-success"}
                    onClick={decreaseSession}>
                    {"-"}
                </button>
            </section>
        </section>
    );
}
export default SessionLength;