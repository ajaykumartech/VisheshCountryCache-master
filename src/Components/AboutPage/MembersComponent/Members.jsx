import React from 'react';
import "./Members.css"
import { Container, Row } from 'react-bootstrap';

const MembersData = [
    { image: require("../../../assets/AboutPage/Jhansi.png"), name: "Jhansi", teamName: "Creative Design Lead" },
    { image: require("../../../assets/AboutPage/RajeswariK.png"), name: "Rajeswari", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Prasanna.png"), name: "Prasanna", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Tejaswini.png"), name: "Tejaswini", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Sai Gopinadh.png"), name: "Sai Gopinadh", teamName: "Creative Designer" },

    { image: require("../../../assets/AboutPage/Ramesh.png"), name: "Ramesh", teamName: "Marketing Analysis Lead" },
    { image: require("../../../assets/AboutPage/mounika.png"), name: "Mounika", teamName: "Marketing Analyst" },
    { image: require("../../../assets/AboutPage/Kartheek.png"), name: "Kartheek", teamName: "Marketing Analyst" },
    { image: require("../../../assets/AboutPage/Anitha.png"), name: "Anitha", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Ajay.png"), name: "Ajay", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Aditya.png"), name: "Aditya", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Vinod cartoon.png"), name: "Vinod", teamName: "Full Stack Developer" },

    { image: require("../../../assets/AboutPage/Vinay.png"), name: "Vinay", teamName: "Digital Marketing Lead" },
    { image: require("../../../assets/AboutPage/Durga Rao.png"), name: "Durga Rao", teamName: "Digital Marketer" },
    { image: require("../../../assets/AboutPage/Lasya.png"), name: "Lasya", teamName: "Digital Marketer" },

    { image: require("../../../assets/AboutPage/manoj.png"), name: "Manoj", teamName: "UI/UX Designer" },

    { image: require("../../../assets/AboutPage/Kumar.png"), name: "Kumar", teamName: "" },
    { image: require("../../../assets/AboutPage/Ganesh.png"), name: "Ganesh", teamName: "" },
    { image: "", name: "", teamName: "s" },
    { image: "", name: "", teamName: "4" },
]


function Members(props) {


    return (
        <Container className='MembersContainer' fluid >
            <Row className='MembersContainer-Row'>
                {
                    MembersData.map((MemberData) => {
                        if (MemberData.name) {
                            return (
                                <div className='Member' key={MemberData.name}>
                                    <Row className='Member-Row'>
                                        <div style={{ backgroundImage: `url("${MemberData.image}")` }} className='MemberImage'>

                                        </div>
                                    </Row>
                                    <Row className='Member-Row' >
                                        <div>
                                            <h6 className='Member-name'>{MemberData.name}</h6>
                                        </div>
                                        <div className='Member-teamName'>
                                            {MemberData.teamName}
                                        </div>
                                    </Row>
                                </div>

                            )
                        }
                        else {
                            return (
                                <div className='Member' key={MemberData.teamName}>
                                    <Row className='Member-Row'>
                                    </Row>
                                    <Row className='Member-Row' >
                                    </Row>
                                </div>
                            )
                        }
                    })
                }
            </Row>
        </Container>
    );
}

export default Members;