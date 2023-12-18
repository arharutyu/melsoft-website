import '@/styles/bootstrap.min.css'
import 'animate.css'
import '@/styles/boxicons.min.css'
import '@/styles/flaticon.css'
import "@/styles/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '@/styles/style.css'
// Global Responsive Style
import '@/styles/responsive.css'

import Layout from '@/components/_App/Layout'

export default function App({ Component, pageProps }) {
    
    return (
        <>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </>
    )
}