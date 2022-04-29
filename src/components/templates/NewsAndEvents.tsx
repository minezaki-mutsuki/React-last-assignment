import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import News from '../organisms/news'
import Events from "../organisms/events";

const NewsAndEvents =()=> {
    return(
        <Wrapper>
        <News />
        <Events />
        </Wrapper>
    )
}

export default NewsAndEvents

const Wrapper = styled.div`
    @media (min-width: ${breakpoint.lg}){
        display: grid;
        column-gap: 40px;
        grid-template-columns: repeat(2,1fr);
    } 
`