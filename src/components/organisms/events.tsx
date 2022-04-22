import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import NewsAndEventsTitle from '../molecules/NewsAndEventsTitle'
import NewsAndEventsMore from '../molecules/NewsAndEventsMore'
import Office from '../image/article-office.png'
import Work from '../image/article-work.png'
import Book from '../image/article-book.png'

type EventsProps = {
    day: string;
    article: string;
    img: string;
};

const Events = () => {
    const argsTitle = {title : 'Events' , contents : 'イベント'}
    const argsInfo = {info : 'お知らせ一覧'}
    const news: EventsProps[] = [
        { day: '2022.4.18', article: "ブックカフェ・コワーキング系サイト向けテーマ", img : Office}, 
        { day: '2022.4.19', article: "3種のレイアウトから選択できるテンプレート", img : Work},
        { day: '2022.4.20', article: "利用者からのご質問をまとめた「FAQ」ページ", img : Book}
    ];
    return(
        <>
        <NewsAndEventsTitle {...argsTitle}/>
        {news.map((info :EventsProps) => {
            return(
                <ArticleWrapper>
                    <div className="ImgWrapper">
                    <ArticleImg className="img" src={info.img}></ArticleImg>
                    </div>
                    <div className="DayWrapper">
                    <Article href="#">{info.article}</Article>
                    <Day>{info.day}</Day>
                    </div>
                </ArticleWrapper>
            );
        })}
        <NewsAndEventsMore {...argsInfo}/>
        </>
    )
}

export default Events

const ArticleWrapper = styled.div`
    border: solid 1px ${color.gray_gainsboro};
    border-bottom: none;
    padding: 10px 20px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    @media (min-width: ${breakpoint.lg}){
    &:last-child{
        border-bottom: 1px solid ${color.gray_gainsboro};
    }
    padding: 0;
    display: flex;
    &:hover .img{
        transition: ease 0.5s;
        transform: scale(1.2);
    }
    .ImgWrapper{
        overflow: hidden;
    }
    .DayWrapper{
        margin-top: 40px;
        margin-left: 24px;
    }
    }
`
const ArticleImg = styled.img`
    display:none ;
    @media (min-width: ${breakpoint.lg}){
    display: block;
    }
`
const Day = styled.p`
    font-size:${size.xs} ;
    color: ${color.gray_nobel};
    font-family: ${family.gothic};
    margin: 0;
    line-height: 1;
    margin-top: 6px;
`
const Article = styled.a`
    font-size: ${size.m};
    color: ${color.black};
    font-family: ${family.gothic};
    margin-bottom: 8px;
    margin: 0;
    text-decoration: none;
    transition: ease 0.2s;
    &:hover{
        color: ${color.orange_bistre};
    }
`