import React, { useState } from 'react'
import { Image, Modal, Text, useWindowDimensions, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../HomeScreen';
import Icon from "react-native-vector-icons/MaterialIcons"
import { styles } from '../../../theme/appTheme';

interface Props{
    products:Product;
    isVisible:boolean;
    setShowModal:()=>void;
    handleChangeStockProduct :(idProduct:number, cantidad:number)=>void;
}

export const ModalProduct = ({isVisible, setShowModal,products,handleChangeStockProduct}:Props) => {
  
    const {width} = useWindowDimensions();

    const [cantidad, setCantidad] = useState<number>(1)

    const handleChangeCantidad=(value:number)=>{
        setCantidad(cantidad+value)
    }

    const handleAddProduct=()=>{
        handleChangeStockProduct(products.id, cantidad)
        setShowModal();
    }

    return (
    <Modal visible={isVisible}
        animationType='fade'
        transparent={true}>
        <View style={styles.contentPrincipal}>
            <View style={{
                ...styles.modal,
                width: width*0.5}}>
                <View style={styles.headerModal}>
                    <Text style={styles.titleModal}>{products.name}  -  ${products.price.toFixed(2)}</Text>
                    
                    <View style={styles.iconCard}>
                        <Icon name='cancel' size={20} color={"blue"} onPress={setShowModal}></Icon>
                    </View>
                </View>
                <View style={styles.contentBodyModal}>
                        <Image
                        source={{uri: products.pathImage}}
                        style={styles.imageModal}/>
                </View>

                        {
                            (products.stock===0)
                            ? <Text>Producto Agotado!</Text>
                            :<View>
                                <View style={styles.contentCantidad}>
                                    <TouchableOpacity
                                    onPress={()=>handleChangeCantidad(+1)}
                                    //disabled={cantidad=== products.stock}
                                    style={styles.buttomCantidad}>
                                        <Text style={styles.textButtomCantidad}>+</Text>
                                    </TouchableOpacity>
                                    
                                    <Text style={styles.textCantidad}>{cantidad}</Text>
                                    
                                    <TouchableOpacity
                                    onPress={()=>handleChangeCantidad(-1)}
                                    //disabled={cantidad===1}
                                    style={styles.buttomCantidad}
                                    >
                                        <Text style={styles.textButtomCantidad}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                    <View>
                                        <Text style={styles.textCantidad}>Total: ${(products.price* cantidad).toFixed(2)}</Text>
                                    </View>
                            
                                    <TouchableOpacity style={styles.buttomAdd}
                                    onPress={handleAddProduct}>
                                        <Text>AGREGAR CARRITO</Text>
                                    </TouchableOpacity>
                            </View>
                        }

                        
                    
            </View>
        </View>
    </Modal>
  )
}

