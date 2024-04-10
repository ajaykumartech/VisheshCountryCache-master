import React, { useState, useEffect, useRef } from 'react';
import "./Numbers.css";
import { Container, Row, Col } from 'react-bootstrap';

function Numbers(props) {
    const [getDaysCount, setDaysCount] = useState(0);
    const [getMembers, setMembers] = useState(0);

    const [isIntersecting, setIsIntersecting] = useState(false);
    const setDate = new Date("2016-01-01")
    const todaysDate = new Date();
    const daysCompleted = Math.floor((todaysDate - setDate) / (1000 * 60 * 60 * 24));

    const countingRef = useRef(null);
    const handleIntersection = (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
    };

    // Effect to set up the intersection observer
    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust as needed
        };
        const countRef = countingRef.current
        const observer = new IntersectionObserver(handleIntersection, options);

        if (countRef) {
            observer.observe(countRef);
        }

        return () => {
            if (countRef) {
                observer.unobserve(countRef);
            }
        };
    }, []);

    // Effect to count experience and warranty years
    useEffect(() => {
        if (isIntersecting) {
            const intervalMembers = setInterval(() => {
                setMembers((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
            }, 50);

            const intervalDaysCount = setInterval(() => {
                setDaysCount((prevCount) => (prevCount < daysCompleted ? prevCount + 234 : daysCompleted));
            }, 50);


            return () => {
                clearInterval(intervalMembers);
                clearInterval(intervalDaysCount);
            };
        }
    }, [isIntersecting, getMembers, getDaysCount, daysCompleted]);

    return (
        <div ref={countingRef}>
            <Container fluid className='NumberContainer'>
                <Row>
                    <Col><h3 className='NumberContainer-h3'>Numbers</h3></Col>
                </Row>
                <Row style={{ padding: "0% 1.2%" }}>
                    <Col lg={4} md={4} sm={12}>
                        <Col><div><h5 className='NumberContainer-h5'>{getDaysCount} Days</h5></div></Col>
                        <Col><div><p className='NumberContainer-p'>in Business since 2016</p></div></Col>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Col><div><h5 className='NumberContainer-h5'>{getMembers}+ Members</h5></div></Col>
                        <Col><div><p className='NumberContainer-p'>and we never stop growing</p></div></Col>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Col><div><h5 className='NumberContainer-h5'>600+ Projects</h5></div></Col>
                        <Col><div><p className='NumberContainer-p'>and we are not stopping</p></div></Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Numbers;