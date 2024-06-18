import {
    Box, Image
} from '@chakra-ui/react';
import memoo from '/src/assets/componentes/archivos/fotos/memo.png'
export default function Arriba() {
    return (
        <>
            <div className='arriba'>
                <div className="Nombre">
                    <h1 className="nom">
                        LMain | <br />
                        Software Developer
                    </h1>




                    <img src={memoo} alt="" className='memo2' />






                </div>
                <div className='parrafo'><p className='par'>TECNICA UNIVERSITARIA EN PROGRAMACIÓN</p></div>

            </div>
        </>
    )
}