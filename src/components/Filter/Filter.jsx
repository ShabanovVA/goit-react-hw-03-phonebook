import React from "react";
import PropTypes from 'prop-types';
import { FilterFormInput, FilterLabel } from "./Filter.styled";

export const Filter = ({valueFilter, onChange}) => (

    <FilterLabel>Фильтр
        <FilterFormInput type='text' value={valueFilter} onChange={onChange} />
    </FilterLabel>
)

export default Filter;  

Filter.propTypes = {
    valueFilter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}