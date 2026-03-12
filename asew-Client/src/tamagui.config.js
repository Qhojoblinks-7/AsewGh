import { createTamagui } from '@tamagui/core';

const config = createTamagui({
  themes: {
    light: {
      bg: '#ffffff',
      bg2: '#f5f5f5',
      color: '#000000',
      color2: '#666666',
    },
    dark: {
      bg: '#000000',
      bg2: '#1a1a1a',
      color: '#ffffff',
      color2: '#999999',
    },
  },
  fonts: {
    body: {
      size: 16,
      weight: '400',
    },
    heading: {
      size: 32,
      weight: '700',
    },
  },
});

export default config;
