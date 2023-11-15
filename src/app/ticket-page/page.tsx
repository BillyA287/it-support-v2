'use client'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


type Props = {}

const Ticketpage = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh]'>

  <Card style={{ width: '50%' }} >
    
      <Card.Body>
        <Card.Title>Ticketpage</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    
    </div>
  )
}

export default Ticketpage