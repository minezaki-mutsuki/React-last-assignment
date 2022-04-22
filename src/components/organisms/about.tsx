import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import Message from '../molecules/message'
import Room1 from '../image/room1.png'
import Room2 from '../image/room2.png'
import ReadingWithCoffee from '../image/reading-with-coffee.png'
import BookCoffee from '../image/book-coffee.png'

const About = () => {
    const aboutMessage = { title: '人と人、人と本が繋がるまったく新しい快適時間。' , 
    contents: '月額プラン以外にビジター料金でのご利用も可能です。通いやすい時間や曜日に合わせてプランをお選びください。ご登録プランは後の変更も可能ですので、資格試験等の目標がある場合など環境の変化に合わせて柔軟に対応しております。WiFiも電源も標準設備しており、時間を気にせず仕事や勉強に取り組めます。カフェでの長居が気が引けるという方にも心置きなくご利用いただけます。' }
    return(
        <AboutWrapper>
            <img className="aboutImg" src={BookCoffee} alt="本とコーヒーの画像" />
            <img className="aboutImg" src={Room1} alt="部屋の画像1" />
            <img className="aboutImg" src={ReadingWithCoffee} alt="本を読んでいる様子" />
            <img className="aboutImg" src={Room2} alt="部屋の画像2" />
        <Message {...aboutMessage}/>
        </AboutWrapper>
    )
}

export default About

const AboutWrapper = styled.div`
    margin-bottom: 40px;
    @media (min-width: ${breakpoint.lg}){
        margin-bottom: 100px;
    }
    .aboutImg{
        width: 50%;
        margin-top: -8px;
        @media (min-width: ${breakpoint.lg}){
            width: 25%;
        }
    }   
`