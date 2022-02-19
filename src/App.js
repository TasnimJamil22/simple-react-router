import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
// import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';
import Detail from './Components/Detail/Detail';
 

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
      <Switch>
           <Route exact path='/'>
           <Home></Home>
           </Route>
           <Route path='/home'>
           <Home></Home>
           </Route>
           <Route path='/friends'>
           <Friends></Friends>
           </Route>
           <Route path='/friend/:friendId'>
            <Detail></Detail>
          </Route>
           <Route exact path='/about'>
           <About></About>
           </Route>
           <Route exact path='/about/culture'>
             <Culture></Culture>

           </Route>
           <Route path='*'>
           <NotFound></NotFound>
           </Route>
         </Switch>
         </Router>



{/* <BrowserRouter>
         <Switch>
           <Route path='/home'>
           <Home></Home>
           </Route>
           <Route path='/friends'>
           <Friends></Friends>
           </Route>
           <Route path='/about'>
           <About></About>
           </Route>
           <Route exact path='/'>
           <Home></Home>
           </Route>
           <Route>
           <NotFound></NotFound>
           </Route>
         </Switch>
      </BrowserRouter> */}
       {/* <Home></Home>
       <Friends></Friends>
       <About></About>
       <NotFound></NotFound> */}
    </div>
  );
}

export default App;
