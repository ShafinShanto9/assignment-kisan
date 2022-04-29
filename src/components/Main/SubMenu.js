import React from 'react'
import { ListGroup } from 'react-bootstrap'

const SubMenu = () => {
  return (
      <div>
          <ListGroup as="ul">
              
        <ListGroup.Item as="li" style={{textAlign: 'center' , fontSize:"20px"}} >
            Sub Menu
        </ListGroup.Item>
        <ListGroup.Item as="li" >Home</ListGroup.Item>
        <ListGroup.Item as="li" active>Example</ListGroup.Item>
        <ListGroup.Item as="li" >Contact</ListGroup.Item>
        <ListGroup.Item as="li">About</ListGroup.Item>
        </ListGroup>      
    </div>
  )
}

export default SubMenu