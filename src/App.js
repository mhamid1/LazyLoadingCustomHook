import React, { lazy, Suspense } from 'react';

const LazyLoadedComponent = lazy(() => import('./hook/DataComponent'));

function App() {
  return (
    <div>
      <h1>Lazy Loading with Custom Hooks</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
}

export default App;
