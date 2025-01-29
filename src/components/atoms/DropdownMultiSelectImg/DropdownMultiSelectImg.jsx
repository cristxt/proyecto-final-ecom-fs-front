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

  { value: "image3", label: "Monstera Andansonii", imageUrl: "http://localhost:8080/images-database/Monstera_Andansonii.webp" },
  { value: "image4", label: "Platanera Musa Dwarf", imageUrl: "http://localhost:8080/images-database/Platanera_Musa_Dwarf.webp" },
]

export function DropdownMultiSelectImg({ options = defaultOptions, defaultValue }) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || options[0]?.value || "")

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || "Select an option"
  const selectedImage = options.find((option) => option.value === selectedValue)?.imageUrl

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="dropdown-button">
            <img src={selectedImage} alt={selectedLabel} className="dropdown-image" />
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
              <img src={option.imageUrl} alt={option.label} className="dropdown-image" />
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
