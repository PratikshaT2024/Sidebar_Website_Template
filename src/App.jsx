import React from 'react'

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Sidebar from "../src/assets/Pages/Sidebar"

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<Sidebar/>} />
      
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App