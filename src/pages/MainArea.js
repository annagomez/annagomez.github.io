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
                I över ett decenium har jag jobbat med web- och tjänsteutveckling främst som backendutvecklare och scrum master.
                Jag är sann ambassadör för agila arbetsmetoder.
                Att jobba agilt handlar om mindset!
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
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
                    orci dolor, condimentum in vehicula rhoncus, tincidunt a magna. Fusce imperdiet malesuada accumsan.
                    Duis blandit orci eu nibh vehicula elementum. Nam sem mauris, mollis et ullamcorper sit amet,
                    venenatis id urna. Nulla quis turpis sit amet justo adipiscing viverra vitae non dui. Nulla sodales
                    sodales sem a ornare. Nulla euismod dignissim erat, a aliquet dui hendrerit in. Cras vitae eros
                    pulvinar mi feugiat tincidunt et at nisl. Donec ac tortor vitae metus tempor lacinia. Phasellus
                    scelerisque pretium ligula consequat vehicula. Integer eros diam, mattis sed elementum vel, pretium
                    ac orci.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra, ligula in ullamcorper
                pulvinar, elit libero porta orci, nec tincidunt diam ante in leo. Nullam at lectus quam, vel
                molestie massa. Nunc dapibus tincidunt odio eget pulvinar. Nunc tempor eros sit amet erat feugiat
                sed lacinia dui interdum. Suspendisse eget consectetur lacus. Suspendisse faucibus est id augue
                varius sodales. Suspendisse dignissim mi sed augue vestibulum et tincidunt enim pellentesque. Aenean
                convallis pellentesque ornare. In hac habitasse platea dictumst. Praesent luctus lectus quis tortor
                faucibus aliquam. Nulla facilisi. In nisl metus, vulputate ac consequat nec, pharetra nec
                ligula.
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
