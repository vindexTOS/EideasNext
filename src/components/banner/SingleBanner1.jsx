import Image from 'next/image';
import Link from 'next/link';
import styles from  '../../../public/assets/css/banner.css'

const SingleBanner1 = ({ banner }) => {
    const { bgThumb, title, title1, title2, title3, title4, title5, title6, shapeThumb, btnText } = banner;

    const styleFirstLetter = (text) => (
        <span>
            <span style={{ color: 'red', fontWeight: 'bold' }}>{text.charAt(0)}</span>
            {text.slice(1)}
        </span>
    );

    const fontStlye =  {fontSize:'4rem'}

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark"    style={{
        backgroundImage: `url(/assets/img/banner/${bgThumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(70%)', // Darkens the image
        height: '100%', // Adjust height as needed
        width: '100%'  // Adjust width as needed
    }}></div>
            <div className="container">
                <div  className="row align-center">
                    <div className="col-xl-7 offset-xl-5 " >
                        <div className="content">
                            <h2 style={fontStlye } >{styleFirstLetter(title1)} </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title2)}  </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title3)}  </h2>
                            <h2 style={fontStlye } >{styleFirstLetter(title4)}  </h2>
                        
                            <h2 style={fontStlye } >{styleFirstLetter(title5)} </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title6)} </h2>
                            <p>{title }  </p>
                            <div className="button mt-40">
                                
                            <Link className="btn-animation" href="/contact-us"><i className="fas fa-arrow-right"></i> <span>{btnText}</span></Link>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapeThumb}`} width={916} height={693} alt="Shape"       quality={80} 
    priority={true}    layout="intrinsic"  />
                <div className="overlay"></div>
            </div>
        </>
    );
};

export default SingleBanner1;