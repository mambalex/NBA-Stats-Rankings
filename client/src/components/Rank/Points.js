import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RankItem from './RankItem';

const PPG_QUERY = gql`
  query ppgQuery {
    ppgRank {
      playerId
      enName
      pic
      pointsPG
    }
  }
`;

const PointRank = ({ openModal }) => (
  <Query query={PPG_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <h4>Loading...</h4>;
      if (error) console.log(error);
      return (
        <Fragment>
          {data.ppgRank.map(player => (
            <RankItem
              key={player.playerId}
              player={player}
              openModal={openModal}
              numName='pointsPG'
            />
          ))}
        </Fragment>
      );
    }}
  </Query>
);

export default PointRank;
