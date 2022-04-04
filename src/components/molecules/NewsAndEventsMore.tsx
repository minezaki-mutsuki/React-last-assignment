import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';

interface NewsAndEventsMoreProps {
    info: string;
}

const NewsAndEventsMore = (props: NewsAndEventsMoreProps) => {
    return(
        <Wrapper>
        <Information href="#" >{props.info}</Information>
        <FontAwesomeIcon icon={faBarcode} />
        </Wrapper>
    );
}

export default NewsAndEventsMore

const Wrapper = styled.div`
    text-align: right;
`
const Information = styled.a`
    color: ${color.black};
    font-size: ${size.s};
    font-family: ${family.gothic};
    text-decoration: none;
    width: auto;
    transition: ease 0.2s;
    &:hover{
        color: ${color.gray_nobel};
    }
`
