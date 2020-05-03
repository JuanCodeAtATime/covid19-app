import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import NavBar from './components/Navbar/Navbar';
import ChartsPage from './pages/ChartsPage/ChartsPage';

class App extends React.Component {
    state = {
        data: {},
        country: '',
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
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/chartspage" component={ChartsPage} />
                        <div className={styles.container}>
                            <CountryPicker handleCountryChange={this.handleCountryChange} />
                            <Cards data={data} />

                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;