import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function SlackLink({link, name}) {
    return (
        <>
            <a href={link} target='_blank'>{name}</a>
        </>
    );
}

export default SlackLink;
