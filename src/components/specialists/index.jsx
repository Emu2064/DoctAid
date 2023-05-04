import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';


const doctors = [
    {
        name : {
        fName : 'Nure',
        lName : 'Siddque',
    },
        special : 'Cardiac',
    },
    {
        name : {
            fName : 'Emmanuel',
            lName : 'Hembrom',
        },
        special : 'Neuro-surgeon'
    },
    {
        name : {
            fName : 'Emmanuel',
            lName : 'Hembrom',
        },
        special : 'Neuro-surgeon'
    }

];



function singleDoctor(doctor) {
    console.log(doctor.name);
    return (
        <>
            <Col xs={12} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        </>
    )
}

const Specialists = () => {
    return (
        <Container fluid='md' className='text-light'>
            <Row>
                <Col className='d-flex flex-column align-items-center'>
                    <h1>Our Specialists</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, praesentium?</p>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                {
                    doctors.map((doctor)=>
                        singleDoctor(doctor)
                    )
                }
            </Row>
        </Container>
    );
};

export default Specialists;