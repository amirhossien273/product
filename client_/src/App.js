import React, {Suspense } from 'react';
// import Login from './page/auth/login';


import Router from './router/Router' 
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <Suspense fallback={null}>
      <div><Toaster/></div>
      <Router />
    </Suspense>
  );
}

export default App;