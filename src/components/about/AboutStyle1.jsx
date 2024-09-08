import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/device-photos/device1.jpg"
 

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area dark default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">ლიფტის დაშვების სისტემა</div>
                            <h2 className="title mb-25">უკვე ხელმისაწვდომია!</h2>
                            <p>
                                წარმოგიდგენთ ჩვენს უახლეს ლიფტის დაშვების სისტემას - დახვეწილ მოწყობილობას, რომელიც აერთიანებს ბარათებისა მობილური აპლიკაციების ტექნოლოგიებს, რაც უზრუნველყოფს უსაფრთხოებასა და კომფორტს თქვენს შენობაში.                            </p>
                            <div className="owner-info">
                                <div className="left-info">
                                    <p>ძირითადი მახასიათებლები:
                                        <br/>
                                        🌐 მულტი-პლატფორმული ხელმისაწვდომობა (საბარათე სისტემა, აპლიკაციიდან წვდომა მობილურით 📲).
                                        <br/>

                                        🛡️ გაძლიერებული უსაფრთხოების პროტოკოლები (ძლიერი დაცვა არაავტორიზებული წვდომისგან).
                                        <br/>

                                        🌐 დისტანციური მართვის შესაძლებლობა (გააკონტროლეთ ლიფტთან წვდომა ნებისმიერი ადგილიდან)
                                        <br/>

                                        🌐 ინტეგრაციის შესაძლებლობები (დამატებითი ფუნქციების ჩაშენება)
                                        <br/>

                                        უპირატესობები:
                                        <br/>

                                        💼 ეფექტურობა
                                        <br/>

                                        🚀 ინოვაციურობა
                                        <br/>

                                        🔒 უსაფრთხოება
                                        <br/>

                                        📈 მასშტაბურობა
                                        <br/>

                                        🌐 დახვეწილი დიზაინი</p>
                                </div>
                             
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                {/* <About1Card /> */}
                         <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" />
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;