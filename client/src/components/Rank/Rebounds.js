import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RankItem from './RankItem';

const RPG_QUERY = gql`
  query rpgQuery {
    rpgRank {
      playerId
      enName
      pic
      reboundsPG
    }
  }
`;

const ReboundRank = ({ openModal }) => (
  <Query query={RPG_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <h4>Loading...</h4>;
      if (error) console.log(error);
      return (
        <Fragment>
          {data.rpgRank.map(player => (
            <RankItem
              key={player.playerId}
              player={player}
              openModal={openModal}
              numName='reboundsPG'
            />
          ))}
        </Fragment>
      );
    }}
  </Query>
);

export default ReboundRank;
