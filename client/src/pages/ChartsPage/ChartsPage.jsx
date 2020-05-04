//Future Page



// import React from 'react';
// import { Chart, CountryPicker } from '../../components';
// import { fetchData } from '../../api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import styles from './ChartsPage.module.css';



// class ChartsPage extends React.Component {
//     state = {
//         data: {},
//         country: '',
//     }

//     async componentDidMount() {
//         const fetchedData = await fetchData();
//         this.setState({ data: fetchedData })
//     }

//     handleCountryChange = async (country) => {
//         const fetchedData = await fetchData(country)
//         this.setState({ data: fetchedData, country: country });
//     }



//     render() {
//         const { data, country } = this.state;
//         return (
//             <div className={styles.container}>
//                 <div className=" col-l-6 col-md-12 col-s-12 col-xs-12">
//                     <span ><FontAwesomeIcon icon={faSearch}
//                         style={{ fontSize: "3rem", margin: "auto 1rem 1rem auto", color: "whitesmoke" }}
//                     /></span>
//                     <CountryPicker handleCountryChange={this.handleCountryChange} />
//                 </div>
//                 <div className="col-l-6 col-s-12 col-xs-12">
//                     {/* <CardsByCountry data={data} /> */}
//                     <Chart data={data} country={country} />

//                 </div>
//             </div>
//         )
//     }
// }

// export default ChartsPage;

