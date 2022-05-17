import {useState} from 'react'
import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from "../../config/breakpoint";
import Logo from '../image/logo.png'
import humbergerIcon from '../image/humberger-icon.svg'
import plusIcon from '../image/plus-icon.svg'

type HeaderProps = {
    nav: string
}

const Header = (props: HeaderProps) => {

    const nav : HeaderProps[] = [
        {nav: 'HOME'},
        { nav: 'CONCEPT'},
        { nav: 'SERVICE'},
        { nav: 'FLLOR'},
        { nav: 'INTERVIEW'},
        { nav: 'BLOG'},
        { nav: 'ACCESS'},
        { nav: 'DOWNLOAD'}
    ]

    const [navs , setNavs] = useState(null);
    const [navClickNumber , setNavClickNumber] = useState<number>(0);

    const navList = (
    nav.map((info:HeaderProps) => (
        <Nav>
        <a href="#" className="navList">{info.nav}</a>
        <img src={plusIcon} alt="プラスアイコン" className="plusIcon" />
        </Nav>
    ))
    )

    const handleClick =()=> {
        if (navClickNumber % 2 == 0){
            setNavs(navList)
        } else {
            setNavs(null)
        }
        setNavClickNumber(navClickNumber + 1);
    };

    return(
        <HeaderWrapper>
            <div className="header">
                <a href="#">
                <img src={Logo} alt="ロゴ" className="logoImg" />
                </a>
                <button onClick={handleClick}>
                <img src={humbergerIcon} alt="ハンバーガーメニュー" className="Menu" />
                </button>
            </div>
            {navs}
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
    .header{
        background-color: ${color.black};
        display: flex;
        justify-content: space-between;
        padding: 17px 16px;

            .logoImg{
                width: 120px;
                height: 20px;
            }

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            padding: 0;
            appearance: none;

            .Menu{
                width: 15px;
            
            }
        }
    }   
`
const Nav = styled.div`
    display: flex;
    background-color: ${color.black};
    padding: 12px 16px;
    justify-content: space-between;

    .navList{
        color: ${color.white};
        font-family: ${family.gothic};
        font-size: ${size.s};
        text-decoration: none;
        margin-top: 4px;
    }

    .plusIcon{
        display: none;
        &:nth-child(2){
            display: block;
        }
    }
`