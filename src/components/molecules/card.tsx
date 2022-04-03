import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import Button from "../atoms/button";
import Concept from '../image/concept.png'

interface CardProps {
    title: string;
    contents: string;
}

const Card = (props: CardProps) => {
    return(
        <Wrapper>
        <Title>{props.title}</Title>
        <ImgLink href="#">
            <Img className="card-img" src={Concept} alt="card-img" />
        </ImgLink>
        <CardBody>
            <Contents>{props.contents}</Contents>
            <Button></Button>
        </CardBody>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
    width: 100%;
`
const Title = styled.h3`
    font-size: ${size.l};
    color: ${color.orange_bistre};
    font-family: ${family.gothic};
    position: absolute;
    z-index: 5;
    margin: 0;
    left: 20px;
`
const ImgLink = styled.a`
    display: block;
    position: relative;
    overflow: hidden;
    &::before{
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        border-bottom: solid transparent 150px;
        border-left: solid ${color.white} 150px;
        z-index: 4;
    }
`
const Img = styled.img`
width: 100%;
@media (min-width: ${breakpoint.md}){
    transition: 0.5s ease;
      &:hover{
          transform: scale(1.2);
      }
    }
`
const CardBody = styled.div`
    background-color: ${color.white_smoke};
    margin-top: -10px;
    text-align: center;
    padding: 32px 46px;
`
const Contents = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    margin: 0;
    margin-bottom: 30px;
    line-height: 2;
`