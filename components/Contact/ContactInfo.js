import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>
                                <h3>Email</h3>
                                <p><a href="mailto:info@melsoft.com.au">info@melsoft.com.au</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;  