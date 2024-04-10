import { useEffect, useState, useRef } from 'react';
import "./PhysicsEffect.css"

function PhysicsEffect() {

    const [getXPosition, setXPosition] = useState(0);
    const [getYPosition, setYPosition] = useState(0);
    const [getObject, setObject] = useState("object1");
    const [objectSelected, setObjectSelcte] = useState(false);
    const [getObjectPosition, setObjectPosition] = useState([])
    const [isIntersecting, setIsIntersecting] = useState(false);
    const countingRef = useRef(null);

    const width = window.innerWidth;
    const clickHandle = (ObjectclassName) => {
        console.log(getObjectPosition);
        console.log(getXPosition, getYPosition);
        setObject(ObjectclassName)
        setObjectSelcte(() => { return true })
    }

    const clickHandleRemove = (ObjectclassName) => {
        setObjectSelcte(() => { return false })
        fallingObject(ObjectclassName)
    }

    const getYaxis = () => {

    }

    const fallingObject = (ObjectclassName) => {
        const height = document.querySelector(".PhysicsEffect-Container").scrollHeight;
        document.querySelector(`.${ObjectclassName}`).style.transition = "1s ease-in-out";
        // document.querySelector(`.${ObjectclassName}`).style.transform = `rotate(${Math.floor(Math.random() * 500)}deg)`;
        const getHeight = getYaxis();
        document.querySelector(`.${ObjectclassName}`).style.transform = `translate(${getXPosition}px,${height - 80}px) `;

        let ObjectPosition = getObjectPosition
        ObjectPosition[ObjectclassName.slice(-1)] = ({ x: getXPosition, y: height - 80 })
        setObjectPosition(ObjectPosition);
    }



    const handleIntersection = (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
    };
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

    useEffect(() => {


        if (isIntersecting) {
            var Start = () => {
                document.querySelector(".PhysicsEffect-Container").addEventListener("mousemove", (e) => {
                    setXPosition(e.layerX);
                    setYPosition(e.layerY);

                })

                console.log(document.querySelector(".PhysicsEffect-Container").scrollHeight);
                document.querySelector(".PhysicsEffect-Container").width = window.innerWidth
                const height = document.querySelector(".PhysicsEffect-Container").scrollHeight;
                for (let i = 1; i <= 8; i++) {
                    document.querySelector(`.object${i}`).style.transform = `rotate(${(i > 4 ? 1 : -1) + Math.floor(Math.random() * (180 - 45 + 1) + 45)}deg)`;
                    document.querySelector(`.object${i}`).style.left = `${Math.floor(Math.random() * (50 - 40 + 1) + 40)}%`;
                }

                setTimeout(() => {
                    for (let i = 1; i <= 8; i++) {
                        let Xaxis = () => {
                            var x = Math.floor(Math.random() * width - 500);
                            if (x < window.innerWidth && x > 10) {
                                return x;
                            }
                            else {
                                return (window.innerWidth / 2);
                            }
                        };
                        document.querySelector(`.object${i}`).style.left = `0%`;
                        document.querySelector(`.object${i}`).style.transform = `translate(${Xaxis()}px,${height - 80}px)`;
                        let ObjectPosition = getObjectPosition
                        ObjectPosition[i] = ({ x: Xaxis, y: height - 80 })
                        setObjectPosition(ObjectPosition);
                    }
                }, 1000)
            }
            Start();
        }


    }, [isIntersecting])

    useEffect(() => {
        if (objectSelected) {

            document.querySelector(`.${getObject}`).style.transform = `translate(${getXPosition - (getXPosition / 10)}px,${getYPosition - (getYPosition / 10)}px)`;
            document.querySelector(`.${getObject}`).style.transition = "0s ease-in-out";
            if (getXPosition <= 20 || getYPosition <= 20 || getXPosition >= window.innerWidth - 200) {
                clickHandleRemove(getObject);
            }
            console.log(getObject, getXPosition, getYPosition)
        }
    }, [objectSelected, getObject, getXPosition, getYPosition])

    var objectPresser = () => {
        const height = document.querySelector(".PhysicsEffect-Container").scrollHeight;
        let Xaxis = () => {
            var x = Math.floor(Math.random() * (width - 500) - (width - 200) + 1) + (width - 200);
            if (x < window.innerWidth && x > 10) {
                return x;
            }
            else {
                return (window.innerWidth / 2);
            }
        }
        var xpositions = []
        for (let i = 1; i <= 8; i++) {
            let Xposition = Xaxis();
            xpositions[i] = Xposition;
            // document.querySelector(`.object${i}`).style.transform = `rotate(${(i > 4 ? 1 : -1) + Math.floor(Math.random() * (180 - 45 + 1) + 45)}deg)`;
            document.querySelector(`.object${i}`).transition = "2s ease-in-out";
            document.querySelector(`.object${i}`).style.transform = `translate(${Xposition}px,${Math.random() * ((height - 80) - (height - 1000) + 1) + (height - 1000)}px)`;
        }
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                document.querySelector(`.object${i}`).style.transition = "2s ease-in-out";
                document.querySelector(`.object${i}`).style.transform = `translate(${xpositions[i]}px,${height - 80}px)`;
                console.log(xpositions[i]);
            }
        }, 800)
    }

    return (
        <div className="PhysicsEffect-Container" onMouseUp={() => { clickHandleRemove(getObject) }} ref={countingRef} onClick={() => { objectPresser() }}>
            <div className='object object1' onMouseDown={() => { clickHandle("object1") }} onMouseUp={() => { clickHandleRemove("object1") }}>
                <h3 className='object-Text'>object1</h3>
            </div>
            <div className='object object2' onMouseDown={() => { clickHandle("object2") }} onMouseUp={() => { clickHandleRemove("object2") }}>
                <h3 className='object-Text'>object2</h3>
            </div>
            <div className='object object3' onMouseDown={() => { clickHandle("object3") }} onMouseUp={() => { clickHandleRemove("object3") }}>
                <h3 className='object-Text'>object3</h3>
            </div>
            <div className='object object4' onMouseDown={() => { clickHandle("object4") }} onMouseUp={() => { clickHandleRemove("object4") }}>
                <h3 className='object-Text'>object4</h3>
            </div>
            <div className='object object5' onMouseDown={() => { clickHandle("object5") }} onMouseUp={() => { clickHandleRemove("object5") }}>
                <h3 className='object-Text'>object5</h3>
            </div>
            <div className='object object6' onMouseDown={() => { clickHandle("object6") }} onMouseUp={() => { clickHandleRemove("object6") }}>
                <h3 className='object-Text'>object6</h3>
            </div>
            <div className='object object7' onMouseDown={() => { clickHandle("object7") }} onMouseUp={() => { clickHandleRemove("object7") }}>
                <h3 className='object-Text'>object7</h3>
            </div>
            <div className='object object8' onMouseDown={() => { clickHandle("object8") }} onMouseUp={() => { clickHandleRemove("object8") }}>
                <h3 className='object-Text'>object8</h3>
            </div>
        </div>
    );
}

export default PhysicsEffect;
