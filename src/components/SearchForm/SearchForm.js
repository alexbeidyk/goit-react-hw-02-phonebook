import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./searchForm.module.scss";

class SearchForm extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <form className={styles.searchForm}>
        <label>
          <h3 className={styles.searchForm__title}>Find contacts by name</h3>
          <input type="text" value={filter} onChange={onChange} />
        </label>
      </form>
    );
  }
}

SearchForm.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
