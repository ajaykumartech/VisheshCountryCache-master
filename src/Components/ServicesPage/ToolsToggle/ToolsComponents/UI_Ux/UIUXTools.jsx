import React from 'react';
import image1 from "../../../../../assets/ServicePage/Figma.png"
import image2 from "../../../../../assets/ServicePage/Adobe XD.png"
import image3 from "../../../../../assets/ServicePage/Miro.png"
import image4 from "../../../../../assets/ServicePage/Notion.png"
import { Container, Image, Table } from 'react-bootstrap';


function UIUXTools(props) {
    return (
        <Container style={{ backgroundColor: 'transparent', textAlign: "center", marginBottom: "8%" }}>
            <Table>
                <tr>
                    <td className='TableData'>
                        <Image src={image1} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshuiux.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image2} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshuiux.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image3} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshuiux.png' />
                    </td>
                    <td className='TableData'>
                        <Image src={image4} style={{ backgroundColor: 'transparent', maxWidth: '100%', height: 'auto' }} alt='visheshuiux.png' />
                    </td>
                </tr>
                <tr>
                    <td className='TableData ' > <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Figma</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Adobe XD</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Miro</div></td>
                    <td className='TableData '> <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Notion</div></td>
                </tr>
            </Table>
        </Container>
    );
}

export default UIUXTools;