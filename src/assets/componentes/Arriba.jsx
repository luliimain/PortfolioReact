import {
    Box, Image
} from '@chakra-ui/react';
export default function Arriba() {
    return (
        <>
            <div className='arriba'>
                <div className="Nombre">
                    <h1 className="nom">
                        LMain | <br />
                        Software Developer
                    </h1>



                    <Box>
                        <Image
                            boxSize='250px'
                            src="/src/assets/componentes/archivos/fotos/memo.png"
                            alt='Dan Abramov'
                            className='memo2'
                        />
                    </Box>

                </div>
                <div className='parrafo'><p className='par'>TECNICA UNIVERSITARIA EN PROGRAMACIÓN</p></div>
                
            </div>
        </>
    )
}