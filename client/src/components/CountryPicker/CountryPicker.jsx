import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCounties] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCounties(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCounties]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect className={styles.formProps}
                defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="" className={styles.formProps}>Global</option>
                {fetchedCountries.map((country, i) =>
                    <option key={i} value={country} className={styles.formItems}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker;