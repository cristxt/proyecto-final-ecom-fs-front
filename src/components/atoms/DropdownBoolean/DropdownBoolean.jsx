import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const booleanOptions = [
  { value: true, label: "True" },
  { value: false, label: "False" },
]

export function DropdownBoolean({ defaultValue = true, onChange }) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue)

  const handleValueChange = (value) => {
    const boolValue = value === "true"
    setSelectedValue(boolValue)
    if (onChange) {
      onChange(boolValue)
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='param-container'>
          <Button variant="outline" className="w-[200px] justify-between">
            {selectedValue ? "True" : "False"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={selectedValue.toString()} onValueChange={handleValueChange}>
            {booleanOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value.toString()} value={option.value.toString()} className='param-container'>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}