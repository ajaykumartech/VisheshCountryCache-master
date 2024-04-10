import React, { useRef, useState } from 'react';
import "./ProjectsScrolling.css"
import { Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import CreativeDesignImage1 from '../../../assets/WorkPage/Brochure Mockup.avif';
import CreativeDesignImage2 from '../../../assets/WorkPage/Business Card Mockups.avif';
import CreativeDesignImage3 from '../../../assets/WorkPage/Business Card Mockups-2.avif';
import CreativeDesignImage4 from '../../../assets/WorkPage/Logo-Mockup.avif';
import CreativeDesignImage5 from '../../../assets/WorkPage/Logo-Ultimates-Mockup.avif';
import CreativeDesignImage6 from '../../../assets/WorkPage/Stand-Up-Banner.avif';
import CreativeDesignImage7 from '../../../assets/WorkPage/Website-Mockup.avif';

import DevelopmentProjectsImage1 from '../../../assets/WorkPage/Innowise.avif';
import DevelopmentProjectsImage2 from '../../../assets/WorkPage/KMV.avif';
import DevelopmentProjectsImage3 from '../../../assets/WorkPage/Quiz_01.avif';

import AnalysisProjectsImage1 from '../../../assets/WorkPage/CRM Dashboard.avif';
import AnalysisProjectsImage2 from '../../../assets/WorkPage/CRM_02.avif';
import AnalysisProjectsImage3 from '../../../assets/WorkPage/Fashion Industry.avif';
import AnalysisProjectsImage4 from '../../../assets/WorkPage/Jajimalli Portfoilo.avif';
import AnalysisProjectsImage5 from '../../../assets/WorkPage/Restaurants-Portfolio.avif';

import MarketingProjectsImage1 from '../../../assets/WorkPage/02_1.avif';
import MarketingProjectsImage2 from '../../../assets/WorkPage/Happy Client.avif';
import MarketingProjectsImage3 from '../../../assets/WorkPage/Jajimalli-Posters_01.avif';
import MarketingProjectsImage4 from '../../../assets/WorkPage/Jajimalli.avif';
import MarketingProjectsImage5 from '../../../assets/WorkPage/News-Letters.avif';

import UI_UxProjectsImage1 from '../../../assets/WorkPage/KMV_02.avif';
import UI_UxProjectsImage3 from '../../../assets/WorkPage/Sri-Chaitanaya.avif';
import UI_UxProjectsImage4 from '../../../assets/WorkPage/Ultimates.avif';

const CreativeDesignProjects = [
    { images: [CreativeDesignImage4], ProjectName: "Nimmagadda", ProjectType: "Creative Design / Branding / Logo" },
    { images: [CreativeDesignImage5], ProjectName: "Ultimates Roofing", ProjectType: "Creative Design / Branding / Logo" },
    { images: [CreativeDesignImage3], ProjectName: "Sri Chaitanya Ortho & Eye", ProjectType: "Creative Design / Branding / Business Card" },
    { images: [CreativeDesignImage6], ProjectName: "Stand Up Banner", ProjectType: "Creative Design / Banner Ads" },
    { images: [CreativeDesignImage2], ProjectName: "Business Cards", ProjectType: "Creative Design / Branding / Business Cards" },
    { images: [CreativeDesignImage1], ProjectName: "Brochure", ProjectType: "Creative Design / Brochure" },
    { images: [CreativeDesignImage7], ProjectName: "Instagram Post", ProjectType: "Creative Design / Social Media Ads" },
    { images: [MarketingProjectsImage2], ProjectName: "Instagram Poster", ProjectType: "Creative Design / Social Media Ads / Poster" },
    { images: [MarketingProjectsImage4], ProjectName: "Jajimalli", ProjectType: "Creative Design / Banner Ads" }
]

const AnalysisProjects = [
    { images: [AnalysisProjectsImage1], ProjectName: "Agency Dashboard", ProjectType: "Marketing Analysis / Custom Dashboard" },
    { images: [AnalysisProjectsImage2], ProjectName: "CRM Dashboard", ProjectType: "Marketing Analysis / Custom Dashboard" },
    { images: [AnalysisProjectsImage3], ProjectName: "Fashion Industry Presentation", ProjectType: "Marketing Analysis / Presentation" },
    { images: [AnalysisProjectsImage4], ProjectName: "Jajimalli Dashboard", ProjectType: "Marketing Analysis / Custom Dashboard" },
    { images: [AnalysisProjectsImage5], ProjectName: "Restaurant Portfoilo", ProjectType: "Marketing Analysis / Presentation" },
]
const MarketingProjects = [
    { images: [MarketingProjectsImage1], ProjectName: "Newsletter", ProjectType: "Digital Marketing / E-mail Marketing / Newsletter" },
    { images: [MarketingProjectsImage3], ProjectName: "Jajimalli", ProjectType: "Digital Marketing / Social Media Marketing" },
    { images: [MarketingProjectsImage5], ProjectName: "Newsletter", ProjectType: "Digital Marketing / E-mail Marketing / Newsletter" }
]
const DevelopmentProjects = [
    { images: [UI_UxProjectsImage3], ProjectName: "Sri Chaitanya Ortho & Eye", ProjectType: "Web Development / Website" },
    { images: [UI_UxProjectsImage4], ProjectName: "Ultimates Roofing", ProjectType: "Web Development / Website / Mobile App" },
    { images: [DevelopmentProjectsImage1], ProjectName: "InnoWise LLC", ProjectType: "Web Development / Dashboard" },
    { images: [DevelopmentProjectsImage2], ProjectName: "KMV Construction", ProjectType: "Web Development / Website" },
    { images: [UI_UxProjectsImage1], ProjectName: "KMV Construction", ProjectType: "Web Development / Website" },
    { images: [DevelopmentProjectsImage3], ProjectName: "Quiz", ProjectType: "Web Development / Recruitment  Portal" },
]
const UI_UxProjects = [
    { images: [UI_UxProjectsImage3], ProjectName: "Sri Chaitanya Ortho & Eye", ProjectType: "UI/UX / Web Design / Prototype" },
    { images: [UI_UxProjectsImage4], ProjectName: "Ultimates Roofing", ProjectType: "UI/UX / Web Design / Prototype / Mobile App Design" },
    { images: [UI_UxProjectsImage1], ProjectName: "KMV Construction", ProjectType: "UI/UX / Web Design / Prototype" }
]

const AllProjects = [
    { images: [CreativeDesignImage4], ProjectName: "Nimmagadda", ProjectType: "Creative Design / Branding / Logo" },
    { images: [CreativeDesignImage5, UI_UxProjectsImage4], ProjectName: "Ultimates Roofing", ProjectType: "Creative Design / UI/UX / Web Development / Mobile App " },
    { images: [CreativeDesignImage3, UI_UxProjectsImage3], ProjectName: "Sri Chaitanya Ortho & Eye", ProjectType: "Creative Design / UI/UX / Web Development " },
    { images: [CreativeDesignImage6], ProjectName: "Stand Up Banner", ProjectType: "Creative Design / Banner Ads" },
    { images: [CreativeDesignImage2], ProjectName: "Business Cards", ProjectType: "Creative Design / Branding / Business Cards" },
    { images: [CreativeDesignImage1], ProjectName: "Brochure", ProjectType: "Creative Design / Brochure" },
    { images: [MarketingProjectsImage4, CreativeDesignImage7, MarketingProjectsImage2, MarketingProjectsImage3], ProjectName: "Jajimalli", ProjectType: "Creative Design / Banner Ads / Social Media Marketing " },
    { images: [UI_UxProjectsImage1, DevelopmentProjectsImage2], ProjectName: "KMV Construction", ProjectType: "UI/UX / Web Development" },
    { images: [DevelopmentProjectsImage1], ProjectName: "InnoWise LLC", ProjectType: "Web Development / Dashboard" },
    { images: [DevelopmentProjectsImage3], ProjectName: "Quiz", ProjectType: "Web Development / Recruitment  Portal" },
    { images: [MarketingProjectsImage1, MarketingProjectsImage5], ProjectName: "Newsletter", ProjectType: "Digital Marketing / E-mail Marketing / Newsletter" },
    ...AnalysisProjects
]
function ProjectsScrolling(props) {

    const [ProjectTeamClicks, setProjectTeamClisks] = useState([1, 0, 0, 0, 0]);
    const [Projects, setProjects] = useState(AllProjects);

    const Ref = useRef(null);
    const scrolling = (index, value) => {
        const scrollPosition = Ref.current.scrollLeft;
        if (ProjectTeamClicks.indexOf(1) > index) {
            document.querySelector(".ProjectsScrolling-container-row").scrollTo({
                left: -value + scrollPosition,
                behavior: 'smooth'
            });

        }
        else if (ProjectTeamClicks.indexOf(1) < index) {
            document.querySelector(".ProjectsScrolling-container-row").scrollTo({
                left: value + scrollPosition,
                behavior: 'smooth'
            });

        }

    }

    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        setProjectTeamClisks([...temp]);
        switch (index) {
            case 0: setProjects(AllProjects); scrolling(index, 100); break;
            case 1: setProjects(CreativeDesignProjects); scrolling(index, 100); break;
            case 2: setProjects(UI_UxProjects); scrolling(index, 120); break;
            case 3: setProjects(DevelopmentProjects); scrolling(index, 150); break;
            case 4: setProjects(MarketingProjects); scrolling(index, 150); break;
            case 5: setProjects(AnalysisProjects); scrolling(index, 250); break;
            default: ;
        }

    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust the speed of transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        vertical: false, // Set to true for vertical scrolling

    };
    return (
        <Container fluid className='ProjectsScrolling-container'>
            <div className='ProjectsScrolling-container-row' ref={Ref}>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(0) }} >
                    <div className={"ProjectsScrolling-teamName AllProject " + (ProjectTeamClicks[0] && ' ProjectsScrolling-teamName-active')} >All Projects</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(1) }} >
                    <div className={'ProjectsScrolling-teamName CreativeDesign ' + (ProjectTeamClicks[1] && 'ProjectsScrolling-teamName-active')} >Creative Design</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(2) }} >
                    <div className={'ProjectsScrolling-teamName UIUXDesign ' + (ProjectTeamClicks[2] && 'ProjectsScrolling-teamName-active')} >UI/UX Design</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(3) }} >
                    <div className={'ProjectsScrolling-teamName FullStackDevelopment ' + (ProjectTeamClicks[3] && 'ProjectsScrolling-teamName-active')} >Full Stack Development</div>
                </div>
                <div className='ProjectsScrolling-container-row-col ' onClick={() => { handlClicks(4) }} >
                    <div className={'ProjectsScrolling-teamName DigitalMarketing ' + (ProjectTeamClicks[4] && 'ProjectsScrolling-teamName-active')}>Digital Marketing</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(5) }} >
                    <div className={'ProjectsScrolling-teamName MarketingAnalysis ' + (ProjectTeamClicks[5] && 'ProjectsScrolling-teamName-active')} >Marketing Analysis</div>
                </div>
            </div>
            <Row>
                {
                    Projects.map((project, index) => {
                        if (project) {
                            return (
                                <div className='ProjectsScrolling-card-container' key={"images" + index}>
                                    {
                                        project.images.length !== 1 ? (
                                            <Slider {...settings}  >
                                                {(project.images).map((image, index) => {
                                                    return (
                                                        <img src={image} key={index + "image"} alt={"visheshProject" + { index } + ".png"} className='ProjectsScrolling-images' style={{ outline: "none", border: "none" }} />
                                                    )
                                                })}
                                            </Slider>) :
                                            <div>
                                                <img src={project.images[0]} alt={"visheshProject" + { index } + ".png"} className='ProjectsScrolling-images' />
                                            </div>
                                    }

                                    <div style={{ marginTop: "1.5rem" }}>
                                        <h5 className='services-heading service-team-heading'>{project.ProjectName}</h5>
                                    </div>
                                    <div style={{ marginTop: "0.5rem" }}>
                                        <p className='home-about-para'>{project.ProjectType}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (<></>)
                        }
                    })
                }

            </Row>
        </Container>
    );
}

export default ProjectsScrolling;