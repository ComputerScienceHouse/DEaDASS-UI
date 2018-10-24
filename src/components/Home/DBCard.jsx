import React from 'react';
import { Link } from 'react-router-dom';

export default ({id, title, description, vmType}) => {
    return (
        <Link to={`/db/${id}`}>
          <div class="card border-primary mb-3" style={{maxWidth: '20rem', margin: '30px 40px', cursor: 'pointer'}}>
              <div class="card-header">{vmType}</div>
              <div class="card-body text-primary">
                  <h4 class="card-title">{title}</h4>
                  <p class="card-text">{description}</p>
              </div>
          </div>
        </Link>
    );
};
