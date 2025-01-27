import './App.css'
import React from "react";
import { CreateProduct } from './components/molecules/CreateProduct/CreateProduct'
// import { ContainerProduct } from './components/molecules/ContainerProduct/ContainerProduct'

function App() {
  // const [products, setProducts] = useState([]);

  // const getAllProductsFromService = async () => {
  //   const response = await getAllProducts();
  //   setProducts(response)
  // }

  // useEffect(() => {
  //   getAllProductsFromService()
  // }, [])

  return (
    <>
     <CreateProduct />
     {/* <section className=''><ContainerProduct productsArray={products}/></section> */}
    </>
  )
}

export default App
