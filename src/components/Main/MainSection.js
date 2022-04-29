import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MainSection = () => {
  return (
    <Container className="my-5 p-2">
        <Row>
        <Col xs={12} md={8}>
            <RightSide/>
        </Col>
        <Col xs={12} md={4}>
            <LeftSide/>
        </Col>      
        </Row>
    </Container>
  )
}

export default MainSection