import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Editor from '@/pages/Editor'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editor',
    element: <Editor />,
  },
])

export default router
