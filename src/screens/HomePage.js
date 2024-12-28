import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NEWS_API_KEY } from '@env';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; // İstediğiniz sayfa boyutunu ayarlayın

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    if (loadingMore) return; // Eğer zaten yükleniyorsa yeni bir istek yapma
    setLoadingMore(true); // Yükleme başladığında loadingMore'u true yap

    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: 'technology',
            sortBy: 'publishedAt',
            apiKey: NEWS_API_KEY,
            page: page,
            pageSize: pageSize,
          },
        },
      );

      // Yeni verileri mevcut haberlere ekle veya ilk veri yükleniyorsa doğrudan ayarla
      setNews(prevNews => page === 1 ? response.data.articles : [...prevNews, ...response.data.articles]);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setLoadingMore(false); // İstek tamamlandığında loadingMore'u false yap
    }
  };


  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchNews();
  };

  const navigation = useNavigation();

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
            <Text style={styles.date}>{formattedDate || 'Belirtilmemiş'} {formattedTime || ''}</Text>
            <Text style={styles.date}>{item.author || 'Belirtilmemiş'}</Text>
          </View>
        </View>

      </TouchableOpacity>
    )
  };

  const renderFooter = () => {
    return loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderNewsItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
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