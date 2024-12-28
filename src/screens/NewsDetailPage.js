import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const NewsDetailPage = ({ route }) => {
  const { item } = route.params;

  const date = new Date(item.publishedAt);
  const formattedDate = date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // İçerik düzenleme
  const renderContent = () => {
    if (item.content && item.content.includes('[+')) {
      const contentParts = item.content.split('[+'); // '[+' ifadesine göre böl
      return (
        <>
          <Text style={styles.description}>{contentParts[0]}</Text>
          <Text style={styles.readMoreText}>
            Devamını okumak için{' '}
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL(item.url)}
            >
              kaynağı ziyaret edin.
            </Text>
          </Text>
        </>
      );
    }
    return <Text style={styles.description}>{item.content}</Text>;
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.source}>Kaynak: {item.source.name}</Text>
          <Text style={styles.date}>
            {formattedDate} - {formattedTime}
          </Text>
        </View>
        {renderContent()}
        <TouchableOpacity style={styles.readMoreButton} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.readMoreButtonText}>Haberi Oku</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  source: {
    fontSize: 14,
    color: '#555555',
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#555555',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    marginBottom: 20,
  },
  readMoreText: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  readMoreButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  readMoreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsDetailPage;
