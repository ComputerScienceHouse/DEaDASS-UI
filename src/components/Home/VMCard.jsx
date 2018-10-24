import React from 'react';

export default (props) => {
    console.warn(props);
    return (
        <div class="card border-primary mb-3" style={{maxWidth: '20rem'}}>
            <div class="card-header">Header</div>
            <div class="card-body text-primary">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
};