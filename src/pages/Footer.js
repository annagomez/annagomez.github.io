import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Footer() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    const footer = siteConfig.themeConfig.footer;
    return (
       <>
           {footer && (
               <div className="footer">
                   <div className="container">
                       {footer.links && footer.links.length && (
                           <div className="row footer__links">
                                    {footer.links.map((col, idx) => (
                                        <div className="col footer__col">
                                            {col.items && col.items.length && (
                                                <ul className="footer__items">
                                                    {col.items.map((row, idx) => (
                                                    <li className="footer__item">
                                                        <a className="footer__link-item" href={row.to} target="_blank">{row.label}</a>
                                                    </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                           </div>
                       )}
                       <div className="text--center">
                            <div dangerouslySetInnerHTML={{__html: siteConfig.themeConfig.footer.copyright}}></div>
                       </div>
                   </div>
               </div>
           )}
       </>
    );
}

export default Footer;
