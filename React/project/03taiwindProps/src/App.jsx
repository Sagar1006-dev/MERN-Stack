import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const myObj = {
    username: 'Sagar',
    age:21
  }


  return (
    <>
      <Header username="Sagar Coder" />
      <Card />
      <Cart username="Sagar"/>
      <Footer/>
    </>
  )
}

export default App
