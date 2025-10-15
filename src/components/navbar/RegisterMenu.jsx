import React from 'react';
import { Link } from 'react-router-dom';

const RegisterMenu = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Link to="/signup">
          <button className="btn btn-outline btn-sm md:mr-2">Signup</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-outline btn-sm md:mr-2">Login</button>
        </Link>
      </div>
    );
};

export default RegisterMenu;