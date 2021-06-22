import styled from 'styled-components';
import preloader from '../../assets/images/preloader.svg';

const Wrapper = styled.div`

`;

const Preloader = () => {
    return (
        <Wrapper>
            <img src={preloader} alt="preloader" />
        </Wrapper>
    )
}

export const PreloaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 10rem;
`;

export default Preloader;