
interface SceneLayoutProps {
  children: React.ReactNode;
}

const SceneLayout: React.FC<SceneLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* Global Gradient Background */}
      <div className="fixed inset-0 z-[-20] bg-gradient-to-br from-[#020146] via-[#000000] to-[#030350]" />

      {/* 3D Scene Layer */}
      {/* <div className="fixed inset-0 z-[-10] pointer-events-none">
        <SpaceScene />
      </div> */}

      {/* UI Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SceneLayout;
