import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Cards, LandingPagePicker, NavBar, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import AboutPage from './pages/AboutPage/AboutPage';
import ChartsPage from './pages/ChartsPage/ChartsPage';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleLandingChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country });
    }



    render() {
        const { data } = this.state;
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/chartspage" component={ChartsPage} />
                        <Route path="/aboutDeveloper" component={AboutPage} />
                        <div className={styles.container}>
                            <LandingPagePicker handleLandingChange={this.handleLandingChange} />
                            <Cards data={data} />
                        </div>

                    </Switch>

                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;