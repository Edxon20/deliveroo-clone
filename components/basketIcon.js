import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'


const BasketIcon = () => {

    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className = "absolute bottom-10 w-full z-50"> 
      <TouchableOpacity className="bg-[#00CCBB] font-bold mx-5 p-4 rounded-lg 
      flex-row items-center space-x-2">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text>View Basket</Text>
        <Text className='font-bold text-white'>{basketTotal}$</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon