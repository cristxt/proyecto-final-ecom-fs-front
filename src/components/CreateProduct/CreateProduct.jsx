import './CreateProduct.css'
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function CreateProduct() {
  return (
    <section className='create-container'>
      <div className='param-container image-container'><Input id="picture" type="file"/></div>
      <div className='param-container name-container'><Input type="text" placeholder="Name"/></div>
      <div className='param-container description-container'><Input type="text" placeholder="Description"/></div>
      <div className='dropdown-container'>
        <DropdownMenu>
          <DropdownMenuTrigger className='param-container category-container'>Current Option</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='param-container category-container'>Option 1</DropdownMenuItem>
            <DropdownMenuItem className='param-container category-container'>Option 2</DropdownMenuItem>
            <DropdownMenuItem className='param-container category-container'>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='param-container price-container'><Input type="number" placeholder="Price"/></div>
      <div className='dropdown-container'>
        <DropdownMenu>
          <DropdownMenuTrigger className='param-container available-container'>Current Option</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='param-container available-container'>True</DropdownMenuItem>
            <DropdownMenuItem className='param-container available-container'>False</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='button-container'><Button variant="outline"><img></img></Button></div>
    </section>
  );
}

export default CreateProduct;