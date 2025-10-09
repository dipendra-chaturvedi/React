import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  const categories = [
    {
      id: 1,
      name: 'Technology',
      desc: 'Latest trends in tech and software development.',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Artificial Intelligence',
      desc: 'News and tutorials about AI, ML, and automation.',
      img: 'https://images.unsplash.com/photo-1581091870627-3f9a9c9a9f30?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Web Development',
      desc: 'Frontend, backend, and full-stack resources.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Design',
      desc: 'UI/UX design principles and creative tutorials.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Gaming',
      desc: 'Game development and latest gaming news.',
      img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Explore Categories
      </ThemedText>

      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => alert(`Opening ${item.name} category`)}
        >
          <Image source={{ uri: item.img }} style={styles.image} contentFit="cover" />
          <ThemedView style={styles.textContainer}>
            <ThemedText type="subtitle">{item.name}</ThemedText>
            <ThemedText style={styles.desc}>{item.desc}</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 12,
  },
  desc: {
    marginTop: 4,
    color: '#666',
  },
});
