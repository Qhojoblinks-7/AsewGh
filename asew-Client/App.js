import { StatusBar } from 'expo-status-bar';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider } from '@tamagui/react';
import { router } from './src/router';
import { queryClient } from './src/QueryClient';
import config from './src/tamagui.config';

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
