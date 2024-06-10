import React, {Suspense } from 'react';
// import Login from './page/auth/login';


import Router from './router/Router' 



function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;