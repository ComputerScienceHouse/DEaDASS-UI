import React from 'react';

export default ({title, description, vmType}) => {
    return (
        <div class="card border-primary mb-3" style={{maxWidth: '20rem', margin: '30px 40px', cursor: 'pointer'}}>
            <div class="card-header">{vmType}</div>
            <div class="card-body text-primary">
                <h4 class="card-title">{title}</h4>
                <p class="card-text">{description}</p>
            </div>
        </div>
    );
};
