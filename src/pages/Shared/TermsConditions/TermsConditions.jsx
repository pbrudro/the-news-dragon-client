import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nihil in quo aut sequi optio ullam, ad eos minus exercitationem eum debitis corrupti animi deleniti ducimus a quae totam vitae sed, perferendis dicta non alias necessitatibus cum! Voluptatum, quia aperiam illo, pariatur quas in deleniti corporis possimus modi mollitia facere.</p>
      <p>Go Back<Link to ='/register'>Register</Link></p>
    </div>
  );
};

export default TermsConditions;