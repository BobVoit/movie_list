import React from "react";
import { useHistory, withRouter } from "react-router";
import styled from "styled-components";
import { STYLE } from "../settings";
import { Container, Flex } from "./common/style";

const HeadeWrapper = styled.header`
    width: 100%;
    height: 8.4rem;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    background-color: ${STYLE.colors.dark};
    border-radius: 0 0 20px 20px;
`;

const Button = styled.button`
    background-color: transparent;
    color: ${STYLE.colors.white};
    font-weight: 500;
    font-size: 2.5rem;
    cursor: pointer;
    border: 2px solid ${STYLE.colors.white};
    border-radius: 5px;
    padding: .2em .6em;
    transition: box-shadow .3s ease;

    &:hover {
        box-shadow: 0px 1px 15px 1px rgba(255, 255, 255, 0.2);
    }
`;

const Header = (props) => {
    const history = useHistory();
    console.log(history)
    return (
        <HeadeWrapper>
            <Container>
                <Flex
                    align='center'
                    height='100%'
                >
                    <Button
                        onClick={history.goBack}
                    >Back</Button>
                </Flex>
            </Container>
        </HeadeWrapper>
    );
}

export default withRouter(Header);