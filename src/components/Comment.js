import styled from "styled-components";
import { STYLE } from "../settings";
import { Text, Flex } from "./common/style";
import { fadeIn } from './common/animations';

const MessageWrapper = styled.div`
    background-color: ${STYLE.colors.lightGrey};
    padding: .7rem 1rem;
    margin: .8rem 0;
    border-radius: 5px;

    animation: 1s ${fadeIn} ease-out;
`;

const DateSend = styled(Text)`
    margin-left: 2rem;
`;

const Body = styled.div`
    margin-top: .8rem;
`;

const Comment = ({ date, comment, author  }) => {
    return (
        <MessageWrapper>
            <Flex>
                <Text
                    weight={300}
                    size={1.5}
                    lineHeight={17.58}
                >{author}</Text>  
                <DateSend
                   weight={200}
                   size={1.5}
                   lineHeight={17.58} 
                >{date}</DateSend>
            </Flex>
            <Body>
                <Text
                    size={2}
                    lineHeight={23.44}
                >{comment}</Text>  
            </Body>
        </MessageWrapper>
    )
}

export default Comment;