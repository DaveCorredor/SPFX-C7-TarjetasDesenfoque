import * as React from 'react';
import styles from './TarjetasDesenfoque.module.scss';
import type { ITarjetasDesenfoqueProps } from './ITarjetasDesenfoqueProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TarjetasDesenfoque extends React.Component<ITarjetasDesenfoqueProps, {}> {
  public render(): React.ReactElement<ITarjetasDesenfoqueProps> {
    const {
      etiqueta1,
      titulo1,
      fondo1,
      etiqueta2,
      titulo2,
      fondo2,
      etiqueta3,
      titulo3,
      fondo3,
      etiqueta4,
      titulo4,
      fondo4,
    } = this.props;

    return (
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          <a className={styles.card} href="#">
            <div className={styles.cardBackground} style={{ backgroundImage: `url(${fondo1})` }}></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>{escape(etiqueta1)}</p>
              <h3 className={styles.cardHeading}>{escape(titulo1)}</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div className={styles.cardBackground} style={{ backgroundImage: `url(${fondo2})` }}></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>{escape(etiqueta2)}</p>
              <h3 className={styles.cardHeading}>{escape(titulo2)}</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div className={styles.cardBackground} style={{ backgroundImage: `url(${fondo3})` }}></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>{escape(etiqueta3)}</p>
              <h3 className={styles.cardHeading}>{escape(titulo3)}</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div className={styles.cardBackground} style={{ backgroundImage: `url(${fondo4})` }}></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>{escape(etiqueta4)}</p>
              <h3 className={styles.cardHeading}>{escape(titulo4)}</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
