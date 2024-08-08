import React, { useState } from "react";
import ServiceCSS from './../Service/Service.module.css'

import img1 from './../../assets/Images/logo_01.webp'
import img2 from './../../assets/Images/logo_02.webp'
import img3 from './../../assets/Images/logo_03.webp'
import img4 from './../../assets/Images/logo_04.webp'
import img5 from './../../assets/Images/logo_05.webp'

function Service() {

    const [Active, setActive] = useState(null);

    const Handler = (i) => {
        if (Active === i) {
            return setActive(null)
        }
        setActive(i);
    }

    return (
        <div className={`section ${ServiceCSS.ServiceWrapper}`}>
            <div className={ServiceCSS.Service_Top_Container}>
                <p>Trusted By Other Brands</p>
                <div className={ServiceCSS.Images_Brands}>
                    <img src={img1} alt="brands-img" />
                    <img src={img2} alt="brands-img" />
                    <img src={img3} alt="brands-img" />
                    <img src={img4} alt="brands-img" />
                    <img src={img5} alt="brands-img" />
                </div>
            </div>
            
            <div className={ServiceCSS.Service_Bottom_Container}>
                <div className={ServiceCSS.serviceContent}>
                    <p className="section_title">My Services</p>
                    <h2>Solution <br /> I Provide</h2>
                    <p>Expert web development using HTML, CSS, JS, Java, React, PHP, MySQL, and Ruby on Rails.</p>
                </div>
                <div className={ServiceCSS.Service_questions_wrapper}>
                    {Questins.map((item, i) => (
                        <div key={i} className={ServiceCSS.Service_question_wrapper}>
                            <div className={ServiceCSS.Question} onClick={() => Handler(i)}>
                                <h3><sub>{item.sub}</sub>{item.Title}</h3>
                            </div>
                            <div className={`${Active === i ? ServiceCSS.showAnswer : ServiceCSS.Answer}`}>
                                <p>{item.Desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Questins = [
    {
        id: 1,
        sub: 0.1,
        Title: "UI/UX Design",
        Desc: 'Creating intuitive and engaging user interfaces and experiences.'
    },
    {
        id: 2,
        sub: 0.2,
        Title: "Web Design",
        Desc: 'Crafting visually appealing and responsive websites for various platforms.'
    },
    {
        id: 3,
        sub: 0.3,
        Title: "Mobile App Design",
        Desc: 'Designing user-friendly mobile applications for iOS and Android.'
    },
    {
        id: 4,
        sub: 0.4,
        Title: "Branding",
        Desc: 'Developing strong, memorable brand identities and strategies.'
    },
];

export default Service;
