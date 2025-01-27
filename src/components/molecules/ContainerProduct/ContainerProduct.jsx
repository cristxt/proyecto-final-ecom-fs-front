import './ContainerProduct.css'
import { Button } from "@/components/ui/button"

export function ContainerProduct() {
  return (
    <section className='product-container'>
      <div className='param-container'><p>id</p></div>
      <div className='param-container'><image></image></div>
      <div className='param-container'><p>Name</p></div>
      <div className='param-container'><p>Description</p></div>
      <div className='param-container'><p>Category</p></div>
      <div className='param-container'><p>Price</p></div>
      <div className='param-container'><p>Available</p></div>
      <Button className='edit button-container' variant="outline"><img></img></Button>
      <Button className='delete button-container' variant="outline"><img></img></Button>
    </section>
  );
}