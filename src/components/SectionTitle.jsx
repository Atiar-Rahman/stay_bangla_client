import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
      <div className="text-center my-5">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p className="text-lg p-2">
          ---------- <span className='p-2'>{subHeading}</span> ----------
        </p>
      </div>
    );
};

export default SectionTitle;