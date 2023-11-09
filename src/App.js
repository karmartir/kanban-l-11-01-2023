import './App.css';
import {connect} from "react-redux";
import Column from "./components/Column";
import CreateModalWindow from "./components/CreateModalWindow";

function App({appTitle, statuses}) {
    return (
        <div className="App">
            <h1>{appTitle}</h1>

            <CreateModalWindow/>

            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(status =>
                        <Column key={status.id} status={status} />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    appTitle: state.appName,
    statuses: state.boardStatuses

})
export default connect(mapStateToProps)(App);
