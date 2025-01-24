import './CreateProduct.css'
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function CreateProduct() {
  const [position, setPosition] = React.useState("bottom")

  const [isEnabled, setIsEnabled] = React.useState(false)

  const handleValueChange = (value: string) => {
    setIsEnabled(value === "true")
  }

  return (
    <section className='create-container'>
      <div className='param-container image-container'><Input id="picture" type="file"/></div>
      <div className='param-container name-container'><Input className='input-container' type="text" placeholder="Name"/></div>
      <div className='param-container description-container'><Input className='input-container' type="text" placeholder="Description"/></div>
      <div className='dropdown-container'>
        {/* <DropdownMenu>
          <DropdownMenuTrigger className='param-container category-container'>Current Option</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='param-container category-container'>Option 1</DropdownMenuItem>
            <DropdownMenuItem className='param-container category-container'>Option 2</DropdownMenuItem>
            <DropdownMenuItem className='param-container category-container'>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='param-container category-container'>
            <Button variant="outline" className="w-[200px] justify-between">
              {position.charAt(0).toUpperCase() + position.slice(1)}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[200px]'>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem className='param-container category-container' value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem className='param-container category-container' value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem className='param-container category-container' value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='param-container price-container'><Input className='input-container' type="number" placeholder="Price"/></div>
      <div className='dropdown-container'>
        {/* <DropdownMenu>
          <DropdownMenuTrigger className='param-container available-container'>Current Option</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='param-container available-container'>True</DropdownMenuItem>
            <DropdownMenuItem className='param-container available-container'>False</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between">
              {isEnabled ? "On" : "Off"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuRadioGroup value={isEnabled.toString()} onValueChange={handleValueChange}>
              <DropdownMenuRadioItem value="true">True</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="false">False</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
      </DropdownMenu>
      </div>
      <div><Button className='button-container' variant="outline"><img></img></Button></div>
    </section>
  );
}