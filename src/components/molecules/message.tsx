import styled from 'styled-components';
import { size , family } from '../../config/font';
import { breakpoint } from '../../config/breakpoint';

interface MessageProps{
    title: string;
    contents: string;
}

const Message = (props: MessageProps) => {
    return(
        <Wrapper>
            <Title>{props.title}</Title>
            <Contents>{props.contents}</Contents>
        </Wrapper>
    );
}

export default Message

const Wrapper = styled.div`
    padding: 32px 20px;
    text-align: center;
    @media (min-width: ${breakpoint.lg}){
        padding: 52px 20px;
    }
`
const Title = styled.h2`
    font-size: ${size.l};
    font-family: ${family.mincho};
    margin-bottom: 8px;
    margin-top: 0;
    @media (min-width: ${breakpoint.lg}){
        font-size: ${size.xl};
        margin-bottom: 10px;
    }
`
const Contents = styled.p`
    font-size: ${size.s};
    margin: 0;
`
