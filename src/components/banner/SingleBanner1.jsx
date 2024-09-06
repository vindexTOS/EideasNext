import Image from 'next/image';
import Link from 'next/link';
import styles from  '../../../public/assets/css/banner.css'

const SingleBanner1 = ({ banner }) => {
    const { bgThumb, title1, title2, title3, title4, title5, title6, shapeThumb, btnText } = banner;

    const styleFirstLetter = (text) => (
        <span>
            <span style={{ color: 'red', fontWeight: 'bold' }}>{text.charAt(0)}</span>
            {text.slice(1)}
        </span>
    );

    const fontStlye =  {fontSize:'4rem'}

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 offset-xl-5 " >
                        <div className="content">
                            <h2 style={fontStlye } >{styleFirstLetter(title1)} </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title2)}  </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title3)}  </h2>
                            <h2 style={fontStlye } >{styleFirstLetter(title4)}  </h2>
                        
                            <h2 style={fontStlye } >{styleFirstLetter(title5)} </h2>
                            <h2 style={fontStlye }>{styleFirstLetter(title6)} </h2>
                            <div className="button mt-40">
                            <Link className="btn-animation" href="/services"><i className="fas fa-arrow-right"></i> <span>{btnText}</span></Link>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapeThumb}`} width={916} height={693} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner1;