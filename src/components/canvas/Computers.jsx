import React, { Suspense, useEffect, useState, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback || null;
    return this.props.children;
  }
}

const Computers = ({ isMobile, isSmallMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const position = isSmallMobile
    ? [0, -5, -1.3]
    : isMobile
    ? [0, -1.5, -1.3]
    : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable());

    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const smallQuery = window.matchMedia("(max-width: 390px)");

    setIsMobile(mobileQuery.matches);
    setIsSmallMobile(smallQuery.matches);

    const handleMobile = (e) => setIsMobile(e.matches);
    const handleSmall = (e) => setIsSmallMobile(e.matches);

    mobileQuery.addEventListener("change", handleMobile);
    smallQuery.addEventListener("change", handleSmall);

    return () => {
      mobileQuery.removeEventListener("change", handleMobile);
      smallQuery.removeEventListener("change", handleSmall);
    };
  }, []);

  if (!webGLAvailable) return null;

  const mobile = isMobile || isSmallMobile;

  return (
    <ErrorBoundary fallback={null}>
      <Canvas
        frameloop='demand'
        shadows={!mobile}
        dpr={mobile ? 1 : [1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: mobile ? "low-power" : "high-performance",
          antialias: !mobile,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} isSmallMobile={isSmallMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;
