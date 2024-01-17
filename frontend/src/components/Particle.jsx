import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {useCallback} from 'react';

export default function Particle() {
  const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles
    id="particlebg"
    height="5vh"
      init={particlesInit}
      loaded={particlesLoaded}

      // Particle configurations
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fullScreen: {
          enable: "false",
          zIndex: -1,
        },
        fps_limit: 120,
        particles: {
          color: {
            value: "#dadce1",
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 90,
          },
          links: {
            color: "#dadce1",
            distance: 200,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "top-right",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 8,
            straight: false,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "none",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          detectRetina: true,
        }
      }}
    />
  )
}