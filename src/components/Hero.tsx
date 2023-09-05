import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CustmCard from './Card';
import 'animate.css'; // Import Animate.css styles

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the element is in the viewport (adjust the threshold as needed)
            const element = document.querySelector('.animate__bounce');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const isVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;
                setIsScrolled(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="scroll-container">
            <section>
                <h2>Section 1</h2>

            </section>
            <section>
                <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                      className={`animate__animated ${isScrolled ? 'animate__bounce' : ''}`}
                >
                    <CustmCard></CustmCard>
                </Grid>
                <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                      className={`animate__animated ${isScrolled ? 'animate__bounce' : ''}`}
                >
                    <CustmCard></CustmCard>
                </Grid>
                <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <CustmCard></CustmCard>
                </Grid>
            </section>
            <section>

                <Grid container justifyContent="center" alignItems="center" className="animate__animated animate__slideInUp">
                    <Grid item xs={12} sm={6}>
                        <img style={{width:"100%"}}
                            src="https://media.graphassets.com/resize=fit:clip,height:571,width:616/HaPJRpDRleDkHn7mye9L"
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt ducimus eos eveniet
                            inventore magnam, maxime mollitia nisi odit optio quaerat quas quasi qui quibusdam saepe
                            sint unde voluptate voluptatem.
                        </p>
                    </Grid>
                </Grid>
            </section>
            <section>
                <h2>Section 4</h2>
            </section>
        </main>
    );
};

export default Hero;
