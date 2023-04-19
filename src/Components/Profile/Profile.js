import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Profile.css';
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
        let image = e.target.image.value == "" ?storedImage : e.target.image.value;
        let discription = e.target.discription.value== "" ?storedDescription :e.target.discription.value;
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
