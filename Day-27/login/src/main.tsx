// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router/index.tsx"

import {RouterProvider,} from "react-router";


const root = document.getElementById("root");

createRoot(root!).render(
  <>
    <RouterProvider router={router} />
  </>
)
