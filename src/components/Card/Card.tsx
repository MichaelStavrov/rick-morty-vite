import React from 'react';
import styles from './Card.module.scss';

export interface CardRow {
  id: string;
  text: string;
  title: string;
}

interface CardProps {
  data: CardRow[];
  image?: string;
}

const Card = ({ data, image }: CardProps) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt='name' />}
      <ul>
        {data.map(({ id, text, title }) => (
          <li key={id} className={styles.row}>
            <span className={styles.title}>{title}</span>
            {!text || text === 'unknown' ? '?' : text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
