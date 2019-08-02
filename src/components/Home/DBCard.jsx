import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

export default ({name, purpose, type}) => {
    return (
        <Card>
            <CardHeader>
                <FontAwesomeIcon icon={faDatabase} /> {type}
            </CardHeader>
            <CardBody>
                <Link to={`/db/${type}/${name}`}>
                    <CardTitle>{name}</CardTitle>
                </Link>
                <CardText>{purpose}</CardText>
            </CardBody>
        </Card>
    );
};
