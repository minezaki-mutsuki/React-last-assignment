import styled from 'styled-components';
import { size , family } from '../../config/font';
import { breakpoint } from '../../config/breakpoint';

interface NewsAndEventsTitleProps{
    title: string;
    contents: string;
}

const NewsAndEventsTitle = (props: NewsAndEventsTitleProps) => {
    return(
        <Wrapper>
        <Title>{props.title}</Title>
        <Contents>{props.contents}</Contents>
        </Wrapper>
    )
}

export default NewsAndEventsTitle


const Wrapper = styled.div`
    display: flex;
`
const Title = styled.h3`
    font-size: ${size.l};
    font-family: ${family.mincho};
    margin: 0;
    margin-bottom: 32px;
    @media (min-width: ${breakpoint.lg}){
        font-size: ${size.xl};
    }
`
const Contents = styled.h4`
    font-size: ${size.m};
    font-family: ${family.gothic};
    margin: 3px 0 32px 16px;
    @media (min-width: ${breakpoint.lg}){
        margin-top: 17px;
    }
`