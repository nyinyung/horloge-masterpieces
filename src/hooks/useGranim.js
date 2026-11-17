import { React, useEffect } from 'react'
import Granim from 'granim';

const useGranim = (granimRef) => {
      useEffect(() => {
        if (!granimRef.current) return;
    
        const granimInstance = new Granim({
          element: granimRef.current,
          direction: "diagonal",
          isPausedWhenNotInView: false,
    
          states: {
            "default-state": {
              gradients: [
                ["#050810", "#111827", "#A77B42"],
                ["#050810", "#1B2433", "#F5DFB2"],
                ["#050810", "#101827", "#A77B42"],
                ["#050810", "#202A3A", "#050810"],
              ],
              transitionSpeed: 8000,
            },
          },
        });
    
        return () => {
          granimInstance.destroy();
        };
      }, []);
}

export default useGranim
