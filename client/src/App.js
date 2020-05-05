import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Cards, CountryPicker, NavBar, Footer, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import AboutPage from './pages/AboutPage/AboutPage';


// import ChartsPage from './pages/ChartsPage/ChartsPage';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country });
    }



    render() {
        const { data, country } = this.state;
        return (
            <Suspense fallback={(<div>Loading...</div>)}>
                <Router>
                    <div>
                        <NavBar />
                        <Switch>
                            {/* <Route path="/" /> */}
                            {/* <Route path="/chartspage" component={ChartsPage} /> */}
                            <Route path="/aboutdeveloper" component={AboutPage} />
                            <div className={styles.container}>
                                <CountryPicker handleCountryChange={this.handleCountryChange} />
                                <Cards data={data} />
                                <Chart data={data} country={country} />
                            </div>
                            <Route path="/">Home
                        </Route>
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </Suspense>
        )
    }
}

export default App;