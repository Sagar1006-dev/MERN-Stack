import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>
        Custome App !
      </h1>
    </div>
  )
}
// const ReactElement = {
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me t visit google'
// }
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'hhttps://google.com',target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <MyApp />
  </React.StrictMode>

)
