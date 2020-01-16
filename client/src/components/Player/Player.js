import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const PLAYER_QUERY = gql`
  query plaryQuery($playerId: String!) {
    player(playerId: $playerId) {
      playerBaseInfo {
        enName
        birthDate
        height
        weight
        jerseyNum
        picFromSIB
      }
      playerSeasonStat {
        pointsPG
        assistsPG
        reboundsPG
      }
    }
  }
`;

const Player = ({ id, closeModal }) => {
  return (
    <Query query={PLAYER_QUERY} variables={{ playerId: id }}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading)
          return (
            <div className='modal' style={{ display: 'flex' }}>
              <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Player Details</h5>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='modal'
                      aria-label='Close'
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className='modal-body'>
                    <h3>loading...</h3>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        return (
          <div className='modal' style={{ display: 'flex' }}>
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    {data.player.playerBaseInfo.enName}
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                    onClick={closeModal}
                  ></button>
                </div>
                <div className='modal-body'>
                  <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                      <img
                        src={data.player.playerBaseInfo.picFromSIB}
                        alt='pic'
                        style={{ display: 'block', height: '150px' }}
                      />
                    </div>
                    <div className='col-md-6 px-5 col-sm-12'>
                      <p>
                        DOB: &nbsp;&nbsp;{data.player.playerBaseInfo.birthDate}
                      </p>
                      <p>
                        Height: &nbsp;&nbsp;{data.player.playerBaseInfo.height}
                      </p>
                      <p>
                        weight: &nbsp;&nbsp;{data.player.playerBaseInfo.weight}
                      </p>
                      <p>
                        Jersey#: &nbsp;&nbsp;
                        {data.player.playerBaseInfo.jerseyNum}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className='px-2 stats'>
                    <p>
                      PPG: &nbsp;&nbsp;{data.player.playerSeasonStat.pointsPG}
                    </p>
                    <p>
                      APG: &nbsp;&nbsp;{data.player.playerSeasonStat.assistsPG}
                    </p>
                    <p>
                      RPG: &nbsp;&nbsp;{data.player.playerSeasonStat.reboundsPG}
                    </p>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-dismiss='modal'
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Player;
