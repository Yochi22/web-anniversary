import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer } from 'react-icons/fa'
import { BsArrowThroughHeartFill } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";
import { PiButterflyFill } from "react-icons/pi";
import { FaGift } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaKissWinkHeart } from "react-icons/fa";
import NavbarComponent from './NavbarComponent';
import '../styles/Timeline.css'

function Calendario() {
  return (
    <div className='principal-timeline'>
      <NavbarComponent />
      <br /> <br /> <br />
      <h2 className='title-timeline'>Algunos momentos que alteraron la química de mi cerebro</h2>
     <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
    date="10/09/2023 - presente"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaKissWinkHeart />}
  >
    <h3 className="vertical-timeline-element-title">Todos los días desde que te conozco</h3>
    <p className="vertical-timeline-element-subtitle">"Me siento en otro planeta y no sé si voy a volver" <br />Te amo cada día más</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="28/10/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdEmail  />}
  >
    <h3 className="vertical-timeline-element-title">Me enviaste un correo electrónico</h3>
    <p className="vertical-timeline-element-subtitle">Me escribiste una carta por correo electrónico que me hizo llorar.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="16/10/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GiLoveMystery />}
  >
    <h3 className="vertical-timeline-element-title">Me dijiste "te quiero" por primera vez</h3>
    <p className="vertical-timeline-element-subtitle">Antes de subirme al avión me dijiste que me quieres por primera vez. Estabas muy nerviosa y eliminaste el mensaje</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="10/10/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGift />}
  >
    <h3 className="vertical-timeline-element-title">Nuestro primer 10</h3>
    <p className="vertical-timeline-element-subtitle">Recordaste la fecha y me enviaste un desayuno a la casa con una cartita.</p>
   
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="30/09/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(33, 150, 243', color: '#fff' }}
    icon={<FaMusic />}
  >
    <h3 className="vertical-timeline-element-title">Here With Me</h3>
    <p className="vertical-timeline-element-subtitle">Me dijiste que despertar conmigo se sentiría como esa canción</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="18/09/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GiLovers />}
  >
    <h3 className="vertical-timeline-element-title">La primera vez que me dijiste amor</h3>
    <p className="vertical-timeline-element-subtitle">En realidad fue "amorcito" pero casi pierdo la cabeza.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="15/09/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">"¿Puedes darme tu cuerpo hoy?"</h3>
    <p className="vertical-timeline-element-subtitle">Creo que esto no necesita mucha explicación. Desde ese momento no deseo otra cosa</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="14/09/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<PiButterflyFill />}
  >
    <h3 className="vertical-timeline-element-title">Nuestra primera llamada</h3>
    <p className="vertical-timeline-element-subtitle">Estuvimos más de 4 horas al teléfono. Creo que ahí empecé a enamorarme. </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="10/09/2023"
    dateClassName={ 'clase-fecha' }
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<RiCellphoneFill />}
  >
    <h3 className="vertical-timeline-element-title">El día que hablamos por primera vez</h3>
    <p className="vertical-timeline-element-subtitle">Necesitaba seguir conociéndote.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<BsArrowThroughHeartFill/>}
  />
</VerticalTimeline>
    </div>
  )
}

export default Calendario