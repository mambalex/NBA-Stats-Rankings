import React, { Component } from 'react';
import classnames from 'classnames';
import PointRank from './Points';
import AssistRank from './Assists';
import ReboundRank from './Rebounds';
import Player from 'components/Player/Player';

class Rank extends Component {
  state = {
    points: true,
    assists: false,
    rebounds: false,
    playerId: null
  };
  changeTab = tab => {
    let newState = {
      points: false,
      assists: false,
      rebounds: false
    };
    newState[tab] = true;
    this.setState(newState);
  };
  openModal = id => {
    this.setState({ playerId: id });
  };
  closeModal = () => {
    this.setState({ playerId: null });
  };
  render() {
    const { playerId, points, assists, rebounds } = this.state;
    return (
      <div className='Ranking mt-5'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button
            type='button'
            className={classnames('btn btn-secondary', { active: points })}
            onClick={() => this.changeTab('points')}
          >
            Points
          </button>
          <button
            type='button'
            onClick={() => this.changeTab('assists')}
            className={classnames('btn btn-secondary', { active: assists })}
          >
            Assists
          </button>
          <button
            type='button'
            onClick={() => this.changeTab('rebounds')}
            className={classnames('btn btn-secondary', { active: rebounds })}
          >
            Rebounds
          </button>
        </div>
        <h3 className='my-5'>
          {points
            ? 'Points Per Game'
            : assists
            ? 'Assists Per Game'
            : 'Rebounds Per Game'}
        </h3>
        {points ? <PointRank openModal={this.openModal} /> : null}
        {assists ? <AssistRank openModal={this.openModal} /> : null}
        {rebounds ? <ReboundRank openModal={this.openModal} /> : null}
        {playerId ? (
          <Player id={playerId} closeModal={this.closeModal} />
        ) : null}
      </div>
    );
  }
}

export default Rank;
