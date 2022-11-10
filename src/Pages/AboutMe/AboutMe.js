import React, { useEffect } from 'react';
import img from '../../images/me/me.jpg'
import useChangeTitle from '../../hooks/changeTitle';
import { Link } from 'react-router-dom';
const AboutMe = () => {
    useChangeTitle('About me')
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} />
                <div>
                    <h1 className="text-5xl font-bold">Mohammed Anamul Haque</h1>
                    <p className="py-6">Fashion photographer Chris von Wangenheim is one of the most avant-garde image-makers in the 20th century. He ranked next   to Helmut Newton and Guy Bourdin in his encapsulation of the 1970s zeitgeist.

                        In his relatively short career (between the years 1968 and 1981) he produced now-iconic imagery for every top fashion publication of the 70’s, including Vogue, Harper’s Bazaar and Interview. He also created unforgettable campaigns for Valentino, Dior, Calvin Klein, and Revlon.

                        At the peak of his success, Chris passed away in a car accident in 1981 at the age 39, leaving behind a great legacy, which remained archived for 40 years. On September 15, 2015, Rizzoli published a book Gloss: The Work of Chris von Wangenheim by Roger Padilha and Mauricio Padilha. This book contains over two hundred provocative and iconic images including never-before-seen outtakes from memorable shoots with such supermodels as Christie Brinkley, Lisa Taylor, and the late Gia Carangi.</p>
                    <button className="btn btn-primary"><Link to='/signin'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;