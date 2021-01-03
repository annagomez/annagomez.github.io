import React from 'react';
import Link from '@docusaurus/Link';
import styles from './parallax.module.css';

const features = [
    {
        title: <>Skådespelare</>,
        subheading: 'Teater, filmskådespeleri & improvisationsteater',
        to: 'docs/acting',
        css: styles.acting_img,
        description: (
            <>
                Jag är amatörskådespelare med erfarenhet av teaterföreställningar, filmskådespeleri i serier samt reklamfilm.
            </>
        ),
    },
    {
        title: <>Utvecklare</>,
        subheading: 'Agil arbetsmetodik & tjänsteutveckling',
        to: 'docs/work',
        css: styles.work_img,
        description: (
            <>
                I över ett decenium har jag jobbat med web- och tjänsteutveckling främst som backendutvecklare och scrum master.<br/>
                Jag är sann ambassadör för agila arbetsmetoder.
                Att jobba agilt handlar om mindset!<br/>
                Just nu jobbar jag som produktägare för ett SVT Play-team.

            </>
        ),
    },
    {
        title: <>Karateka</>,
        subheading: 'Karatedomare & instruktör',
        to: 'docs/karate',
        css: styles.karate_img,
        description: (
            <>
                Jag har svart bälte, 1 dan i Wado Ryu Karate-Do, och är domare hos Svenska karateförbundet.<br/>
                Jag har tidigare instruerat nybörjarbarn och -vuxna i grunderna i karate.
            </>
        ),
    },
    {
        title: <>DJ</>,
        subheading: 'Privata fester & företagsevent',
        to: 'docs/dj',
        css: styles.dj_img,
        description: (
            <>
                I ca 8 år har jag DJ:at på privata fester, studentfester, företagsevent samt på bar och hotell i Stockholm.<br/>
                Jag ingår i DJ-duon TwoTimesAnna.
            </>
        ),
    }
];


function MainArea() {
    return (
       <>
         {features && features.length && (
             <>
                 {features.map((props, idx) => (
                     <>
                     <div className={props.css}>
                         <div className={styles.infobox}>
                             <Link to={props.to}>
                                <span>{props.title}</span>
                             </Link>
                         </div>
                     </div>

                     <div className={styles.textbox}>
                         <h2>{props.subheading}</h2>
                         <p>{props.description}</p>
                         <div className={styles.button}>
                             <Link to={props.to}>Läs mer</Link>
                         </div>
                     </div>
                     </>
             ))}
             </>
         )}
         </>
    );
}

export default MainArea;
