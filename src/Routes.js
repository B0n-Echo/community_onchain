import { BrowserRouter, Switch ,Route , Redirect} from "react-router-dom";
import Signup from "./auth/signup";
import Signin from "./auth/signin";
// import dashboard from "./dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/signup"  exact component={Signup} />
            <Route path="/signin"  exact component={Signin} />
            <Redirect from="/" to="/signin" />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;