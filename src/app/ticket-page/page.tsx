'use client'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


type FormProps = {
  firstName:string,
  lastName:string,
  email:string,
  description:string,
  priorty:string

}

const Ticketpage = (props: FormProps) => {

  const [formData,setFormData] = useState<FormProps>({

    firstName: '',
    lastName: '',
    email: '',
    description:'',
    priorty: '',

  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
   const {name, value} = e.target;
   setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[]'>

  <Card style={{ width: '50%' }}  >
    
      <Card.Body>
        <Card.Title>Ticketpage</Card.Title>
        <Card.Text>
        Please fill in form with details of your Issue
        </Card.Text>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='firstName' placeholder="First Name "  value={formData.firstName} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  name='lastName' placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' placeholder="name@example.com" value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description of issue</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="priorty">
        <Form.Label>Priority level</Form.Label>
        <Form.Control as="select" name='priorty' value={formData.priorty} onChange={handleChange}>
        <option>Please select</option>
        <option>High</option>
        <option>Intermediate</option>
        <option>Low</option>
        </Form.Control>

      </Form.Group>
  
        
        <Button variant="primary" type='submit'>Go somewhere</Button>
         </Form> 
      </Card.Body>
    </Card>


    
    </div>
  )
}

export default Ticketpage