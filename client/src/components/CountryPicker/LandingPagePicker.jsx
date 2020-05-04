import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchCountries } from '../../api';

const LandingPagePicker = ({ handleLandingChange }) => {
    const [fetchedLandingCountries, setFetchedLandingCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedLandingCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedLandingCountries]);

    return (
        <FormControl className={styles.formControl}>

            <NativeSelect className={styles.formProps} style={{ fontWeight: "bold" }}
                defaultValue="" onChange={(e) => handleLandingChange(e.target.value)}>
                {/* <div><FontAwesomeIcon icon={faSearch} className={styles.fontAI} /></div> */}
                <option value="" className={styles.formProps}>
                    Global Numbers</option>
                {fetchedLandingCountries.map((country, i) =>
                    <option key={i} value={country}
                        className={styles.formItems}
                        style={{ paddingLeft: "10px !important" }}
                    >{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}

export default LandingPagePicker;