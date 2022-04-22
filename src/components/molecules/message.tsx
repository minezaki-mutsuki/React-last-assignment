import styled from 'styled-components';
import { size , family } from '../../config/font';
import { breakpoint } from '../../config/breakpoint';
import { color } from '../../config/color';

interface MessageProps{
    title: string;
    contents: string;
    color?: string;
    backgroundColor?: string;
}

const Message = (props: MessageProps) => {
    return(
        <Wrapper textColor= {props.color} backgroundColor={props.backgroundColor}>
            <Title>{props.title}</Title>
            <Contents>{props.contents}</Contents>
        </Wrapper>
    );
}

export default Message

interface WrapperProps{
    textColor?: string
    backgroundColor?:string
}
const Wrapper = styled.div<WrapperProps>`
    color: ${(props) => props.textColor || "black"};
    background-color: ${(props) => props.backgroundColor || color.white};
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
