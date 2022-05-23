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
type MenuProps = {
    menu: string
}

const Header = (props: HeaderProps) => {

    const nav : HeaderProps[] = [
        { nav: 'SERVICE'},
        { nav: 'FLLOR'},
        { nav: 'INTERVIEW'},
        { nav: 'BLOG'},
        { nav: 'ACCESS'},
        { nav: 'DOWNLOAD'}
    ]
    const menu : MenuProps[] = [
        { menu: 'ブログアーカイブ'},
        { menu: 'お知らせアーカイブ'},
        { menu: 'イベントアーカイブ'},
        { menu: 'インタビューアーカイブ'},
        { menu: 'FAQページ'},
        { menu: '固定ページ(デフォルト)'},
        { menu: 'CONCEPT'},
        { menu: 'SERVICE'},
        { menu: 'FLOOR'},
        { menu: 'ACCESS'}
    ]

    const [navVisbility, setNavVisibility] = useState<boolean>(false);
    const [menuVisbility, setMenuVisibility] = useState<boolean>(false);

    const menuClick =()=>{
        setMenuVisibility(!menuVisbility);
    };

    const handleClick =()=> {
        setNavVisibility(!navVisbility)
    };

    const menuList = (
        <div className='menuWrapper'>
            {menu.map((info:MenuProps) => {
                return(
                    <a href="#" className="menuList">{info.menu}</a>
                )
            })} 
        </div>
    );

    const navList = (
        <>
            <a href="#" className="navList">HOME</a>
        <Nav>
            <a href="#" className="concept">CONCEPT</a>
            <button onClick={menuClick}>
                <img src={plusIcon} alt="プラスアイコン" className="plusIcon" />
            </button>
        </Nav>
        {menuVisbility ? menuList : <></>}
        {nav.map((info:HeaderProps) => {
            return(
                <a href="#" className="navList">{info.nav}</a>
            )
        })} 
        </>
    )

    return(
        <HeaderWrapper>
            <div className="header">
                <a href="#">
                <img src={Logo} alt="ロゴ" className="logoImg" />
                </a>
                <button onClick={handleClick}>
                <img src={humbergerIcon} alt="ハンバーガーメニュー" className="MenuButton" />
                </button>
            </div>
            {navVisbility ? navList : <></>}
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

            .MenuButton{
                width: 15px;
            }
        }
    }
    
        .navList{
            color: ${color.white};
            font-family: ${family.gothic};
            font-size: ${size.s};
            background-color: ${color.black};
            text-decoration: none;
            display: block;
            padding: 15px 16px;
        }

        .menuWrapper{
            .menuList{
            color: ${color.white};
            font-family: ${family.gothic};
            font-size: ${size.s};
            background-color: ${color.black};
            text-decoration: none;
            display: block;
            padding: 15px 32px;
            }
        }
`
const Nav = styled.div`
    display: flex;
    background-color: ${color.black};
    padding: 12px 16px;
    justify-content: space-between;

    .concept{
        color: ${color.white};
        font-family: ${family.gothic};
        font-size: ${size.s};
        text-decoration: none;
        margin-top: 4px;
    }

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        appearance: none;
    }
`