import './App.css'
import Imagen from './Imagen.jpeg'


export default function Card() {

    return <div className='card'>
        <header>
            <img src={Imagen} alt="Imagen de perfil" className='imagen'/>
        </header>
        <section>
        Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </section>
    </div>
}