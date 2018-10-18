import React, { PureComponent } from "react";
import Svg, { G, Path, Rect, Circle } from "react-native-svg";

export default class BluetoothDisabledImage extends PureComponent<*> {
  render() {
    return (
      <Svg width={113} height={114} {...this.props}>
        <G fill="none" fillRule="evenodd">
          <Path
            fill="#EFF3FD"
            fillRule="nonzero"
            d="M73.94 11.043A22.503 22.503 0 0 0 73 17.5C73 29.926 83.074 40 95.5 40c2.43 0 4.77-.385 6.962-1.098A53.315 53.315 0 0 1 107 60.5c0 29.547-23.953 53.5-53.5 53.5S0 90.047 0 60.5 23.953 7 53.5 7a53.34 53.34 0 0 1 20.44 4.043z"
          />
          <Path
            stroke="#6490F1"
            strokeWidth={2}
            d="M38.4 30h31.2a2.4 2.4 0 0 1 2.4 2.4v57.2a2.4 2.4 0 0 1-2.4 2.4H38.4a2.4 2.4 0 0 1-2.4-2.4V32.4a2.4 2.4 0 0 1 2.4-2.4z"
          />
          <Rect
            width={27}
            height={45}
            x={40.5}
            y={35.5}
            stroke="#6490F1"
            rx={2}
          />
          <Circle cx={54} cy={86} r={2} stroke="#6490F1" />
          <Path
            stroke="#6490F1"
            d="M49 61.38l10-8.205L53.634 48v19L59 61.825l-10-8.206"
          />
          <Circle
            cx={95.5}
            cy={17.5}
            r={17.5}
            fill="#EA2E49"
            fillRule="nonzero"
          />
          <Path
            fill="#FFF"
            d="M96.471 20.498h-.896a1 1 0 0 1-.999-.944l-.472-8.499A1 1 0 0 1 95.103 10h1.84a1 1 0 0 1 .998 1.055l-.471 8.499a1 1 0 0 1-.999.944zM94 24.173c0-.601.171-1.056.514-1.364.343-.308.842-.462 1.497-.462.633 0 1.122.157 1.469.472.347.316.52.767.52 1.354 0 .566-.175 1.012-.526 1.338-.35.326-.838.489-1.463.489-.64 0-1.135-.16-1.485-.478-.35-.319-.526-.768-.526-1.349z"
          />
        </G>
      </Svg>
    );
  }
}