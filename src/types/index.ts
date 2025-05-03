import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface GradientCoordinate {
  x: number;
  y: number;
}

export interface ButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  gradientWrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onPress?: () => void;
  isOutlined?: boolean;
  activityIndicatorColor?: string;
  pendingActionBackgroundColor?: string;
  useGradients?: boolean;
  gradientColors?: Array<string>;
  gradientStart?: GradientCoordinate;
  gradientEnd?: GradientCoordinate;
}
