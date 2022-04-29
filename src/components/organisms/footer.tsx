import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import Img from '../image/logo-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-solid-svg-icons';

type FooterProps = {
    nav: string
};

const Footer = () => {
    const footer: FooterProps[] = [
      { nav: 'HOME'},
      { nav: 'CONCEPT'},
      { nav: 'SERVICE'},
      { nav: 'FLLOR'},
      { nav: 'INTERVIEW'},
      { nav: 'BLOG'},
      { nav: 'ACCESS'},
      { nav: 'DOWNLOAD'}
    ];
    return(
        <Wrapper>
            <div className="infoWrapper">
                <img className="logo" src={Img} alt="ロゴ" />
                <p className="info">〒532-0011 大阪市淀川区西中島6丁目8-23テスト</p>
                <p className="info">TEL.06-1234-5678 営業時間/9:00～22:00 定休日/不定休</p>
                <div className="icons">
                    <FontAwesomeIcon className="newsInfoIcon" icon={faFacebookF} />
                    <FontAwesomeIcon className="newsInfoIcon" icon={faFacebookF} />
                    <FontAwesomeIcon className="newsInfoIcon" icon={faFacebookF} />
                    <FontAwesomeIcon className="newsInfoIcon" icon={faFacebookF} />
                </div>
            </div>
            <div className="navWrapper">
               {footer.map((info:FooterProps) => {
                   return(
                       <a href="#" className="footerNav">{info.nav}</a>
                   )
               })} 
            </div>
            <h6 className="footerBottom">Copyright©WordPressテーマ「Switch(tcd063)」 All Rights Reserved.</h6>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    .infoWrapper{
        text-align: center;
        padding: 32px;
        .logo{
            margin-bottom: 20px;
        }
        .info{
            margin: 0;
            font-size: ${size.s};
            font-family: ${family.gothic};
            margin-bottom: 20px;
        }
    }
    .navWrapper{
        border-top: solid 1px ${color.gray_nobel};
        border-bottom: solid 1px ${color.gray_nobel};
        padding: 16px;
        margin: 0;
        background-color: ${color.white_smoke};
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 8px;
        @media (min-width: ${breakpoint.md}){
            display: flex;
            padding-left: auto;
        }
        .footerNav{
            color: ${color.black};
            font-size: ${size.s};
            font-family: ${family.gothic};
            text-decoration: none;
            transition: ease 0.2s;
            @media (min-width: ${breakpoint.md}){
                padding: 0 8px;
                border-right: 1px solid ${color.black};
                &:first-child{
                    margin-left: auto;
                }
                &:last-child{
                    margin-right: auto;
                    border: none;
                }
            }
            &:hover{
                color: ${color.orange_bistre};
            }
        }
    }
    .footerBottom{
        font-size: ${size.xs};
        font-family: ${family.gothic};
        color: ${color.white};
        background-color: ${color.black};
        text-align: center;
        padding: 13px 20px;
        margin: 0;
    }     
`