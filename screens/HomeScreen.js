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
    Image,
    Dimensions,
} from 'react-native';
import HomeCategoryItem from '../components/HomeCategoryItem';
import { SliderBox } from "react-native-image-slider-box";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const DATA = [
    {
        category: 'Su',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Su',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062205/erikli-su-10-l-2db166.jpg'
    },
    {
        category: 'Sebze',
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Meyve & Sebze',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28080000/domates-kg-c7462d.jpg'
    },
    {
        category: 'Fırından',
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Fırından',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120101/05120101-b0b92d.jpg'
    },
    {
        category: 'Atıştırmalık',
        id: '58694a0f-3da1-471f-bd96-246571e29d72',
        title: 'Atıştırmalık',
        imageUrl: 'https://www.sekercity.com/UserFiles/Fotograflar/org/4862-2446buyuk1jpg-2446buyuk1.jpg'
    },

   
  
];
const images = [
            "https://sanalmarket-com-web-assets.global.ssl.fastly.net/images/kampanya-money-card.523246e8.png",
            "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/list/campaign_list/20000000493170/745_kampanyalar_sayfasi_kupon-d86414.jpg",
            "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/list/campaign_list/20000000509789/746_kampanyalar_sayfasi_calve-9431d6.jpg"
        ]
const HomeScreen = props => {

    const selectedCategory = (category) => {
        props.navigation.navigate('ProductsOverview', {filtre: category});
    };
 
    return (
        <View>
            <View style={styles.imageContainer}>
                <SliderBox
                    images={images}
                    autoplay
                    circleLoop
                    sliderBoxHeight={200}
                //onCurrentImagePressed={props.navigation.navigate('Kampanyalar')}     
                />
            </View >
            <View>
                <FlatList
                    contentContainerStyle={{
                        alignSelf: 'center',
                        paddingTop: '1.5%'
                    }}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={itemData => (
                        <HomeCategoryItem
                            image={itemData.item.imageUrl}
                            title={itemData.item.title}
                            onSelect={() => {
                                selectedCategory(itemData.item.category);
                            }}
                        />

                    )}
                />
            </View>
        </View>
    );
};
HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'KALE Market',
    };
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '35%',
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: '3%'
    },
    categoryContainer: {
        paddingTop: 100
    }
});

export default HomeScreen;

