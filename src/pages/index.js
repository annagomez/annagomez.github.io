import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './parallax.module.css';

import FrontHero2 from './FrontHero2';
import MainArea from "./MainArea";
import Footer from "./Footer";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Start`}
      description="Anna Gomez homepage">
        <div className={styles.parallax}>
            <FrontHero2 />
            <MainArea />
            {/*<Footer />*/}
        </div>
    </Layout>
  );
}

export default Home;
