import React from 'react';
import PageBanner from '@/components/Common/PageBanner'; 
import PortfolioCard from '@/components/Portfolio/PortfolioCard';
import ContactButton from '@/components/Common/ContactButton';

 
const Portfolio = () => {
    return (
        <>
            <PageBanner pageTitle="Our Work" />
            <PortfolioCard />
            <ContactButton />

        </>
    )
}

export default Portfolio;