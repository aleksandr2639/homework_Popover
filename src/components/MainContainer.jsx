import { useState } from "react";
import Container from "./Container";

const MainComponent = () => {

    const [state, setState] = useState({
        collapsedLabel: false,
        expandedLabel: true
    });

    const onClick = (id) => {
        id === "collapsedLabel" ? setState({...state, collapsedLabel: !state.collapsedLabel}) : setState({...state, expandedLabel: !state.expandedLabel})
    }

    return (
        <>
            <Container onClick={onClick} collapsedLabel={state.collapsedLabel} expandedLabel={state.expandedLabel} />
        </>
    );
}

export default MainComponent;
