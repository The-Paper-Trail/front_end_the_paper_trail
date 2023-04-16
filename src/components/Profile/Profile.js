import React from 'react';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class DescriptionBox extends React.Component {
    render() {
        return (
            <div className="description-box">
                <h2>Description</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/getUser`);
            const data = await response.json();
            setUser(data);
        }
        fetchData();
    }, []);

    async function handleUpdate(email, data) {
        let url = `${process.env.REACT_APP_SERVER_URL}/updateUser/${email}`;
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data),

        })
    }
    return (
        <>
        {/* <Navber /> */}
            <h1>Profile</h1>
            <h3>UserName</h3>
            <img src="https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAAAAA?pid=ImgDet&rs=1" alt="Profile image" />

            <DescriptionBox description="This is a description of my profile." />
            <Button variant="primary" onClick={() => handleUpdate(user.email)}>Update
            <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.user.email}</Modal.Title>
            </Modal.Header>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
            <Modal.Body>{props.user.description}</Modal.Body>
            <br/>
            <br/>
            {props.movie.comment? props.movie.comment: "No comment Added"}
            <br/>
            <Form>
                <Form.Group>
                    <Form.Label>Update</Form.Label>
                    <Form.Control type="text" ref={commentRef} rows={3} />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={(e)=>submitHandler(e)} >
                    Submit
                </Button>

                
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
            </Button>
            <Footer />
        </>
    );
}


export default Profile;
