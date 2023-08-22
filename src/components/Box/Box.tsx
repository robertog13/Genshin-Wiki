import { StyledBox } from "./Box.style";
import { BoxProps } from "./Box.types";

const Box = (props: BoxProps) => {
  const { children, ...restprops } = props;
  return <StyledBox {...restprops}>{children && children}</StyledBox>;
};

export default Box;
