import styled from "styled-components";
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface NewsAndEventsMoreProps {
    info: string;
}

const NewsAndEventsMore = (props: NewsAndEventsMoreProps) => {
    return(
        <Wrapper href="#">
        <Information>{props.info}</Information>
        <FontAwesomeIcon className="newsInfoIcon" icon={faAngleRight} />
        </Wrapper>
    );
}

export default NewsAndEventsMore

const Wrapper = styled.a`
    text-decoration: none;
    display: flex;
    color: ${color.black};
    transition: ease 0.2s;
    margin-left: auto;
    width: fit-content;
    &:hover{
        color: ${color.gray_nobel};
    }
    .newsInfoIcon{
        margin-left: 16px;
        margin-top: 2px;
    }
`
const Information = styled.p`
    font-size: ${size.s};
    font-family: ${family.gothic};
    margin: 0;
    text-decoration: none;
`
