import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";


export default function BackgroundAnimmetion() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0d47a1" // 背景色
          }
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 60
          },
          size: {
            value: 2
          }
        }
      }}
      style={{
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        height: '100%',
      }}
    />
  );
}
