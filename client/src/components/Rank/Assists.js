import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RankItem from './RankItem';

const APG_QUERY = gql`
  query apgQuery {
    apgRank {
      playerId
      enName
      pic
      assistsPG
    }
  }
`;

const AssistRank = ({ openModal }) => (
  <Query query={APG_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <h4>Loading...</h4>;
      if (error) console.log(error);
      return (
        <Fragment>
          {data.apgRank.map(player => (
            <RankItem
              key={player.playerId}
              player={player}
              openModal={openModal}
              numName='assistsPG'
            />
          ))}
        </Fragment>
      );
    }}
  </Query>
);

export default AssistRank;
