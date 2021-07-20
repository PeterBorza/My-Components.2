import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { LinkContext } from "./context/LinkContext";
import Nav from "./components/Nav";

const App = () => {
    const links = useContext(LinkContext);

    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    {links.map(item => (
                        <Route
                            key={item.id}
                            path={item.path}
                            exact={item.exact}
                            component={item.component}
                        />
                    ))}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
