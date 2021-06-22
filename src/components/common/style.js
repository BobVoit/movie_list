import styled, { createGlobalStyle } from "styled-components";
import { STYLE } from "../../settings";



export const BaseStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;

        font-family: ${STYLE.fonts.roboto};
        color: ${STYLE.colors.white};

        background-color: ${STYLE.colors.background};
    }
    :root {
        font-size: 10px;
    }
`;

export const Container = styled.div`
    max-width: 120rem;
    height: 100%;
    padding: 0 1rem;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

export const Flex = styled.div`
    display: flex;
    height: ${props => props.height || 'auto'};
    width: ${props => props.height || 'auto'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`;

export const Text = styled.div`
    display: ${props => props.display || 'block'};
    font-family: ${props => props.family || STYLE.fonts.roboto};
    font-weight: ${props => props.weight || 400};
    font-style: ${props => props.style || 'normal'};
    font-size: ${props => props.size ? props.size + 'rem' : '2rem'};
    color: ${props => props.color || STYLE.colors.white};
    line-height: ${props => props.lineHeight ? props.lineHeight + 'px' : 'auto'};
    text-decoration: ${props => props.decoration || 'none'};
    text-transform: ${props => props.transform || 'none'};
`;