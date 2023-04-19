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
    const storedUsername = storedData ? storedData.username : '';
const storedDescription = storedData ? storedData.discription : '';
const storedImage = storedData ? storedData.url_img : "https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAAAAA?pid=ImgDet&rs=1";

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);




    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateUserHandler();
    };
    useEffect(() => {

        const storedData = JSON.parse(localStorage.getItem("userData"));

        if (!storedData) {

            navigate("/", { replace: true });

            // alert("Please sign in before entering this page")
        }
    }, []);


    async function updateUserHandler() {
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
        <div id="propage">
          <br />
          {/* <h1 id="proheader">Profile</h1> */}

          <div id="profile1">
            <img id="userimg" src={storedImage} alt="Profile image" />
            <h3 id="username">{storedUsername}</h3>
            <h6> ✩ Description of my content</h6>
            <div class="description-box">
              {/* <p>This is the description of my content.</p> */}
              <p>{storedDescription}</p>
            </div>

            <Button id="update" variant="primary" onClick={handleShowModal}>
              ✏
            </Button>
            <div id="proline"></div>
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      value={image}
                      onChange={handleImageChange}
                    />
                  </Form.Group>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>
          <br />
        </div>
      </>
    );
}

export default Profile;
