import { styled } from "styled-components";
import {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  WidthProps,
  backgroundColor,
  border,
  color,
  flexbox,
  height,
  margin,
  padding,
  position,
  width,
} from "styled-system";

interface BoxProps
  extends PaddingProps,
    MarginProps,
    BackgroundColorProps,
    WidthProps,
    HeightProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    PositionProps {}

export const StyledBox = styled.div<BoxProps>`
  ${padding};
  ${margin};
  ${width};
  ${height};
  ${color};
  ${border};
  ${flexbox};
  ${position};
`;
