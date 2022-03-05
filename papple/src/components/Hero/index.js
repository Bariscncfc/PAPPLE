import React, {useState} from 'react';
import './hero.scss'
import iphone13 from '../../assets/images/telephones/iphone13.png'
import ipad from '../../assets/images/telephones/ipad.jpg'
import watch from '../../assets/images/telephones/watch.png'

const Hero = () => {

    const [btn1,setBtn1] = useState(false);
    const [btn2,setBtn2] = useState(false);
    const [btn3,setBtn3] = useState(false);

    const handleClick = (e) => {
        if(e.target.id === 'btn1'){
            document.getElementById('slide1').style.display ="flex"
            setBtn2(false);
            setBtn3(false);
        }
        if(e.target.id === 'btn2'){
            document.getElementById('slide1').style.display ="none"
            setBtn2(true);
            setBtn3(false);
        }
        if(e.target.id === 'btn3'){
            document.getElementById('slide1').style.display ="none"
            setBtn2(false);
            setBtn3(true);
        }
    }

    return (
        <div className="hero">
             <div className="hero__content">
                 <div className="hero__slide" id="slide1">
                     <div className="hero__slide-desc" >
                         <span>Great Design Collection</span>
                         <h1>Iphone 13 Pro Max</h1>
                         <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                         <span>$199.00</span>
                         <button>Add to Cart</button>
                     </div>
                     <div className="hero__slide-img">
                        <img src={iphone13} alt="iphone13"/>
                     </div>
                 </div>
                 <div className="hero__slide-pagination">
                     <button onClick={handleClick} id="btn1"></button>
                     <button onClick={handleClick} id="btn2"></button>
                     <button onClick={handleClick} id="btn3"></button>
                 </div>

                 {btn2 == true ?
                 <div className="hero__slide" id="slide2">
                     <div className="hero__slide-desc" >
                         <span>Great Design Collection</span>
                         <h1>Ipad Pro</h1>
                         <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                         <span>$179.00</span>
                         <button>Add to Cart</button>
                     </div>
                     <div className="hero__slide-img">
                         <img src={ipad} alt="iphone13"/>
                     </div>
                 </div>
                     :null}
                 {btn3 == true ?
                 <div className="hero__slide" id="slide3">
                     <div className="hero__slide-desc" >
                         <span>Great Design Collection</span>
                         <h1>Apple Watch</h1>
                         <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                         <span>$189.00</span>
                         <button>Add to Cart</button>
                     </div>
                     <div className="hero__slide-img">
                         <img src={watch} alt="iphone13"/>
                     </div>
                 </div>
                     :null}
             </div>
        </div>
    )
}


export default Hero;