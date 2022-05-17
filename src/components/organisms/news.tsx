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

const News = () => {
    const argsTitle = {title : 'News' , contents : 'お知らせ'}
    const argsInfo = {info : 'お知らせ一覧'}
    const news: NewsProps[] = [
        { day: '2018.6.20', article: "ブックカフェ・コワーキング系サイト向けテーマ「Switch」をリリースしました。"},
        { day: '2018.6.18', article: "3種のレイアウトから選択できるテンプレートを固定ページに実装。"},
        { day: '2018.6.12', article: "利用者からのご質問をまとめた「FAQ」ページをアップしました。"},
        { day: '2018.6.08', article: "デモ用のサンプルデータを表示する「インポート機能」でサイト構築を快適に？"},
        { day: '2018.6.02', article: "テーマのアップデート情報について。"}
    ];
    return(
        <Wrapper>
        <NewsAndEventsTitle {...argsTitle}/>
        {news.map((info :NewsProps) => {
            return(
                <div className="articleWrapper">
                    <Day>{info.day}</Day>
                    <Article href="#">{info.article}</Article>
                </div>
            );
        })}
        <NewsAndEventsMore {...argsInfo}/>
        </Wrapper>
    )
}

export default News

const Wrapper = styled.div`
    box-sizing: border-box;
    .articleWrapper{
        border-top: solid 1px ${color.gray_gainsboro};
        border-right: solid 1px ${color.gray_gainsboro};
        border-left: solid 1px ${color.gray_gainsboro};
        padding: 16px 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:nth-child(6){
            border-bottom: solid 1px ${color.gray_gainsboro};
            margin-bottom: 30px;
        }
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
