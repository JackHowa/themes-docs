import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Composable',
    Svg: require('../../static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Themes is designed to be built on by your developers.
      </>
    ),
  },
  {
    title: 'Opting Into Performance',
    Svg: require('../../static/img/undraw_speed_test_wxl0.svg').default,
    description: (
      <>
       Themes developers focus on Core Web Vitals metrics that'll make your users happy.
      </>
    ),
  },
  {
    title: 'Customizable Out Of The Box',
    Svg: require('../../static/img/undraw_add_color_-19-gv.svg').default,
    description: (
      <>
        Setup color scheme and typography with a few clicks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
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
