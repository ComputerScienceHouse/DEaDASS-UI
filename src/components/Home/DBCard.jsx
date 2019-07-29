import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

export default ({id, title, description, vmType}) => {
    return (
        <Card>
            <CardHeader>
                <FontAwesomeIcon icon={faDatabase} /> {vmType}
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
