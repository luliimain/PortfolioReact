import React, { useState } from 'react';
import { Switch, Stack, Tooltip } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

function cambiarFondo(isChecked) {
    const fondo = document.getElementById('fondo');
    const carta = document.getElementById('carta');
    const subtitle = document.getElementById('subtitle');
    if (fondo) {
        if (isChecked) {

            carta.style.background = 'linear-gradient(0deg, rgba(177,141,187,0.5) 4%, rgba(213,185,216,0.5) 20%, rgba(240,208,238,0.5) 35%, rgba(253,247,255,0.5) 98%)';
            fondo.style.background = 'linear-gradient(0deg, rgba(177,141,187,0.5) 17%, rgba(213,185,216,0.5) 42%, rgba(240,208,238,0.5) 64%, rgba(253,247,255,0.5) 86%)';

        } else {

            carta.style.background = 'linear-gradient(0deg, rgba(194,216,185,1) 4%, rgba(228,240,208,1) 20%, rgba(243,247,230,1) 35%, rgba(255,252,247,1) 98%)';
            fondo.style.background = 'linear-gradient(0deg, rgba(141,187,148,0.5) 17%, rgba(194,216,185,0.5) 42%, rgba(228,240,208,0.5) 64%, rgba(255,252,247,0.5) 86%)';
        }
    } else {
        console.error("Elemento con ID 'fondo' no encontrado");
    }
}

export default function Footer() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
        cambiarFondo(e.target.checked);
    };

    return (
        <footer id="foot">
            <div className="foote">

                <div className="sociales">

                    <div className='contacto'>
                        <div >
                            <Tooltip>
                                <a href="https://github.com/luliimain" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='logoAbajo' viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM15.9299 8.25017C15.7204 8.25293 15.1872 8.34452 14.2695 9.03471C14.2361 9.05985 14.2022 9.08578 14.1678 9.11252C14.0704 9.18836 13.9431 9.21015 13.8277 9.17457L13.8253 9.17382C13.7671 9.15592 13.7088 9.13888 13.6504 9.12272C12.5651 8.82255 11.4349 8.82255 10.3496 9.12272C10.2882 9.13972 10.2268 9.15768 10.1657 9.17661L10.1644 9.17703C10.0529 9.21205 9.93139 9.19 9.83937 9.11807C9.80249 9.08937 9.76619 9.0616 9.73045 9.03473C8.81228 8.34432 8.27679 8.2528 8.0659 8.25016C7.86561 8.86863 7.84087 9.54684 7.99569 10.1834C8.00513 10.2222 8.01523 10.2608 8.02599 10.2993L8.02812 10.3068C8.05962 10.4184 8.03648 10.538 7.96621 10.6297C7.9504 10.6503 7.93482 10.6711 7.91949 10.6922C7.48056 11.2949 7.23972 12.0687 7.25034 12.8714L7.25038 12.8747C7.25036 14.5643 7.68912 15.5564 8.29455 16.1566C8.90483 16.7616 9.72415 17.0085 10.5687 17.1233L10.604 17.1281L10.6078 17.1286C11.5456 17.2688 12.443 17.2601 13.3777 17.1014L13.3898 17.0997L13.4137 17.0968C14.2627 16.9938 15.0859 16.7572 15.6994 16.1583C16.3076 15.5644 16.7496 14.5738 16.7496 12.8747L16.7497 12.8714C16.7603 12.0687 16.5194 11.2949 16.0805 10.6922C16.0664 10.6728 16.0521 10.6537 16.0377 10.6347L16.0366 10.6333C15.9647 10.5393 15.941 10.4168 15.9731 10.3025C15.9842 10.263 15.9945 10.2234 16.0042 10.1835C16.1588 9.54654 16.1326 8.86788 15.9299 8.25017Z" fill="#323232" />
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" strokeWidth="2" />
                                        <path d="M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2637 8.8871 10.2444 8.89254 10.2252 8.89808C10.1067 8.93218 9.97923 8.909 9.8807 8.83491V8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491V8.83491C14.0208 8.90896 13.8933 8.93197 13.7748 8.89804C13.7556 8.89252 13.7363 8.8871 13.717 8.88177Z" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></a>
                            </Tooltip>
                        </div >
                        <div>
                            <Tooltip>
                                <a href="https://www.linkedin.com/in/lucia-main-63473b236/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='logoAbajo' viewBox="0 0 20 20">
                                        <path fill="#555" d="M17.0391667,17.0433333 L14.0775,17.0433333 L14.0775,12.4025 C14.0775,11.2958333 14.055,9.87166667 12.5341667,9.87166667 C10.99,9.87166667 10.7541667,11.0758333 10.7541667,12.3208333 L10.7541667,17.0433333 L7.7925,17.0433333 L7.7925,7.5 L10.6375,7.5 L10.6375,8.80083333 L10.6758333,8.80083333 C11.0733333,8.05083333 12.04,7.25916667 13.4841667,7.25916667 C16.485,7.25916667 17.04,9.23416667 17.04,11.805 L17.04,17.0433333 L17.0391667,17.0433333 Z M4.4475,6.19416667 C3.49416667,6.19416667 2.72833333,5.4225 2.72833333,4.47333333 C2.72833333,3.525 3.495,2.75416667 4.4475,2.75416667 C5.3975,2.75416667 6.1675,3.525 6.1675,4.47333333 C6.1675,5.4225 5.39666667,6.19416667 4.4475,6.19416667 Z M5.9325,17.0433333 L2.9625,17.0433333 L2.9625,7.5 L5.9325,7.5 L5.9325,17.0433333 Z M18.5208333,0 L1.47583333,0 C0.66,0 0,0.645 0,1.44083333 L0,18.5591667 C0,19.3558333 0.66,20 1.47583333,20 L18.5183333,20 C19.3333333,20 20,19.3558333 20,18.5591667 L20,1.44083333 C20,0.645 19.3333333,0 18.5183333,0 L18.5208333,0 Z" />
                                    </svg>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className='cambiador'>
                    <Stack className='stack' direction='row'>
                        <Switch size='lg' colorScheme='pink' id='cambio' isChecked={isChecked} onChange={handleChange} />
                    </Stack>
                </div>
                <div className='nombreAbajo' >
                    <h1 className='fot'>
                        LMain - Software Developer

                    </h1>
                    <div className='nombreTel'>
                        <Tooltip label='Phone number' fontSize='md'>
                            <PhoneIcon />
                        </Tooltip> + 54 3434475391<br />
                        <Tooltip label='Email' fontSize='md'>
                            <EmailIcon />
                        </Tooltip>  luciamain58@gmail.com
                    </div>
                </div>

            </div>
        </footer>
    );
}
