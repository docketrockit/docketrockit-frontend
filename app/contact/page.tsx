import type { Metadata } from 'next';

import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'DocketRockit Contact Us page'
};

const ContactPage = () => {
    return (
        <>
            <div className="grow shrink-0">
                <section
                    className="wrapper bg-[#21262c] opacity-100 !text-white"
                    style={{
                        backgroundImage: 'url(/assets/img/photos/bg23.png)'
                    }}
                >
                    <div className="container pt-[6.5rem]  pb-[3.5rem] xl:pb-[3.5rem] lg:pb-[3.5rem] md:pb-[3.5rem] !text-center">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                                    Get in Touch
                                </h1>
                                <p className="lead !leading-[1.65] text-[0.9rem] font-medium xl:!px-10 xxl:!px-10 text-[#343f52]">
                                    Have any questions? Reach out to us from our
                                    contact form and we will get back to you
                                    shortly.
                                </p>
                            </div>
                            {/* /column */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>
                <ContactForm />
                <div className="wrapper !bg-[#ffffff]">
                    <div className="map">
                        <iframe
                            // width="600"
                            // height="450"
                            style={{ width: '100%', height: 500, border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/view?key=${process.env.GOOGLE_PLACES_API_KEY}&zoom=12&center=-37.8136%2C144.9631`}
                        ></iframe>
                    </div>
                    {/* /.map */}
                </div>
            </div>
        </>
    );
};

export default ContactPage;
