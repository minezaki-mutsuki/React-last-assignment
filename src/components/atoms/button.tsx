import styled from 'styled-components';
import { color } from '../../config/color';
import { size , family } from '../../config/font'
import { breakpoint } from '../../config/breakpoint'

interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return(
    <StyledButton href="#" className="button">{props.text}</StyledButton> 
  );
}

export default Button;

const StyledButton = styled.a`
  background-color: ${color.black};
  color: ${color.white};
  font-family: ${family.gothic};
  font-size: ${size.s};
  height: 45px;
  width: 180px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: ease 0.2s;
  &:hover{
    background-color: ${color.orange_bistre};
  }
  @media (min-width: ${breakpoint.md}){
      width: 150px;
      height: 55px;
    }
  @media (min-width: ${breakpoint.lg}){
      width: 200px;
  }
`;

