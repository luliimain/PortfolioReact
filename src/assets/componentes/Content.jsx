import { Carousel } from 'react-bootstrap';

function ExampleCarouselImage({ titulo, texto, link }) {
    return (
        <>

            <div className="card">
                <div id="text">
                    <span>{titulo}</span>
                    <h1 id="subtitle">{texto}</h1>
                </div>
                <div className="icons">
                    <a className="btn" href={link} target='blank' >
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411" fill="#FF1493"></path>
                        </svg>
                    </a>

                </div>
            </div>
        </>
    );
}
function UncontrolledExample() {
    return (
        <>
            <Carousel>
                <Carousel.Item className='item'>
                    <div className='proyectos'>
                        <ExampleCarouselImage titulo='ABM Simple' texto='React+Python+HTML+
                    CSS+PostgreSQL
                    +SqlAlchemy' link='https://github.com/luliimain/proyecto-lab' />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                <div className='proyectos'>
                    <ExampleCarouselImage titulo='Software S.I.G.A.P' texto='Java+Html+CSS+
                JavaScript+PostgreSQL' link='/src/assets/componentes/archivos/Sigap/sigap.html' />
                </div>

                </Carousel.Item>
                <Carousel.Item>
                <div className='proyectos'>
                    <ExampleCarouselImage titulo='juego de la memoria' texto='HTML+CSS+Vanilla' link='src/assets/componentes/archivos/juegoMemoria/juegodelamemoria.html' />
</div>
                </Carousel.Item>
            </Carousel>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="true"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin="true"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="true"></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
        </>
    );
}
export default function Content() {
    return (
        <>

            <div className="content" id="cont">
                <div className="titulo">
                    <h1 className="proyecto">
                    PROJECTS
                    </h1>
                </div>

                <UncontrolledExample />

            </div >

        </>
    )


}