import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import {selectRestaurant} from '../features/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      const groupedItems = items.reduce((results,item) => {
        (results[items.id] = results[items.id] || []).push(item);
        return results;
      },{});
      setGroupedItemsInBasket(groupedItems)
    },[items])
    
    
    
  return (
    <SafeAreaView className="bg-slate-800 ">
      <View>
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen