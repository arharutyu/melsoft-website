import React from 'react'
import Link from 'next/link'

const ContactButton = () => {
    return (
        <>
            <div className="ready-to-talk">
                <div className="container">
                    <h3>Ready to talk?</h3>
                    <p>We're here to answer your questions about building with Melsoft</p>
                    <Link href="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                    <Link href="/process" className="btn btn-secondary">
                        Learn More
                    </Link>
                </div>
            </div>
        </>
    )
 
}

export default ContactButton;  