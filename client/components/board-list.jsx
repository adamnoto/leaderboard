import React from 'react';
import _ from 'lodash';
import BoardActions from '../actions/board-actions.react';
import BoardStore from '../stores/board-store.react';
import Leader from './leader';

export default class BoardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };

        this.onChange = this.onChange.bind(this);

        BoardActions.index();
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({collection: BoardStore.getCollection()});
    }

    render() {
        return (
            <div className='leaderboard'>
                <div className='playerList'>
                    {this.state.collection.map((data) => (
                        <Leader id={data.id}
                            name={data.name}
                            totalVote={data.total_vote}
                        ></Leader>
                    ))}
                </div>
            </div>
        )
    }
}
