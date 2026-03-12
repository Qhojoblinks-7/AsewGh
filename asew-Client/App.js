import { StatusBar } from 'expo-status-bar';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { router } from './src/router';
import { queryClient } from './src/QueryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <StatusBar style="auto" />
      </RouterProvider>
    </QueryClientProvider>
  );
}
