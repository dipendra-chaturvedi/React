import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const blogs = [
    {
      id: 1,
      title: 'React Native Basics',
      desc: 'Learn how to build your first mobile app using React Native and Expo.',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Using Expo for Fast Development',
      desc: 'Expo makes mobile app development faster and easier. Here’s how.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Styling in React Native',
      desc: 'Understand how styling works in React Native and how it differs from CSS.',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Optimizing Your App',
      desc: 'Improve performance and reduce bundle size in your React Native app.',
      img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Andrul Blog
      </ThemedText>

      {blogs.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => alert(item.title)}>
          <Image source={{ uri: item.img }} style={styles.image} contentFit="cover" />
          <ThemedView style={styles.textContainer}>
            <ThemedText type="subtitle">{item.title}</ThemedText>
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
    height: 160,
  },
  textContainer: {
    padding: 12,
  },
  desc: {
    marginTop: 4,
    color: '#666',
  },
});
