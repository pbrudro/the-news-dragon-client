// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login with google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone/>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;