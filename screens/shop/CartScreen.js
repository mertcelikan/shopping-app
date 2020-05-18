import React, { useState, useReducer, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator, TextInput, Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import Input from '../../components/UI/Input';
import * as cartActions from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';

const CartScreen = props => {

  const [isLoading, setIsLoading] = useState(false);

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();



  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(ordersActions.addOrder(cartItems, cartTotalAmount, adress, phoneNumber));
    setIsLoading(false);
    alert('Siparis Alindi!');
    props.navigation.navigate('Homes')
  };

  const [adress, setAdress] = useState('');
  const [phoneNumber, setNumber] = useState('');

  const handleAdress = (text) => {
    setAdress(text)
  }

  const handlePhoneNumber = (number) => {
    setNumber(number)
  }


  return (
    <View>
      <View style={styles.screen}>
        <Card style={styles.summary}>
          <Text style={styles.summaryText}>
            Toplam:{' '}
            <Text style={styles.amount}>
              {Math.round(cartTotalAmount.toFixed(2) * 100) / 100} TL
          </Text>
          </Text>
          {isLoading ? (
            <ActivityIndicator size="small" color={Colors.primary} />
          ) : (
              <Button
                color={Colors.accent}
                title="Siparişi Tamamla"
                disabled={cartItems.length === 0}
                onPress={sendOrderHandler}
              />
            )}
        </Card>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.productId}
          renderItem={itemData => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              deletable
              onRemove={() => {
                dispatch(cartActions.removeFromCart(itemData.item.productId));
              }}
            />
          )}
        />

      </View>
      <View>
      <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Telefon Numarasi"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handlePhoneNumber} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Adress"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handleAdress} />
      </View>
    </View>

  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Sepetiniz'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
});

export default CartScreen;
