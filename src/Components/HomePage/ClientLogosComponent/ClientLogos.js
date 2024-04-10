import React from 'react'
import './ClientLogos.css'
import Logo1 from '../../../assets/HomePage/Anion.svg'
import Logo2 from '../../../assets/HomePage/Jajimalli.svg'
import Logo3 from '../../../assets/HomePage/Sri chaitanya.svg'
import Logo4 from '../../../assets/HomePage/ultimates roofing.svg'
import Logo5 from '../../../assets/HomePage/Nimmagadda.svg'
import Logo6 from '../../../assets/HomePage/laksmi ganapthi.svg'
import Logo7 from '../../../assets/HomePage/KMV.svg'
import Logo8 from '../../../assets/HomePage/Madhoos Classic.svg'
import Logo9 from '../../../assets/HomePage/ERS.svg'
import Logo10 from '../../../assets/HomePage/piersoft.svg'
import Logo11 from '../../../assets/HomePage/Terrang Color 1.svg'
import Logo12 from '../../../assets/HomePage/Purple petal.svg'
import Logo13 from '../../../assets/HomePage/Sanjivi.svg'
import Logo14 from '../../../assets/HomePage/Ekantika.svg'

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14]

function ClientLogos() {
    return (
        <div className='slider'>
            <div className='logos-gradient'></div>
            <div className='logos-gradient1'></div>
            <div className='slide-track'>
                {logos.map((logo, index) => (
                    <div className='slide'key={index} >
                        <img src={logo} className='client-logo-img' alt={`visheshclientlogo.png`} />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div className='slide'key={index} >
                        <img src={logo} className='client-logo-img' alt={`visheshclientlogo.png`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientLogos