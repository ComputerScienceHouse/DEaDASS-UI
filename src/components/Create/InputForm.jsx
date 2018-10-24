import React from 'react';

export default ({ handleOnChange }) => {
  return (
    <div className="card mb-3">
      <h2 className="card-header">Create a Database</h2>
      <div className="card-body">
        <h4>Database type</h4>
        <div className="form-group">
          <select id="vmType" className="custom-select" onChange={handleOnChange}>
            <option selected="">Select a database type</option>
            <option value="MYSQL">MySql</option>
            <option value="POSTGRES">PostgreSQL</option>
            <option value="MONGODB">MongoDB</option>
          </select>
        </div>
      </div>
    </div>
  );
}
