import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';



export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    
    const products: Product[] = [
        {id:1, name:"Camiseta", price:15.50, stock:10, pathImage:"https://gasoilonline.com/193-home_default/camiseta-azul-100-algodon.jpg"},
        {id:2, name:"Camisa", price:20.50, stock:5, pathImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF9jT7HkbAi5YNdtH8Cb9KtwG320TyqZL3g&s"},
        {id:3, name:"Pantalon", price:22.50, stock:20, pathImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhbVR2nagrjVTP_7Kbje6Mx9uYba0K46lbA&s"},
        {id:4, name:"Zapato", price:5.50, stock:30, pathImage:"https://www.venus.com.ec/pub/media/catalog/product/cache/f246a469ca072380ed3af8f211e66c99/e/n/enrique-psd-zapato-de-uso-diario-y-colegial-grupal.jpg"},
        {id:5, name:"Tacos", price:9.50, stock:30, pathImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLn3DzjmjAHdpTpEvuSYVzUILtEsc_KLdt4g&s"},
        {id:6, name:"Medias", price:22.50, stock:40, pathImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzGEOiGzQhQSdCItX5qaVuvyBrpjhqbo9WA&s"},
        {id:7, name:"Interiores", price:5.50, stock:30, pathImage:"https://img.freepik.com/vector-gratis/conjunto-ropa-interior-mujer_74855-15562.jpg"},
        {id:8, name:"Trajes", price:9.50, stock:10, pathImage:"https://img.freepik.com/vector-gratis/conjunto-realista-traje-hombre-chaquetas-inteligentes-corbatas-camisas-diferentes-colores-ilustracion-vectorial-aislada_1284-75786.jpg?semt=ais_hybrid"}

    ];

    const [productsState, setProductsState] = useState(products)

    const handleChangeStockProduct =(idProduct:number, cantidad:number)=>{
        const updateStock=productsState.map(item=>item.id===idProduct
        ?{...item, stock:item.stock - cantidad}
            :item
        );
        setProductsState(updateStock);
    }

    return (
        <View>
            <StatusBar backgroundColor={"rgb(212, 8, 8 )"} />
            <TitleComponent title='Nuestros Productos' />
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct products={item} handleChangeStockProduct={handleChangeStockProduct}/>} 
                    keyExtractor={item => item.id.toString()}/>
            </BodyComponent>
        </View>
    )
}
