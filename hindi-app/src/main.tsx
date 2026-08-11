import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { P5Hub } from './pages/P5Hub'
import { P5Quiz } from './pages/P5Quiz'
import { P5Idioms } from './pages/P5Idioms'
import { P5Vocabulary } from './pages/P5Vocabulary'
import { P5Composition } from './pages/P5Composition'
import { P5Oral } from './pages/P5Oral'
import { P5ExamPractice } from './pages/P5ExamPractice'
import { P5Mock } from './pages/P5Mock'
import { P5WA } from './pages/P5WA'
import { P5Listening } from './pages/P5Listening'
import { P5Projects } from './pages/P5Projects'
import { P6Hub } from './pages/P6Hub'
import { NotFound } from './pages/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'p5', element: <P5Hub /> },
        { path: 'p5/quiz', element: <P5Quiz /> },
        { path: 'p5/idioms', element: <P5Idioms /> },
        { path: 'p5/vocabulary', element: <P5Vocabulary /> },
        { path: 'p5/composition', element: <P5Composition /> },
        { path: 'p5/oral', element: <P5Oral /> },
        { path: 'p5/exam-practice', element: <P5ExamPractice /> },
        { path: 'p5/mock', element: <P5Mock /> },
        { path: 'p5/wa', element: <P5WA /> },
        { path: 'p5/listening', element: <P5Listening /> },
        { path: 'p5/projects', element: <P5Projects /> },
        { path: 'p6', element: <P6Hub /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: '/lpu' },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
