import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../Components/Shared/Breadcrums/Breadcrum"
import ProductDisplay from "../Components/Shared/ProductDisplay/ProductDisplay"
import DescriptionBox from "../Components/Shared/DescriptionBox/DescriptionBox"

export const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id == productId)
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}
