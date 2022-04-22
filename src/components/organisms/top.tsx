import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import Message from '../molecules/message'
import TopImg from '../image/top-image.png'

const Top = () => {
    const topMessage = { title: 'カフェで読書&コワーキング。快適のフロアスペース空間。' , 
    contents: 'カフェテリアでコーヒーを注文し、ブックエリアでお好みの本を選び、コワーキングスペースでコーヒーと共に読書を楽しむ。学校・仕事帰りに、平日の日中に、休日にゆっくり...さまざまなライフスタイルに合わせてご利用いただける多彩なプランをご用意しております。' }
    return(
        <TopWrapper>
        <div className="topImage">
            <div className="topTitle">
            そうだ<br/>カフェに行こう。
            </div>
        </div>
        <Message {...topMessage}/>
        </TopWrapper>
    )
}

export default Top

const TopWrapper = styled.div`
    margin-bottom: 40px;
    @media (min-width: ${breakpoint.lg}){
        margin-bottom: 30px;
    }
    .topImage{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 360px;
        background-image: url(${TopImg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media (min-width: ${breakpoint.lg}){
                height: 70vw;
            }
        .topTitle{
            color: ${color.white};
            font-family: ${family.mincho};
            font-size: ${size.l};
            writing-mode: vertical-rl;
            @media (min-width: ${breakpoint.lg}){
                font-size: ${size.xl};
            }
        }
    }   
`
