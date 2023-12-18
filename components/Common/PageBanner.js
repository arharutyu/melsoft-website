import React from 'react';
import Shapes2 from '../ShapesBg/Shapes2';

const PageBanner = ({pageTitle}) => {
    return (
        <>
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>{pageTitle}</h2>
                        </div>
                    </div>
                </div>

                <Shapes2 />
            </div>
        </>
    );
}

export default PageBanner;