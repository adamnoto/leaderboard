import DefaultStore from './default-store.react';
import assign from 'object-assign';

const BoardStore = assign({}, DefaultStore.prototype, {
});

export default BoardStore;
