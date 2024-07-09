import React, { useRef, useEffect } from 'react';

export const TestComponent = () => {
    const refDiv = useRef(null);

    useEffect(() => {
        console.log(refDiv.current); // Debería imprimir el elemento div
    }, []);

    return <div ref={refDiv}>Test</div>;
};