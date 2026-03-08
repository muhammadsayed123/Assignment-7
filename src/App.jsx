import React, { Suspense } from 'react'
import './App.css'
import AvailableTickets from './Component/AvailableTickets/AvailableTickets'
import SelectedTickets from './Component/SelectedTickets/SelectedTickets'
import Navbar from './Component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer/Footer';

const fetchInfo = async () => {
  const res = await fetch('/info.json')
  return res.json()
}
const infoPromise = fetchInfo()

function App() {
  return (
    <>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <section>
            <Suspense fallback={<div>Loading...</div>}>
              <AvailableTickets infoPromise={infoPromise}></AvailableTickets>
            </Suspense>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
        
      </div>
    </>
  )
}

export default App 
