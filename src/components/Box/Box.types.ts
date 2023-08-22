import React from "react";
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
} from "styled-system";

export interface BoxProps
  extends PaddingProps,
    MarginProps,
    BackgroundColorProps,
    WidthProps,
    HeightProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    PositionProps {
  children?: React.ReactElement | React.ReactNode;
  styles?: any;
}
