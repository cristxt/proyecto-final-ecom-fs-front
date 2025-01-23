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
    <div>
      <Input id="picture" type="image"/>
      <Input type="text" placeholder="Name"/>
      <Input type="text" placeholder="Description"/>
      <DropdownMenu>
        <DropdownMenuTrigger>Current Option</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input type="number" placeholder="Price"/>
      <DropdownMenu>
        <DropdownMenuTrigger>Current Option</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>True</DropdownMenuItem>
          <DropdownMenuItem>False</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline"><img></img></Button>
    </div>
  );
}

export default CreateProduct;