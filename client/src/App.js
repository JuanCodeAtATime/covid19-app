import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Cards, CountryPicker, NavBar, Footer, Chart } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import { fetchData } from './api';
import AboutPage from './pages/AboutPage/AboutPage';


// import ChartsPage from './pages/ChartsPage/ChartsPage';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data })
    }

    //This makes an API call every 30 seconds as a quick 
    //   fix to solve Safari infinite API call/crash issue
    // async componentDidMount() {
    //     try {
    //         setInterval(async () => {
    //             const fetchedData = await fetchData();

    //             this.setState({
    //                 data: fetchedData
    //             })
    //         }, 1000);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }



    handleCountryChange = async (country) => {
        const data = await fetchData(country)
        this.setState({ data, country: country });
    }



    render() {
        const { data, country } = this.state;
        return (
            <Suspense
                fallback={(<div><FontAwesomeIcon icon={faSpinner} /></div>)}>
                <Router>
                    <React.Fragment>
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
                    </React.Fragment>
                    <Footer />
                </Router>
            </Suspense>
        )
    }
}

export default App;