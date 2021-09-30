import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';


function Cat() {
    return (
        <div>
           <div class="dropdown">
  <button>Category of Picture</button>
  <div class="dropdown-content">
  <NavLink to="/phone">Phone</NavLink>
  <NavLink to="/beaches">Beaches</NavLink>
  <NavLink to="/houses">Houses</NavLink>
  </div>
</div>
        </div>
    )
}

export default Cat
