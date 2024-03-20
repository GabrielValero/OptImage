import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import {colors} from "../../config/constants";

type GalleryIconProps = {
  focused: boolean;
  size: number
  color: string;
}

const GalleryIcon = (props:SvgProps) => {
  const {color, width, height} = props

  const isFocused = ()=> color === colors.mainColor

  const iconFocused = "M37 33.222V6.778C37 4.7 35.3 3 33.222 3H6.778A3.789 3.789 0 0 0 3 6.778v26.444C3 35.3 4.7 37 6.778 37h26.444C35.3 37 37 35.3 37 33.222ZM14.144 23.74l3.967 4.779 5.856-7.537a.948.948 0 0 1 1.51.02l6.63 8.84a.945.945 0 0 1-.755 1.51H8.704a.94.94 0 0 1-.736-1.53l4.703-6.044a.932.932 0 0 1 1.473-.038Z"
  const iconUnfocused = "M33.222 6.778v26.444H6.778V6.778h26.444Zm0-3.778H6.778A3.789 3.789 0 0 0 3 6.778v26.444C3 35.3 4.7 37 6.778 37h26.444C35.3 37 37 35.3 37 33.222V6.778C37 4.7 35.3 3 33.222 3Zm-9.18 16.736-5.666 7.31-4.043-4.893-5.666 7.291h22.666l-7.29-9.708Z"
  
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${40} ${40}`}
      fill="none"
      {...props}
    >
      {isFocused() ? (<Path
        fill={color}
        d={iconFocused}
      />)
      :(<Path
        fill={color}
        d={iconUnfocused}
      />)}
    </Svg>
  )
};
export default GalleryIcon;
