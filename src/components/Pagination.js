import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { STYLE } from '../settings';

const Wrapper = styled.div`
    text-align: center;
`;

const PageButton = styled.button`
    padding: 0.2em 0.96em;
    font-size: 2.5rem;
    line-height: 29.3px;
    cursor: pointer;
    color: ${props => props.active ? '#606365' : STYLE.colors.blue};
    background-color: ${STYLE.colors.grey};
    border-radius: 50px;
    margin: 0 .4rem;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
        background-color: ${props => props.active || STYLE.colors.blue};
        color: ${props => props.active || STYLE.colors.grey};
    }

    &:active {
        background-color: ${props => props.active || STYLE.colors.blue};
        color: ${props => props.active || STYLE.colors.grey};
    }
`;

const Paginations = ({ page, countPages, setPage }) => {
    const [nodes, setNodes] = useState([]);

    const changePage = (e) => {
        setPage(e.target.value);
    }

    useEffect(() => {
        if (page === 1) {
            setNodes((<>
                <PageButton active value={1}>1</PageButton>
                <PageButton onClick={changePage} value={2}>2</PageButton>
            </>));
        } else if (page === countPages) {
            setNodes((<>
                <PageButton onClick={changePage} value={page - 1}>{page - 1}</PageButton>
                <PageButton active value={page}>{page}</PageButton>
            </>));
        } else {
            setNodes((<>
                <PageButton onClick={changePage} value={page - 1}>{page - 1}</PageButton>
                <PageButton active value={page}>{page}</PageButton>
                <PageButton onClick={changePage} value={page-0 + 1}>{page-0 + 1}</PageButton>
            </>));
        }
    }, [page]);  

    return (
        <Wrapper>
            {nodes}
        </Wrapper>
    )
}

export default Paginations;