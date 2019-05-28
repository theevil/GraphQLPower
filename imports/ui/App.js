import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => {
    if (data.loading) return null;
    return (
      <div>
        <h1>{data.hi}</h1>
        <div>
          <ul>
            {data.resolucions.map(resolution =>{
              return <li key={resolution._id}>{resolution.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };

const hiQuery = gql`
{
    hi
    resolucions{
      _id
      name
    }
}
`;

export default graphql(hiQuery)(App);