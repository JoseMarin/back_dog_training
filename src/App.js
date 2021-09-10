import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import './Utils/scss/Util.scss';
import Home from "./containers/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login.jsx";
import ObedienciaBasica from "./containers/Obediencia_basica/ObedienciaBasica.jsx";
import BuenosModales from "./containers/Buenos_modales/BuenosModales.jsx";
import Ejercicios from "./containers/Ejercicios/Ejercicios.jsx";
import Admin from "./containers/Admin/AdminProfile/Admin.jsx";
import AllUsers from "./containers/Admin/AllUsers/AllUsers.jsx";
import Profile from "./containers/Profile/Profile.jsx";
import UpdateUser from "./containers/Profile/UpdateUser";
import CommonWall from "./containers/Common/CommonWall.jsx";
import Posts from "./components/posts/AllPosts/Posts.jsx";
import UserPost from "./components/posts/UserPost/UserPost.jsx";
import Contact from "./containers/Contact/Contact";
import Comments from "./containers/Comments/Comments";
import EditPost from "./components/EditPost/EditPost";
import Footer from "./components/Footer/Footer";
import About_us from './containers/About_us/About_us';
import Alimentacion from './containers/Alimentacion/Alimentacion';
import Trainers from './containers/Trainers/Trainers';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/obedienciabasica" exact component={ObedienciaBasica} />
          <Route path="/buenosmodales" exact component={BuenosModales} />
          <Route path="/aboutus" exact component={About_us} />
          <Route path="/ejercicios" exact component={Ejercicios} />
          <Route path="/trainers" exact component={Trainers} />
          <Route path="/alimentacion" exact component={Alimentacion} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/allusers" exact component={AllUsers} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/editpost" exact component={EditPost} />
          <Route path="/userpost" exact component={UserPost} />
          <Route path="/updateuser" exact component={UpdateUser} />
          <Route path="/commonwall" exact component={CommonWall} />
          <Route path="/comments" exact component={Comments} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
