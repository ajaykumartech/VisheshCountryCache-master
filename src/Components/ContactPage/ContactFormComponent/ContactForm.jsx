import React, { useState } from 'react';
import { Container, Row, Spinner, Toast, Col, } from 'react-bootstrap';
import "./ContactForm.css";
import FireBaseDatabase from '../FireBaseConfig/FireBaseConfig';
import 'firebase/firestore';
import 'firebase/firestore';
import { addDoc, collection, } from 'firebase/firestore';
import tick from "../../../assets/CareerPage/tick.gif"

function storeInFiresBase(viewerData, setSuccessFull) {
    const dbRef = collection(FireBaseDatabase, "viewers");

    addDoc(dbRef, viewerData)
        .then((res) => {
            setSuccessFull(true);
        })
        .catch((error) => {
            alert("An error occurred. Please try again.");
        })
}

function ContactForm(props) {
    const [getSuccessFull, setSuccessFull] = useState(false)
    const formData = {
        Viewer_Name: ".",
        Viewer_E_Mail: ".",
        Viewer_Message: ".",
        Viewer_Company_Or_Organization_Name: "."
    }

    const values = {
        Viewer_Name: "",
        Viewer_E_Mail: "",
        Viewer_Message: "",
        Viewer_Company_Or_Organization_Name: ""
    }

    const [loading, setLoading] = useState(false);
    const [getFormData, setFormData] = useState(formData);
    const [getValues, setValues] = useState(values);
    const [ErrorMessage, setErroeMessage] = useState("");

    const ValidateAndSend = () => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const tempFormData = getFormData;
        var count = 0;
        var emailIs = true;
        for (let viewerKey in getFormData) {
            if (getFormData[viewerKey] === ".") {
                tempFormData[viewerKey] = "";
            }
            else if (viewerKey === "Viewer_E_Mail") {
                if (emailPattern.test(getFormData[viewerKey])) {
                    count++;
                    setErroeMessage("");
                }
                else {
                    if (tempFormData[viewerKey] === "") {
                        setErroeMessage("Please fill the E-mail field");
                    }
                    else {
                        setErroeMessage("'" + tempFormData[viewerKey] + "' is not a valid E-mail address");
                    }

                    tempFormData[viewerKey] = "";

                    emailIs = false;
                }
            }
            else if (getFormData[viewerKey] === "") {
                setErroeMessage("Please fill the required fields.");
            }
            else {
                count++;
            }
        }
        try {
            if (count === 4) {
                setLoading(true);
                storeInFiresBase(tempFormData, setSuccessFull);
                setValues({ ...values });
                setFormData({ ...formData });
                setErroeMessage("");
            }
            else {
                setFormData({ ...tempFormData });
                if (emailIs) {
                    setErroeMessage("Please fill the required fields.");
                }
            }
        } catch (error) {
            console.log("An error occurred. Please try again.")
        } finally {
            setLoading(false);
        };
    };

    return (
        <Container fluid className='ContactForm-container' >

            <Row>

                <div className='ContactForm-container-row-col-1'>
                    <div>
                        <h6 className='ContactForm-h6' >It happens with us. We would love to hear from you.</h6>
                        <Col className='ContactToast' xs={6} style={{ display: (getSuccessFull ? "block" : "none") }}>
                            <Toast show={getSuccessFull} delay={10000} autohide className='ContactToastBody' onClose={() => { setSuccessFull(false) }}>
                                <Toast.Header>
                                    <strong className="me-auto" style={{ backgroundColor: "transparent", fontFamily: "Satoshi-medium" }}>Successfully submitted
                                        {getSuccessFull ?
                                            <img
                                                src={tick}
                                                alt="visheshtickmark.gif"
                                                style={{ maxWidth: "10%", marginLeft: "1vw", marginBottom: "0.3vw" }}
                                            /> : ""}
                                    </strong>
                                    <small></small>
                                </Toast.Header>
                                <Toast.Body style={{ fontFamily: "Satoshi-medium" }}>Message sent successfully. We will contact you shortly.</Toast.Body>
                            </Toast>
                        </Col>
                    </div>
                </div>

                <div className='ContactForm-container-row-col-2'>
                    <div className='ContactForm-form-container'>
                        <form action=""  >
                            <div className='ContactForm-field-container'>
                                <div>
                                    <p className='ContactForm-field-lable'>Your Name <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Name} style={{ borderColor: getFormData.Viewer_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >E-mail <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div>
                                    <input type="email" value={getValues.Viewer_E_Mail} style={{ borderColor: getFormData.Viewer_E_Mail === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_E_Mail: (e.target.value) }); setValues({ ...getValues, Viewer_E_Mail: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >Company/Organization Name <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Company_Or_Organization_Name} style={{ borderColor: getFormData.Viewer_Company_Or_Organization_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Company_Or_Organization_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Company_Or_Organization_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>How Can We Help You <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div>
                                    <textarea type="text" value={getValues.Viewer_Message} style={{ borderColor: getFormData.Viewer_Message === "" && '#f08989' }} className='ContactForm-field-textarea' onChange={(e) => { setFormData({ ...getFormData, Viewer_Message: (e.target.value) }); setValues({ ...getValues, Viewer_Message: (e.target.value) }) }} />
                                </div>
                                <div>
                                    <p className='ErrorMessage'>{ErrorMessage}</p>
                                </div>
                            </div>

                            <div className='ContactForm-field-container'>
                                <div className='ContactForm-field-button'>
                                    <button className='about-us-btn' type='button' onClick={ValidateAndSend}>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </Row>
            {/* Loading Spinner Overlay */}
            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-indicator" style={{ backgroundColor: "transparent" }}>
                        <Spinner style={{ backgroundColor: "transparent" }} animation="border" variant="primary" />
                    </div>
                </div>
            ) : null}
        </Container>
    );
}

export default ContactForm;