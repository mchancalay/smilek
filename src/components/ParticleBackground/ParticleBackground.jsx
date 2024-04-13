
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: '#fff',
      },
    },
    fpsLimit: 144,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#000',
      },
      links: {
        color: '#000',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 180,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {children}
      </>
    );
  }

  return <></>;
};

export default ParticleBackground;
