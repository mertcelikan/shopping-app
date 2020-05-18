import React from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    Platform,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import HomeCategoryItem from '../components/shop/HomeCategoryItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05081112/05081112-93ef90.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05081112/05081112-93ef90.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05081112/05081112-93ef90.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-246571e29d72',
        title: 'Fourth Item',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05081112/05081112-93ef90.jpg'
      }
  ];
  
const HomeScreen = props => {
    return (
        
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://sanalmarket-com-web-assets.global.ssl.fastly.net/images/kampanya-money-card.523246e8.png' }} />    
            </View>
            <FlatList
                contentContainerStyle={{
                    alignSelf: 'center'
                }}
                numColumns={4}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <HomeCategoryItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        onSelect={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title);
                        }}
                    />

                )}
            />
            
        </View>

    );

};
HomeScreen.navigationOptions = navData => {
    return {
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        paddingTop: 10,
        alignSelf: 'center',
        marginTop: '10%'
      },
      image: {
          width: '100%',
          height: '100%'
      }
});

export default HomeScreen;

