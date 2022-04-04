import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";

interface PlanOddProps {
    title: string;
    price: number;
    unit: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
}

const PlanOdd = (Props: PlanOddProps) => {
    // the Japanese yen doesn't use a minor unit

// expected output: "￥123,457"
    const price = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }
    ).format(Props.price);
    const jp = [ Props.list1 , Props.list2 , Props.list3 ]
    return(
        <Wrapper>
        <Title>{Props.title}</Title>
        <UnitWrapper>
        <PriceWrapper>
            <Price>{price}</Price>
        </PriceWrapper>
        <Unit>{Props.unit}</Unit>
        </UnitWrapper>
        {jp.map((value,index)=>{
            return(
                <List1>{jp},{index},{value}</List1>
            )
        })}
        <List2>{Props.list4}</List2>
        </Wrapper>
    )
}

export default PlanOdd

const Wrapper = styled.div`
   @media (min-width: ${breakpoint.md}){
    margin-bottom: 24px;
    } 
`
const Title = styled.h3`
    font-size: ${size.l};
    font-family: ${family.gothic};
    color: ${color.white};
    background-color: ${color.orange_zorba};
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
