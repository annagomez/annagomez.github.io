import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './parallax.module.css';


function FrontHero() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <div className={styles.headerbox}>
            <p className={styles.header}>Anna Gomez</p>
            <p>Remember my name</p>
        </div>
    );
}

export default FrontHero;
