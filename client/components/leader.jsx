import React from 'react';
import classNames from 'classnames';
import BoardStore from '../stores/board-store.react';

export default class Leader extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.string.isRequired,
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
    }

    onChange() {
        this.setState({
            selected: this.state.id === BoardStore.getSelectedLeaderId()
        });
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    render() {
        let classes = {
            player: true,
            selected: this.state.isSelected
        };

        return (
            <li id={this.state.id} className={classNames(classes)}>
                {this.state.name}
            </li>
        )
    }
}
