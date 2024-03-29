import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { color, size, bold, children, margin } = props;
    const styles = {
        color: color,
        size: size,
        bold: bold,
        margin: margin,
    }

    return (
        <React.Fragment>
            <P {...styles}>{children}</P>
        </React.Fragment>
    );
}

Text.defaultProps = {
    color: 'black',
    size: '14px',
    bold: false,
    children: null,
    margin: '0px',
}

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.bold ? '600' : '400'};
    margin: ${(props) => props.margin};
`;

export default Text;