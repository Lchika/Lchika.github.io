import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '本団体について',
    description: (
      <>
        本団体は、電子工作が好きな人の集まりです。
        主に愛知県周辺のメイカーイベントに出展していたりします。
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
