import React from 'react';
import classNames from 'classnames';
import BoardStore from '../stores/board-store.react';

export default class Leader extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            totalVote: React.PropTypes.number.isRequired
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            id: this.props.id,
            name: this.props.name
        };

        this.onChange = this.onChange.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    onChange() {
        this.setState({
            isSelected: this.state.id === BoardStore.getSelectedLeaderId()
        });
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    handleClickEvent(e) {
        BoardStore.setSelectedLeaderId(this.state.id);
    }

    render() {
        let classes = {
            player: true,
            selected: this.state.isSelected
        };

        return (
            <li key={this.state.id} className={classNames(classes)}
                onClick={this.handleClickEvent}>
                {this.state.name}
            </li>
        )
    }
}
