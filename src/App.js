// import React, { Component } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './components/home'
// import About from './components/about'
// import News from './components/news'
// import Navbar from './components/customNav'

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <Router>
//           <div>
//             <Navbar />
//             <Route exact path='/' component={Home} />
//             <Route path='/about' component={About} />
//             <Route path='/news' component={News} />

//           </div>
//         </Router>

//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import './App.css'
import Subject from './components/subject'
import Test from './components/test'
import Result from './components/result'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject />
        <Test />  
        <Result />      
      </div>
    )
  }
}
