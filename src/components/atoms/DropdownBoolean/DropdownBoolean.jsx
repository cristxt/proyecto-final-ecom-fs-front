import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export const DropdownBoolean = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectOption = (value) => {
    setIsEnabled(value)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <span>{isEnabled ? "True" : "False"}</span>
          <ChevronDown className="h-5 w-5 ml-2" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#"
              className={`${
                isEnabled ? "bg-indigo-100 text-indigo-900" : "text-gray-700"
              } block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 ease-in-out`}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault()
                selectOption(true)}}>
              True
            </a>
            <a href="#"
              className={`${
                !isEnabled ? "bg-indigo-100 text-indigo-900" : "text-gray-700"
              } block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 ease-in-out`}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault()
                selectOption(false)}}>
              False
            </a>
          </div>
        </div>
      )}
    </div>
  )
}