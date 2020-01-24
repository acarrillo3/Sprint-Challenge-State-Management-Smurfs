import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Card from "./Card";
import AddForm from "./AddForm";

const SmurfsList = props => {
  const { smurfs } = props;
  // Fetch smurfs data on load.
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="smurfs-list">
      <h1>Register: </h1>
      <AddForm />
      {smurfs.map(smurf => (
        <Card key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
