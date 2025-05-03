# rn-awesome-button

A versatile and customizable button component for React Native, supporting gradients, loading states, icons, and more.

![Alt text](https://github.com/Dhia-Ben-Hamouda/rn-awesome-button/blob/main/src/assets/preview.gif)

---

## ✨ Features

- Supports solid or gradient backgrounds
- Configurable loading indicator
- Optional start and end icons
- Outlined or filled styles
- Fully styleable

---

## 📦 Installation

```bash
npm install rn-awesom-button
# or
yarn add rn-awesom-button
```

Then install the required peer dependencies:

```bash
npm install react-native-linear-gradient
```

---

## 🚀 Usage

```tsx
import Button from "rn-awesome-button";

export default function App() {
  return(
    <Button
      onPress={() => {
        console.log("pressed")
      }}
    >
      Click Me
    </Button>;
  )
}
```

---

## ⚙️ Props

| Prop                           | Type                        | Default            | Description                                                           |
| ------------------------------ | --------------------------- | ------------------ | --------------------------------------------------------------------- |
| `children`                     | `React.ReactNode`           | `undefined`        | The label inside the button.                                          |
| `onPress`                      | `() => void`                | `undefined`        | Function to call on press.                                            |
| `isLoading`                    | `boolean`                   | `false`            | Shows a loading spinner. Disables the button.                         |
| `isDisabled`                   | `boolean`                   | `false`            | Disables the button without loading indicator.                        |
| `startIcon`                    | `React.ReactNode`           | `undefined`        | Icon to show before the label.                                        |
| `endIcon`                      | `React.ReactNode`           | `undefined`        | Icon to show after the label.                                         |
| `containerStyle`               | `StyleProp<ViewStyle>`      | `undefined`        | Style override for the `TouchableOpacity` container.                  |
| `textStyle`                    | `StyleProp<TextStyle>`      | `undefined`        | Style override for the button label text.                             |
| `gradientWrapperStyle`         | `StyleProp<ViewStyle>`      | `undefined`        | Style for the `LinearGradient` wrapper when `useGradients` is `true`. |
| `activityIndicatorColor`       | `string`                    | `"#fff"`           | Color of the loading spinner.                                         |
| `pendingActionBackgroundColor` | `string`                    | `"#888"`           | Background when loading or disabled.                                  |
| `useGradients`                 | `boolean`                   | `false`            | Whether to use a gradient background.                                 |
| `gradientColors`               | `string[]`                  | `["#333", "#999"]` | Colors used in the gradient.                                          |
| `gradientStart`                | `{ x: number; y: number; }` | `{ x: 0, y: 0 }`   | Gradient start coordinate.                                            |
| `gradientEnd`                  | `{ x: number; y: number; }` | `{ x: 1, y: 0 }`   | Gradient end coordinate.                                              |
| `isOutlined`                   | `boolean`                   | `false`            | Renders button as outlined (transparent with border).                 |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
