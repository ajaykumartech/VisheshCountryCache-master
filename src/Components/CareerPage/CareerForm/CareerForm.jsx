import React, { useState } from "react";
import "./CareerForm.css";
import image from "../../../assets/AboutPage/Banner image Building.png";
import { Row, Col, Container, Spinner, Toast } from "react-bootstrap";
import attachIcon from "../../../assets/CareerPage/attach-square.png";
import FireBaseDatabase from "../../ContactPage/FireBaseConfig/FireBaseConfig";
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, ref, getStorage, getDownloadURL } from "firebase/storage";
import FirebaseStorage from "../FireBaseStorage/FireBaseStorage";
import tick from "../../../assets/CareerPage/tick.gif"

function storeInFiresBase(employeeData, setSuccessFull) {
  const dbRef = collection(FireBaseDatabase, "employee");

  addDoc(dbRef, employeeData)
    .then((res) => {
      setSuccessFull(true);
    })
    .catch((error) => {
      alert("An error occurred. Please try again.");
    })
}

const getImageDownloadURL = async (pdfName) => {
  try {
    const storage = getStorage()
    const PdfRef = ref(storage, `/emplyeePdfs/${pdfName}`);
    const downloadURL = await getDownloadURL(PdfRef);
    return downloadURL;
  } catch (error) {
    alert("An error occurred. Please try again. from getting pdf url", error)
  }
};
function StoreResumeInFireBaseStorage(PdfFile, employee) {
  const date = new Date();
  const pdfName = employee + " (" + date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "_" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ")"
  const Storageref = ref(FirebaseStorage, `/emplyeePdfs/${pdfName}`);
  let uploadTask = uploadBytes(Storageref, PdfFile)
    .then((res) => {
      return getImageDownloadURL(pdfName)
    })
    .catch((e) => {
      console.log("An error occurred. Please try again.")
      return new Error(e);
    })
  return uploadTask;
}

const CareerForm = () => {
  const [getSuccessFull, setSuccessFull] = useState(false)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workExperience: "",
    qualification: "",
    previousJobTitle: "",
    companyName: "",
    applyingFor: "Graphic Designer",
    coverLetter: "",
  });
  const [ErrorMessage, setErroeMessage] = useState("");

  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedPdf, setSelectedPdf] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files.length > 0) {

      setSelectedFileName(files[0].name);
      setSelectedPdf(files[0]);
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e) => {
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.qualification === '') {
      setErroeMessage("Please fill all required fields.")
    } else if (formData.phoneNumber === '' || (formData.phoneNumber.length > 10 && formData.phoneNumber.length < 13)) {
      setErroeMessage("Please enter valid Phone Number.")
    }
    else {
      setErroeMessage("");
      setLoading(true);
      StoreResumeInFireBaseStorage(selectedPdf, formData.firstName + " " + formData.lastName).then(
        (url) => {
          setFormData({ ...formData, coverLetter: url });
          const getFormData = () => { let data = formData; data.coverLetter = url; return data; }
          storeInFiresBase(getFormData(), setSuccessFull);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            workExperience: "",
            qualification: "",
            previousJobTitle: "",
            companyName: "",
            applyingFor: "",
            coverLetter: ""
          }); // Reset form fields
        }
      )
        .catch((e) => {
          alert("An error occurred. Please try again.");
        }).finally(() => {
          setLoading(false);
        });

    }
  };

  return (
    <Container fluid className="career-page-form-section-com">
      <Row className="justify-content-center align-items-center">
        <Col>
          <h6 className="form-heading">Fill up the form</h6>
          <form>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="career-page-form-input"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="career-page-form-input"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail *"
                className="career-page-form-input"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone No."
                className="career-page-form-input"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                placeholder="Work Experience"
                className="career-page-form-input"
                required
              />
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Qualification *"
                className="career-page-form-input"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="previousJobTitle"
                value={formData.previousJobTitle}
                onChange={handleChange}
                placeholder="Previous Job Title"
                className="career-page-form-input"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="career-page-form-input"
                required
              />
            </div>

            <div className="custom-select form-row">
              <select
                name="applyingFor"
                value={formData.applyingFor}
                onChange={handleSelectChange}
                className="file-placeholder"
              >
                <option style={{ color: "black" }} value="Graphic Designer">Graphic Designer</option>
                <option style={{ color: "black" }} value="UI/UX Designer">UI/UX Designer</option>
                <option style={{ color: "black" }} value="Fullstack Development">
                  Fullstack Development
                </option>
                <option style={{ color: "black" }} value="Open Application">Open Application</option>
              </select>
            </div>

            <div className="form-row file-input" style={{ marginBottom: "1%" }}>
              <span className="file-placeholder">
                {selectedFileName
                  ? selectedFileName
                  : "Attach Resume/Cover Letter"}
              </span>
              <span className="file-icon">
                <img src={attachIcon} alt="Attachment Icon" />
              </span>
              <input
                type="file"
                name="resume"
                className="file"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p className='ErrorMessage' style={{ textAlign: "center" }}>{ErrorMessage}</p>
            </div>
            <Row style={{ marginTop: '5%' }}>
              <Col xs={12} sm={6}>
                <button type="button" onClick={() => { handleSubmit() }} className="about-us-btn">
                  Submit{" "}
                  {
                    (loading) ?
                      <Spinner animation="border" role="status" style={{ color: "#ffffff", backgroundColor: "#101828" }} >
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                      : ""

                  }
                </button>
              </Col>
              <Col className="ToastCareer" xs={12} sm={6} style={{ display: (getSuccessFull ? "block" : "none") }}>
                <Toast show={getSuccessFull} delay={0} className='ContactToastBody' onClose={() => { setSuccessFull(false) }}>
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

            </Row>

          </form>
        </Col>

        <Col className="image-section">
          <img src={image} alt="Form" className="form-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default CareerForm;
