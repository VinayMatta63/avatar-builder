import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <color attach="background" args={["#333333"]} />
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
};

export default App;
