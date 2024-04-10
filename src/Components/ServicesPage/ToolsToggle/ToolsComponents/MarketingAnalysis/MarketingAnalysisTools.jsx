import React from 'react';
import { Container, Image, Table } from 'react-bootstrap';
import image1 from "../../../../../assets/ServicePage/Power BI.png"
import image2 from "../../../../../assets/ServicePage/Power Point.png"
import image3 from "../../../../../assets/ServicePage/MS Excel.png"
import image4 from "../../../../../assets/ServicePage/MS Word.png"
import image5 from "../../../../../assets/ServicePage/Google Slides.png"
import image6 from "../../../../../assets/ServicePage/Google Sheets.png"
import image7 from "../../../../../assets/ServicePage/Looker Studio.png"
import image8 from "../../../../../assets/ServicePage/Microsoft Forms.png"
import image9 from "../../../../../assets/ServicePage/My Sql Server.png"
import image10 from "../../../../../assets/ServicePage/MySql.png"
import image11 from "../../../../../assets/ServicePage/Google_Docs.png"

function MarketingAnalysisTools(props) {
    return (
        <Container style={{ backgroundColor: 'transparent', textAlign: "center", marginBottom: "8%" }}>
            <Table>
                <tr>
                    <td className='TableData'>
                        <Image src={image1} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image2} style={{ backgroundColor: 'transparent', maxWidth: '70%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image3} style={{ backgroundColor: 'transparent', maxWidth: '60%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image4} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                </tr>
                <tr>
                    <td className='TableData ' > <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Power BI</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Power Point</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>MS Excel</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>MS Word</div></td>
                </tr>
                <tr>
                    <td className='PhotosBetweenMargin'>
                        <div className='PhotosBetweenMargin' style={{ backgroundColor: 'transparent' }}></div>
                    </td>
                </tr>


                <tr>
                    <td className='TableData'>
                        <Image src={image5} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image6} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image7} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image8} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                </tr>
                <tr>
                    <td className='TableData' style={{ backgroundColor: 'transparent' }}> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Google Slides</div></td>
                    <td className='TableData'> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Google Sheets</div></td>
                    <td className='TableData'> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Looker Studio</div></td>
                    <td className='TableData'> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Microsoft Forms</div></td>

                </tr>
                <tr>
                    <td className='PhotosBetweenMargin'>
                        <div className='PhotosBetweenMargin' style={{ backgroundColor: 'transparent' }}></div>
                    </td>
                </tr>
                <tr>
                    <td className='TableData'>
                        <Image src={image11} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image9} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image10} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshMarketingAnalysis.png' />
                    </td>

                </tr>

                <tr>
                    <td className='TableData' style={{ backgroundColor: 'transparent' }}> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Google Docs</div></td>
                    <td className='TableData'> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}></div></td>
                    <td className='TableData'> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}></div></td>
                </tr>

            </Table>
        </Container>
    );
}

export default MarketingAnalysisTools;
