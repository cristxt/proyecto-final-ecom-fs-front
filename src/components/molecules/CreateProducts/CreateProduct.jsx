import './CreateProduct.css'
import { Input } from '@/components/ui/input';
import { DropdownBoolean } from '../../atoms/DropdownBoolean/DropdownBoolean';

export function CreateProduct() {
  return (
    <section className='create-container'>
      <div className='param-container image-container'><Input id="picture" type="file"/></div>
      <div className='param-container name-container'><Input className='input-container' type="text" placeholder="Name"/></div>
      <div className='param-container description-container'><Input className='input-container' type="text" placeholder="Description"/></div>
      <div className='dropdown-container'> <DropdownMultiSelect/> </div>
      <div className='param-container price-container'><Input className='input-container' type="number" placeholder="Price"/></div>
      <div className='dropdown-container'> <DropdownBoolean/> </div>
      <div><Button className='button-container' variant="outline"><img></img></Button></div>
    </section>
  );
}