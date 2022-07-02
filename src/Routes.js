import { BrowserRouter, Switch ,Route , Redirect} from "react-router-dom";
import Signup from "./auth/signup";
import Signin from "./auth/signin";
// import dashboard from "./dashboard";

const Routes = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/signin"  exact component={Signin} />
            <Redirect from="/" to="/signin" />
            <Route path="/signup"  exact component={Signup} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;