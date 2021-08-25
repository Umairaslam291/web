import About from "../pages/about";
import Contact from "../pages/contact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
function Nav()
{
    return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/91-6r">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">contact</a>
      </li>
      
      
    </ul>
  </div>
</nav> 
<Router>
<Switch>
    <Route path="/91-6r">
<About />
    </Route>
    <Route path="/Contact">
<Contact/>
    </Route>
</Switch>
</Router>
    </>
    );
}
export default Nav;