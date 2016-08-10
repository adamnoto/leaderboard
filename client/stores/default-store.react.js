import { EventEmitter } from 'events';
import assign from 'object-assign';

const DefaultStore = {};

DefaultStore.prototype = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit('CHANGE');
    },

    addChangeListener: function(func) {
        this.on('CHANGE', func);
    },

    removeChangeListener: function(func) {
        this.removeListener('CHANGE', func);
    }
});

export default DefaultStore;
