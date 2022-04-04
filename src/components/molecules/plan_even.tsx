import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";

interface PlanEvenProps {
    title: string;
    mark: string;
    price: string;
    unit: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
}

const PlanEven = (Props: PlanEvenProps) => {
    return(
        <Wrapper>
        <Title>{Props.title}</Title>
        <UnitWrapper>
        <PriceWrapper>
            <Mark>{Props.mark}</Mark>
            <Price>{Props.price}</Price>
        </PriceWrapper>
        <Unit>{Props.unit}</Unit>
        </UnitWrapper>
        <List1>{Props.list1}</List1>
        <List1>{Props.list2}</List1>
        <List1>{Props.list3}</List1>
        <List2>{Props.list4}</List2>
        </Wrapper>
    )
}

export default PlanEven

const Wrapper = styled.div`
    border: 5px solid ${color.orange_bistre};
   @media (min-width: ${breakpoint.md}){
    margin-bottom: 24px;
    } 
`
const Title = styled.h3`
    font-size: ${size.l};
    font-family: ${family.gothic};
    color: ${color.white};
    background-color: ${color.orange_bistre};
    text-align: center;
    margin: 0;
    padding: 20px 0;
`
const UnitWrapper = styled.div`
    background-color: ${color.gray_desertStorm};
    padding: 23px 0;
`
const PriceWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`
const Mark = styled.p`
    font-size: ${size.l};
    font-family: ${family.gothic};
    color: ${color.orange_bistre};
    margin: 0;
    padding-top: 30px;
`
const Price = styled.p`
    font-size: ${size.xxl};
    font-family: ${family.gothic};
    color: ${color.orange_bistre};
    margin: 0;
    font-weight: 600;
`
const Unit = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    text-align: center;
    margin: 0;
    margin-top: 16px;
`
const List1 = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    text-align: center;
    margin: 0;
    padding: 20px 19px;
    border: 1px solid ${color.gray_desertStorm};
    border-bottom: none;
`
const List2 = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    text-align: center;
    margin: 0;
    padding: 20px 19px;
    border: 1px solid ${color.gray_desertStorm};
`