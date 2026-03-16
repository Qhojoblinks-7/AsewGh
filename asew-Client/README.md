# ASEW Mobile App Setup Guide

This is a step-by-step guide to setting up the ASEW mobile application using Expo with JavaScript.

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app (SDK 54) installed on your mobile device

## Quick Start

```bash
cd asew-Client
npx expo start
```

Scan the QR code with your Expo Go app to run the project.

---

## Step-by-Step Setup

### Step 1: Create a New Expo Project

```bash
# Create a new Expo project using the blank JavaScript template
npx create-expo-app@latest asew-Client --template blank
```

### Step 2: Install Core Dependencies

```bash
cd asew-Client
npm install react-dom@19.1.0
```

### Step 3: Install TanStack Router & Query

```bash
npm install @tanstack/react-router @tanstack/react-query
```

### Step 4: Install Tamagui & Reanimated

```bash
npm install @tamagui/core react-native-reanimated@~4.1.1
```

---

## Project Structure

```
asew-Client/
├── App.js                    # Main app entry point
├── babel.config.js           # Babel configuration with Reanimated
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── index.js                  # React Native entry
├── src/
│   ├── router.js             # TanStack Router configuration
│   ├── QueryClient.js        # TanStack Query client
│   ├── tamagui.config.js     # Tamagui theme configuration
│   └── routes/
│       └── index.jsx          # Home route component
└── assets/                   # App assets (images, fonts)
```

---

## Configuration Files

### package.json Dependencies

```json
{
  "dependencies": {
    "expo": "~54.0.0",
    "expo-status-bar": "~3.0.9",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "@tanstack/react-router": "latest",
    "@tanstack/react-query": "latest",
    "@tamagui/core": "latest",
    "react-native-reanimated": "~4.1.1"
  }
}
```

### babel.config.js

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@tamagui/babel-plugin", { components: ["@tamagui/core"] }],
      "react-native-reanimated/plugin",
    ],
  };
};
```

### src/tamagui.config.js (Theme Configuration)

```javascript
import { createTamagui } from "@tamagui/core";

const config = createTamagui({
  themes: {
    light: {
      bg: "#ffffff",
      bg2: "#f5f5f5",
      color: "#000000",
    },
    dark: {
      bg: "#000000",
      bg2: "#1a1a1a",
      color: "#ffffff",
    },
  },
  fonts: {
    body: { size: 16, weight: "400" },
    heading: { size: 32, weight: "700" },
  },
});

export default config;
```

### src/router.js (Routing Setup)

```javascript
import { createRouter } from "@tanstack/react-router";

const indexRoute = {
  path: "/",
  component: () => require("./routes/index").default,
};

const router = createRouter({
  routeTree: [indexRoute],
  defaultPreload: "intent",
});

export { router };
```

### src/QueryClient.js (Data Fetching)

```javascript
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});
```

### App.js (Main Component)

```javascript
import { StatusBar } from "expo-status-bar";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { TamaguiProvider } from "@tamagui/react";
import { router } from "./src/router";
import { queryClient } from "./src/QueryClient";
import config from "./src/tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <StatusBar style="auto" />
        </RouterProvider>
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
```

---

## Running the App

### Development

```bash
# Start the development server
npx expo start

# Run on Android
npx expo start --android

# Run on iOS
npx expo start --ios

# Run on Web
npx expo start --web
```

### Build for Production

```bash
# Generate native Android project
npx expo prebuild --platform android

# Build APK
cd android && ./gradlew assembleRelease
```

---

## Tech Stack

| Technology      | Version | Purpose          |
| --------------- | ------- | ---------------- |
| Expo SDK        | 54      | Framework        |
| React           | 19.1.0  | UI Library       |
| React Native    | 0.81.5  | Mobile Framework |
| TanStack Router | latest  | Routing          |
| TanStack Query  | latest  | Data Fetching    |
| Tamagui         | latest  | UI Components    |
| Reanimated      | 4.1.1   | Animations       |

---

## Troubleshooting

### Metro Bundler Issues

```bash
# Clear Metro cache
npx expo start --clear
```

### Missing Dependencies

```bash
# Reinstall all dependencies
rm -rf node_modules package-lock.json
npm install
```

### Expo Go Compatibility

Ensure your Expo Go app matches the SDK version in package.json (SDK 54).

---

## License

MIT
