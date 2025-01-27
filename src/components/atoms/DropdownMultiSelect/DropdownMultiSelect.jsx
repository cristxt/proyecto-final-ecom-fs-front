import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

export function DropdownMultiSelect({ options = defaultOptions, defaultValue }) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || options[0]?.value || "")

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || "Select an option"

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='param-container'>
          <Button variant="outline" className="justify-between">
            {selectedLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={selectedValue} onValueChange={setSelectedValue}>
            {options.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value} className='param-container'>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}