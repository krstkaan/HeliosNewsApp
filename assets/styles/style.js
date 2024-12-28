import { text } from '@fortawesome/fontawesome-svg-core';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'rgb(243 239 239)',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: '600',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  button: {
    backgroundColor: '#4e9c2e',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    marginBottom: 20,
  },
  inputlogin: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  cardsRowIlan: {
    flexDirection: 'row',
    width: '100%',
  },
  fullImageIlan: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  cardIlan: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: 130,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  cardImageIlan: {
    width: 130,
    height: 110,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitleİlan: {
    fontSize: 12,
    textAlign: 'center',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  catbutton: {
    height: 'auto',
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    borderRadius: 10,
    padding: 15,
    textAlign: 'left',
    color: '#444444',
  },
  buttonlogin: {
    backgroundColor: '#4e9c2e',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  forwardText: {
    color: '#4e9c2e',
    fontSize: 16,
    fontWeight: '500',
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'rgb(243 239 239)',
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'rgb(243 239 239)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4e9c2e',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 20,
    color: '#555',
  },
  cardContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
    width: '100%', // Ekranın %95'i genişliğinde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  rowContainerHomeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between', // İki uçta hizalama
    alignItems: 'center', // Dikey hizalama
    marginTop: 5, // Opsiyonel
    width: '100%', // Satırın tam genişlikte olmasını sağlar
    overflow: 'hidden', // Taşmaları önler
  },
  cardDescriptionRight: {
    fontSize: 14,
    color: '#333',
    flex: 1, // Alanı eşit paylaştırır
    flexShrink: 1, // Alan daraldığında taşmayı önler
    textAlign: 'right', // Sağa yaslama
  },
  placeholderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  placeholderText: {
    color: '#aaa',
    fontStyle: 'italic',
  },
  loadingIndicator: {
    marginBottom: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e9c2e',
    marginBottom: 5,
    width: '100%',
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    flex: 1, // Alanı eşit paylaştırır
    flexShrink: 1, // Alan daraldığında taşmayı önler
    textAlign: 'left', // Sola yaslam
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
    // Arka plan rengi yok, çünkü ImageBackground kullanılacak
  },
  accountmenu: {
    padding: 10,
    borderRadius: 0,
    marginTop: 10,
    width: '100%',
    alignItems: 'left',
    borderBottomWidth: 1,
    borderColor: 'rgba(169,169,169,0.3)',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  accountmenutext: {
    fontSize: 16,
    paddingLeft: 10,
  },
  contentContainerStyle: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,
    marginTop: 16,
  },
  subLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6c757d',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
    color: '#495057',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  selectedText: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#6c757d',
  },
  button: {
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginBottom: 100
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#28a745',
  },

});

export default styles;
