import { useEffect } from 'react';

interface SplineHeroProps {
  url: string;
}

const SplineHero: React.FC<SplineHeroProps> = ({ url }) => {
  useEffect(() => {
    // Load spline-viewer script only once
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.12.28/build/spline-viewer.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
     // @ts-ignore
    <spline-viewer
      url={url}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default SplineHero;
