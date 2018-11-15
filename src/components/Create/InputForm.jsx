import React from 'react';
import {Card, CardBody, CardHeader, FormGroup} from "reactstrap";

export default ({handleOnChange}) => {
    return (
        <Card className="mb-3">
            <CardHeader>Create a Database</CardHeader>
            <CardBody>
                <h4>Database type</h4>
                <FormGroup>
                    <select id="vmType" className="custom-select" onChange={handleOnChange}>
                        <option selected="">Select a database type</option>
                        <option value="MYSQL">MySql</option>
                        <option value="POSTGRES">PostgreSQL</option>
                        <option value="MONGODB">MongoDB</option>
                    </select>
                </FormGroup>
            </CardBody>
        </Card>
    );
}
