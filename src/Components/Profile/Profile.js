import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Profile.css';


function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');


    const storedData = JSON.parse(localStorage.getItem("userData"));
const storedDescription = storedData ? storedData.discription : '';
const storedImage = storedData ? storedData.url_img : "https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAAAAA?pid=ImgDet&rs=1";

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);




    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addToFavHandler();
    };
    useEffect(() => {

        const storedData = JSON.parse(localStorage.getItem("userData"));

        if (!storedData) {

            navigate("/", { replace: true });

            // alert("Please sign in before entering this page")
        }
    }, []);


    async function addToFavHandler() {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        let url = `${process.env.REACT_APP_SERVER_URL}/updateUser/${storedData.email}`;
        let data1 = {
            "discription": description == "" ? storedData.discription : `${description}`,
            "url_img": image == "" ? storedData.url_img : `${image}`
        };
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
        });

        const receivedData = await response.json();
        console.log(response);
        console.log(receivedData);

        if (response.status === 200) {
            console.log(receivedData);
            const userData = receivedData;
            localStorage.setItem("userData", JSON.stringify(userData));
            navigate("/profile");
        } else {
            // alert("Error updating profile.");
        }

    }



    // "https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAAAAA?pid=ImgDet&rs=1"
    return (
        <>
            <h1>Profile</h1>
            <h3>UserName</h3>
            <img src={storedImage} alt="Profile image" />
            <div class="description-box">
                <h2>Description</h2>
                {/* <p>This is the description of my content.</p> */}
                <p>{storedDescription}</p>
            </div>

            <Button variant="primary" onClick={handleShowModal}>
                Update
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
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
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile;

