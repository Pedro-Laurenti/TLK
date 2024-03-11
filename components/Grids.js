import { useState } from 'react';
import styles from '../styles/index.module.css';

const Grid = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#BC000A', '#E8B100', '#0095A5', '#008E2B'];

  const elements = [
    { title: 'Terapia Intensiva com Protocolo PediaSuit', imageSrc: '' },
    { title: 'Fisioterapia com protocolo Bobath', imageSrc: '7-fig-oferecemos.jpg' },
    { title: 'Fonoaudiologia', imageSrc: '5-fig-oferecemos.jpg' },
    { title: 'Musicoterapia', imageSrc: '6-fig-oferecemos.jpg' },
    { title: 'Psicomotricidade', imageSrc: '7-fig-oferecemos.jpg' },
    { title: 'Terapia Ocupacional', imageSrc: '7-fig-oferecemos.jpg' },
    { title: 'Neuropsicopedagogia', imageSrc: '7-fig-oferecemos.jpg' },
    { title: 'Psicologia Infantil', imageSrc: '7-fig-oferecemos.jpg' },
    { title: 'Psicoterapia ABA', imageSrc: '7-fig-oferecemos.jpg' }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className="cell-pt-3"
          id={styles['cell-pt-3']}
        >
          <img src={element.imageSrc}
          alt="a"
          style={{ 
            borderColor: colors[(currentColorIndex + index) % colors.length],
            border: `2px solid ${colors[(currentColorIndex + index) % colors.length]}`,
          }}
          ></img>
          <h3>{element.title}</h3>
        </div>
      ))}
    </>
  );
}

export default Grid;