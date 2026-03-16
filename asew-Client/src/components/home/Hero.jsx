import { YStack, H1, Text, XStack, Button } from 'tamagui';

export const Hero = ({ title, subtitle }) => (
  <YStack space="$2" marginTop="$6">
    <H1 color="$color" fontWeight="800">{title}</H1>
    <Text color="$color" opacity={0.7} fontSize="$5">
      {subtitle}
    </Text>
    <XStack space="$3" marginTop="$4">
      <Button themeInverse size="$4" borderRadius="$10">
        Explore Now
      </Button>
      <Button size="$4" borderRadius="$10" variant="outline">
        Become a Pro
      </Button>
    </XStack>
  </YStack>
);
