const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} = require('graphql');

// BaseInfo Type
const BaseInfoType = new GraphQLObjectType({
  name: 'playerBaseInfo',
  fields: () => ({
    enName: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    height: { type: GraphQLString },
    weight: { type: GraphQLString },
    jerseyNum: { type: GraphQLString },
    picFromSIB: { type: GraphQLString }
  })
});

// SeasonStats Type
const SeasonStatType = new GraphQLObjectType({
  name: 'SeasonStatType',
  fields: () => ({
    pointsPG: { type: GraphQLString },
    assistsPG: { type: GraphQLString },
    reboundsPG: { type: GraphQLString }
  })
});

// Player Type
const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    playerBaseInfo: { type: BaseInfoType },
    playerSeasonStat: { type: SeasonStatType }
  })
});

// Points per game Type
const PpgType = new GraphQLObjectType({
  name: 'PPG',
  fields: () => ({
    playerId: { type: GraphQLString },
    enName: { type: GraphQLString },
    pic: { type: GraphQLString },
    pointsPG: { type: GraphQLString }
  })
});

// Assists per game Type
const ApgType = new GraphQLObjectType({
  name: 'APG',
  fields: () => ({
    playerId: { type: GraphQLString },
    enName: { type: GraphQLString },
    pic: { type: GraphQLString },
    assistsPG: { type: GraphQLString }
  })
});

// Rebounds per game Type
const RpgType = new GraphQLObjectType({
  name: 'RPG',
  fields: () => ({
    playerId: { type: GraphQLString },
    enName: { type: GraphQLString },
    pic: { type: GraphQLString },
    reboundsPG: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ppgRank: {
      type: new GraphQLList(PpgType),
      resolve(parent, args) {
        return axios
          .get(
            'http://data.chingsoft.com/api/v1/sports/player_range?year=2019&type=1&limit=8'
          )
          .then(res => res.data.data.nbaPlayerSeasonPointsRank);
      }
    },
    apgRank: {
      type: new GraphQLList(ApgType),
      resolve(parent, args) {
        return axios
          .get(
            'http://data.chingsoft.com/api/v1/sports/player_range?year=2019&type=1&limit=8'
          )
          .then(res => res.data.data.nbaPlayerSeasonAssistsRank);
      }
    },
    rpgRank: {
      type: new GraphQLList(RpgType),
      resolve(parent, args) {
        return axios
          .get(
            'http://data.chingsoft.com/api/v1/sports/player_range?year=2019&type=1&limit=8'
          )
          .then(res => res.data.data.nbaPlayerSeasonReboundsRank);
      }
    },
    player: {
      type: PlayerType,
      args: {
        playerId: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(
            `http://data.chingsoft.com/api/v1/sports/player_info?id=${args.playerId}`
          )
          .then(res => res.data.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
