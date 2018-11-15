import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

export default ({id, title, description, vmType}) => {
    return (
        <Card>
            <CardHeader>
                {vmType}
            </CardHeader>
            <CardBody>
                <Link to={`/db/${id}`}>
                    <CardTitle>{title}</CardTitle>
                </Link>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};
