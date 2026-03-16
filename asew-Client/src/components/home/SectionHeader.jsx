import { XStack, H4, Button, Text } from 'tamagui';

export const SectionHeader = ({ title, onSeeAll }) => (
  <XStack justifyContent="space-between" alignItems="center" paddingHorizontal="$2">
    <H4 color="$color" fontWeight="700">{title}</H4>
    <Button variant="ghost" onPress={onSeeAll}>
      <Text color="$color" opacity={0.5} fontSize="$3">See All</Text>
    </Button>
  </XStack>
);
