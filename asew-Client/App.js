import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/QueryClient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DnaProvider } from './src/components/dna/DnaProvider';
import HomeScreen from './src/routes/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <DnaProvider>
          <HomeScreen />
          <StatusBar style="auto" />
        </DnaProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
