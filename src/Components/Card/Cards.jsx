import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import desayunos from '../../Utils/DesayunosMocks';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
  const [info, setInfo] = useState([]);

  const getBreakFast = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(desayunos)
      }, 2000)
    })
  }

  useEffect( () => {
   getBreakFast()
   .then((res) => {
    setInfo(res)
   }) 
    
  }, [])


  return (
    <>
      { info.map((data) =>{

        return(
          <Card key={data.id} style={{ width: '12rem' }}>
          <Card.Img variant="top" src={data.imagen} />
          <Card.Body>
            <Card.Title>{data.titulo}</Card.Title>
            <Card.Text>
              {data.precio}
            </Card.Text>
            <Button variant="primary">buy now</Button>
          </Card.Body>
        </Card>
      )})
      }
    </>
  );
}

export default Cards;