import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import TermsConditions from '../../Shared/TermsConditions/TermsConditions';

const Register = () => {

  const {createUser} = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false);

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error => console.error(error));
  }
  
  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }

  return (
    <Container className='mx-auto w-25 '>
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhotoUrl">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccepted} 
          type="checkbox" 
          name='acceptConditions' 
          label= {<>Accept
          <Link to ='/terms'>  Terms and Conditions
          </Link>
          </> } />
        </Form.Group>

        <Button
          variant="primary"
          disabled = {!accepted}
          type="submit">
          Register
        </Button>
        <br /> <br />

        <Form.Text className='text-secondary'>
          Already have an account?
          <Link
            to='/login'>
            Login
          </Link>
        </Form.Text>

        <Form.Text className='text-success'>

        </Form.Text>
        <Form.Text className='text-danger'>

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;