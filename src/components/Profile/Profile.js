import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Profile.css';


function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    // const [email, setEmail] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);



    async function handleUpdate() {
        let email = "ahmadjehad1212@gmail.com";
        handleCloseModal();


        let data1 = {
            "discription": `${description}`,
            "url_img": `${image}`
        }

        console.log(email);
        let url = `${process.env.REACT_APP_SERVER_URL}/updateUser/${email}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data1),
        })
        const receivedData = await response.json();
        console.log(1111, receivedData)

        if (response.status === 201) {
            alert("successfully added to database")
        }
    }





    return (
        <>
            <h1>Profile</h1>
            <h3>UserName</h3>
            <img src="https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAAAAA?pid=ImgDet&rs=1" alt="Profile image" />
            <div class="description-box">
                <h2>Description</h2>
                <p>This is the description of my content.</p>
            </div>

            <Button variant="primary" onClick={handleShowModal}>
                Profile
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={handleDescriptionChange} />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" value={image} onChange={handleImageChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile;

