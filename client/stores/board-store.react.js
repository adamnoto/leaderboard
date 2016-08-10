import DefaultStore from './default-store.react';
import assign from 'object-assign';

const BoardStore = assign({}, DefaultStore.prototype, {
    setSelectedLeaderId: function(leaderId) {
        this._selectedLeader = leaderId;
        this.emitChange();
    },

    getSelectedLeaderId: function(leaderId) {
        return this._selectedLeader;
    }
});

export default BoardStore;
