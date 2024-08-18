import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';

interface Props{
  products:Product;
  handleChangeStockProduct :(idProduct:number, cantidad:number)=>void;
}


export const CardProduct = ({products,handleChangeStockProduct}:Props) => {
  
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <View >
      <View style={styles.contentCard}>

          <Image source={{
            uri: products.pathImage
          }} 
          style={styles.imageCard}/>
          
          <View>
            <Text style={styles.titleCard}>{products.name}</Text>
            <Text style={{color:"white"}}>Precio: ${products.price.toFixed(2)}</Text>
          </View>

          <View style={styles.iconCard}>
            <Icon name="add-shopping-cart" size={30} color={"red"} onPress={()=> setShowModal(!showModal)}/>
          </View>
      </View>
    <ModalProduct isVisible={showModal} 
    setShowModal={()=> setShowModal(!showModal)}
    products={products}
    handleChangeStockProduct={handleChangeStockProduct}/>
    </View>
  )

}
