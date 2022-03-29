import styled from 'styled-components';
import { color } from '../../config/color';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  text?: string;
  onClick?: () => void;
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
  height: 30px;
  width: 180px;
  padding: 0 10px;
`;

