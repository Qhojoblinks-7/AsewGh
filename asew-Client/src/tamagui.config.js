import { createTamagui } from 'tamagui';

const config = createTamagui({
  themes: {
    light: {
      bg: '#ffffff',
      color: '#000000',
    },
    dark: {
      bg: '#000000',
      color: '#ffffff',
    },
  },
});

export default config;
