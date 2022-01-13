import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import MyNavBar from './components/MyNavBar'
import Registration from'./components/Registration'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState('')
  return (
      <BrowserRouter>
      <div className='App'>
        <MyNavBar filter={filter} setFilter={setFilter} />
        <div>STRIVE BOOKS HOME PAGE</div>
        <Routes>
          <Route path='/' element={<homepage filter={filter}/>}/>
          <Route path='/registration' 
          element={
              <>
                <h1>REGISTER!</h1>
                <Registration />
              </>
            } />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <BookList books={fantasyBooks} />
       </div> 
      </BrowserRouter>
      
    
      /* <div className="App">
      <header className="App-header">
        <MyNavBar/>
        
      </header>
    </div> */
  )
}

export default App
