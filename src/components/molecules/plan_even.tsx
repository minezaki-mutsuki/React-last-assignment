import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";

interface PlanEvenProps {
    title: string;
    price: number;
    unit: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
}

const PlanEven = (Props: PlanEvenProps) => {

    const price = new Intl.NumberFormat('ja-JP',{style: 'currency',currency:'JPY'}
    ).format(Props.price);

    const list = [ Props.list1 , Props.list2 , Props.list3 , Props.list4 ]

    return(
        <Wrapper>
        <Title>{Props.title}</Title>
        <PriceWrapper>
            <Price>{price}</Price>
            <Unit>{Props.unit}</Unit>
        </PriceWrapper>
        {list.map((value , index)=>{
            return(
                <List1 key={index}>{value}</List1>
            )
        })}
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
const PriceWrapper = styled.div`
    text-align: center;
    background-color: ${color.gray_desertStorm};
    padding: 23px 0;
`
const Price = styled.p`
    font-size: ${size.xxl};
    font-family: ${family.gothic};
    color: ${color.orange_bistre};
    margin: 0;
    font-weight: 600;
    &::first-letter{
        font-size: ${size.l};
    }
`
const Unit = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    margin: 0;
    margin-top: 16px;
`
const List1 = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    text-align: center;
    margin: 0;
    padding: 19px 19px;
    border: 1px solid ${color.gray_desertStorm};
    border-bottom: none;
    &:last-child{
        border-bottom: 1px solid ${color.gray_desertStorm};
    }
`
