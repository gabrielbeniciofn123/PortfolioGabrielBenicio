import { Component, lazy, Suspense, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

const Scene3D = lazy(() => import('./Scene3D'));
const fallback = <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />;

// A falha de WebGL ou do carregamento do efeito não pode derrubar o portfólio.
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? fallback : this.props.children; }
}

export default function SceneBackground() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="h-full w-full" aria-hidden="true">
      {reducedMotion ? fallback : (
        <SceneBoundary>
          <Suspense fallback={fallback}><Scene3D /></Suspense>
        </SceneBoundary>
      )}
    </div>
  );
}
