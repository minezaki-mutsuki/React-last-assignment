import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';

interface CardProps {
    title: string;
    contents: string;
}

const Card = (props: CardProps) => {
    return(
        <Wrapper>
        <Title>{props.title}</Title>
        <ImgLink href="">
            <Img src={Concept} alt="card-img" />
        </ImgLink>
        <CardBody>
            <Contents>{props.contents}</Contents>
            <Button></Button>
        </CardBody>
        </Wrapper>
    )
}

export default Card
import Button from "../atoms/button";
import Concept from '../image/concept.png'

const Wrapper = styled.div`
    
`
const Title = styled.h3`
    
`
const ImgLink = styled.a`
    
`
const Img = styled.img`
    
`
const CardBody = styled.div`
    
`
const Contents = styled.p`
    
`
