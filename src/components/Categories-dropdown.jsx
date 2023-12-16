import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Category-dropdown.css';
function CategoriesDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic" className='size'>
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoriesDropdown
