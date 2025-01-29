import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaChevronDown } from "react-icons/fa"  

const defaultOptions = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
]

export function DropdownMultiSelectAv({ options = defaultOptions, defaultValue }) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || options[0]?.value || "")

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || "Select an option"

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="dropdown-button">
            {selectedLabel}
            <FaChevronDown className="dropdown-icon" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="dropdown-content">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setSelectedValue(option.value)}
              className="dropdown-item"
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
