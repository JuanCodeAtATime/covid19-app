import React from 'react';
// import { Route, Switch } from "react-router-dom";
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import NavBar from './components/Navbar/Navbar';
import coronaImage from './images/image.jpg';

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
                <NavBar />
                {/* <Switch>
                <Route exact path="/" component={Auth(LandingPage, null)} /> */}
                <div className={styles.container}>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Cards data={data} />
                    <Chart data={data} country={country} />
                </div>
                {/* </Switch> */}
            </div>
        )
    }
}

export default App;