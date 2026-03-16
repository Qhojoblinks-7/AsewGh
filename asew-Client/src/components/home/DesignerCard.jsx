import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export const DesignerCard = ({ name, specialty, image }) => (
  <Pressable style={styles.card}>
    <View style={styles.avatarContainer}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.avatarBorder} />
    </View>
    <Text style={styles.name} numberOfLines={1}>{name}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginRight: 16,
    width: 80,
  },
  avatarContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  avatarBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderColor: '#007AFF',
    borderRadius: 36,
  },
  name: {
    fontWeight: '600',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
