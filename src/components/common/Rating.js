import styled from "styled-components";
import starBlue from '../../assets/images/star-blue.svg';
import starGrey from '../../assets/images/star-grey.svg';
import { Text, Flex } from './style';

const RatingWrapper = styled(Flex)`
    cursor: pointer;
`;

const Stars = styled.div`
    margin-right: .6rem;
`;

const Star = styled.img`
    margin: 0 .3rem;
`;

const Rating = ({ value }) => {
    return (
        <RatingWrapper
            align='center'
        >
            <Stars>
                <Star src={value >= 2 ? starBlue : starGrey } />
                <Star src={value >= 4 ? starBlue : starGrey } />
                <Star src={value >= 6 ? starBlue : starGrey } />
                <Star src={value >= 8 ? starBlue : starGrey } />
                <Star src={value >= 9.5 ? starBlue : starGrey } />
            </Stars>
            <Text
                weight={200}
                size={2.5}
                lineHeigth={29.3}
            >{value}</Text>
        </RatingWrapper>
    )
}

export default Rating;