import React from "react";
import { ListGroup } from 'react-bootstrap';

const UserList = ({ users }) => {
    return (
        <div className="liste">
            <ListGroup variant="flush">
                {users.map((user) => (
                    <div className="list">
                        <ListGroup.Item style={{ backgroundColor: "#fbc108" }}>
                            Name: {user.name}
                        </ListGroup.Item>
                        
                    </div>
                ))}
            </ListGroup>
        </div>
    )
}



export default UserList