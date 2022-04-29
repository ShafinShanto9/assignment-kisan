import React from 'react'
import { Container } from 'react-bootstrap'
import MainMenu from './MainMenu'

export const Header = () => {
  return (
    <div style={{backgroundColor:'#83C8BC'}} className="pb-5">
        <MainMenu />
          <Container className='px-2 '>
            <h1 sm className='my-5 bg-primary w-50 p-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quos nobis quisquam sequi repellat soluta, </h1>
          </Container>  
    </div>
  )
}
