import './ContainerProduct.css'
import { Button } from "@/components/ui/button"

export function ContainerProduct({ productsArray }) {
//   return (
//     <>
//       {productsArray.map((product) => {
//         const { id, image, name, description, category, price, available } = product;

//         return (
//           <div className='product-container' key={id}>
//             <div className='param-container'><p>{id}</p></div>
//             <div className='param-container'><img src={image} alt={name} /></div>
//             <div className='param-container'><p>{name}</p></div>
//             <div className='param-container'><p>{description}</p></div>
//             <div className='param-container'><p>{category}</p></div>
//             <div className='param-container'><p>{price}</p></div>
//             <div className='param-container'><p>{available}</p></div>
//             <Button className='edit button-container' variant="outline"><img /></Button>
//             <Button className='delete button-container' variant="outline"><img /></Button>
//           </div>
//         );
//       })}
//     </>
//   );
}