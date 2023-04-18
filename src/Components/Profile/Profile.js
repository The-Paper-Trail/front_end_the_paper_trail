import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Profile.css';
import Footer from "../Footer/Footer";
import { useRef } from 'react';


function Profile() {

    var storedData = JSON.parse(localStorage.getItem("userData"));
    const storedDescription = storedData ? storedData.discription : '';
    const storedEmail = storedData ? storedData.email : '';
    const storedpassword = storedData ? storedData.password : '';
    const storedImage = storedData ? storedData.url_img : '';
    const storedUsername = storedData ? storedData.username : '';

    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState(storedDescription);
    const [image, setImage] = useState(storedImage);
    const discriptionRef = useRef();



    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleImageChange = (e) => {setImage(e.target.value);
        
}




    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let image = e.target.image.value == "" ?"https://image.freepik.com/free-vector/man-reading-book-with-big-books-around-white-background-colorful-isometric_18591-62675.jpg":e.target.image.value;
        let discription = e.target.discription.value== "" ?"There is no description" :e.target.discription.value;
        setImage(image)
        setDescription(discription)
       
        localStorage.removeItem("userData");
        let data = {
            discription: discription,
            email: storedEmail,
            password: storedpassword,
            url_img: image,
            username: storedUsername,
        }
        localStorage.setItem("userData", JSON.stringify(data));
        let data2={
            email: storedData.email,
            discription: discription,
            url_img: image,
        }
        console.log(storedEmail);

        let url = `${process.env.REACT_APP_SERVER_URL}/updateUser/${storedEmail}`;

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data2),
            });

        await response.json();





    };
    useEffect(() => {

        var storedData = JSON.parse(localStorage.getItem("userData"));

        if (storedData) {
            const profileForm = document.querySelector(".profile")
            profileForm.scrollIntoView({ behavior: "smooth", block: "start" })
        
            } 

         else {
            navigate("/", { replace: true });
        }
    }, []);


    async function updateUserHandler() {


    }

    return (
        <>

            <h1 className="profile">Profile</h1>
            <h3>{storedUsername}</h3>
            <img src={image} alt="Profile image" />
            <div class="description-box">
                <h2>Description</h2>
                <p>{description}</p>
            </div>

            <Button variant="primary" onClick={handleShowModal}>
                Update
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="discription" type="text" />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="image" type="text" />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleCloseModal}>
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