import React from 'react';
import { Chart, CountryPicker } from '../../components';
import { fetchData } from '../../api';
import styles from './ChartsPage.module.css';



class ChartsPage extends React.Component {
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
            <div className={styles.container}>
                <div className=" col-l-6 col-md-12 col-s-12 col-xs-12">
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                </div>
                <div className="col-l-6 col-s-12 col-xs-12">
                    <Chart data={data} country={country} />
                </div>
            </div>
        )
    }
}

export default ChartsPage;

