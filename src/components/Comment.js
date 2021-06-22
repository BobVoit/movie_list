import styled from "styled-components";
import { STYLE } from "../settings";
import { Text, Flex } from "./common/style";

const MessageWrapper = styled.div`
    background-color: ${STYLE.colors.lightGrey};
    padding: .7rem 1rem;
`;

const DateSend = styled(Text)`
    margin-left: 2rem;
`;

const Body = styled.div`
    margin-top: .8rem;
`;

const Comment = ({ date, message }) => {
    return (
        <MessageWrapper>
            <Flex>
                <Text
                    weight={300}
                    size={1.5}
                    lineHeight={17.58}
                >You</Text>  
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
                >{message}</Text>  
            </Body>
        </MessageWrapper>
    )
}

export default Comment;