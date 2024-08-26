import React, { useState } from 'react';
import { Switch, Stack, Tooltip } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'


export default function Footer() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
        cambiarFondo(e.target.checked);
    };

    return (
        <footer id="foot">
            <div className="foote">


            
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
