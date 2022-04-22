import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import NewsAndEventsTitle from '../molecules/NewsAndEventsTitle'
import NewsAndEventsMore from '../molecules/NewsAndEventsMore'

type NewsProps = {
    day: string;
    article: string;
};

const News = (props: NewsProps) => {
    const argsTitle = {title : 'News' , contents : 'お知らせ'}
    const argsInfo = {info : 'お知らせ一覧'}
    const news: NewsProps[] = [
        { day: '2022.4.18', article: "ブックカフェ・コワーキング系サイト向けテーマ"},
        { day: '2022.4.19', article: "3種のレイアウトから選択できるテンプレート"},
        { day: '2022.4.20', article: "利用者からのご質問をまとめた「FAQ」ページ"}
    ];
    return(
        <>
        <NewsAndEventsTitle {...argsTitle}/>
        {news.map((news :NewsProps) => {
            return(
                <ArticleWrapper>
                    <Day>{props.day}</Day>
                    <Article href="#">{props.article}</Article>
                </ArticleWrapper>
            );
        })}
        <NewsAndEventsMore {...argsInfo}/>
        </>
    )
}

export default News

const ArticleWrapper = styled.div`
    border: solid 1px ${color.gray_gainsboro};
    border-bottom: none;
    padding: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:last-child{
        border-bottom: solid 1px ${color.gray_gainsboro};
    }
`
const Day = styled.p`
    font-size:${size.xs} ;
    color: ${color.gray_nobel};
    font-family: ${family.gothic};
    margin: 0;
    margin-bottom: 8px;
    line-height: 1;
`
const Article = styled.a`
    font-size: ${size.m};
    color: ${color.black};
    font-family: ${family.gothic};
    margin: 0;
    text-decoration: none;
    transition: ease 0.2s;
    &:hover{
        color: ${color.orange_bistre};
    }
`
