import React from 'react';

const RankItem = ({
  player,
  player: { playerId, enName, pic },
  openModal,
  numName
}) => {
  return (
    <div className='card card-body mb-4' style={{ paddingBottom: '0' }}>
      <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <img
            src={pic}
            alt='pic'
            style={{ display: 'block', height: '100%' }}
          />
        </div>
        <div className='col-md-5 col-sm-12'>
          <h5>{enName}</h5>
          <br />
          <h2>{player[numName].slice(0, 4)}</h2>
        </div>
        <div className='col-md-3 col-sm-12'>
          <button
            className='btn btn-secondary my-auto'
            onClick={() => openModal(playerId)}
          >
            Player Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
