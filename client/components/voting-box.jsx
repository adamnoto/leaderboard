import React from 'react';
import BoardStore from '../stores/board-store.react';
import BoardActions from '../actions/board-actions.react';

export default class VotingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLeaderId: null
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.handleVoteClick = this.handleVoteClick.bind(this);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChangeEvent);
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChangeEvent);
    }

    onChangeEvent() {
        this.setState({selectedLeaderId: BoardStore.getSelectedLeaderId()});
    }

    handleVoteClick(e) {
        BoardActions.addPoints(this.state.selectedLeaderId)   
    }

    render() {
        if (this.state.selectedLeaderId) {
            return (
                <div className='details'>
                    <button className='inc'
                        onClick={this.handleVoteClick}>
                        Add 5 points
                    </button>
                </div>
            )
        } else {
            return <div className='message'>Click a leader to vote</div>;
        }
    }
}
