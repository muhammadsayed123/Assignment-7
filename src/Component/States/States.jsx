import React from 'react';

const States = ({ inProgress, resolvedTotal }) => {
    const bgImage1 = 'https://i.ibb.co.com/fjTPsT6/vector1.png';
    const bgImage2 = 'https://i.ibb.co.com/DHfSD91J/vector2.png';

    return (
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#E9E9E9] max-w-[1200px] mx-auto'>
            <div
                className='p-4 py-15 rounded-md text-center text-white'
                style={{
                    backgroundImage: `url(${bgImage2}), url(${bgImage1}), linear-gradient(#632EE3, #9F62F2)`,
                    backgroundSize: 'cover, cover, cover',
                    backgroundPosition: 'center, center, center',
                    backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                }}
            >
                <p>In-Progress</p>
                <p className='font-bold text-4xl'>{inProgress}</p>
            </div>
            <div
                className='p-4 py-15 rounded-md text-center text-white'
                style={{
                    backgroundImage: `url(${bgImage2}), url(${bgImage1}), linear-gradient(#54CF68, #00827A)`,
                    backgroundSize: 'cover, cover, cover',
                    backgroundPosition: 'center, center, center',
                    backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                }}
            >
                <p>Resolved</p>
                <p className='font-bold text-4xl'>{resolvedTotal}</p>
            </div>
        </div>
    );
};

export default States;
