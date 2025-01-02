import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import { NEWS_API_KEY } from '@env';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('technology'); // Varsayılan kategori
  const categories = [
    { id: 'technology', name: 'Teknoloji' },
    { id: 'sports', name: 'Spor' },
    { id: 'business', name: 'İş Dünyası' },
    { id: 'health', name: 'Sağlık' },
    { id: 'entertainment', name: 'Eğlence' },
  ];

  const navigation = useNavigation();

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          category: selectedCategory,
          apiKey: NEWS_API_KEY,
          country: 'us',
        },
      });
      setNews(response.data.articles || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const renderNewsItem = ({ item }) => {
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

    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsDetailPage', { item })}>
        <View style={styles.card}>
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
          <Text style={styles.title}>{item.title || 'Belirtilmemiş'}</Text>
          <Text style={styles.description}>{item.description || 'Belirtilmemiş'}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.source}>{item.source.name || 'Belirtilmemiş'}</Text>
            <Text style={styles.date}>{formattedDate} {formattedTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategories = () => (
    <View style={styles.categoryContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            selectedCategory === category.id && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderCategories()}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderNewsItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 25,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: '#007BFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  source: {
    fontSize: 12,
    color: '#888',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomePage;
