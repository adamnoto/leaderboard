import BoardStore from '../stores/board-store.react';
import { get } from 'axios';

const BoardActions = {
    index: () => {
        get('http://localhost:3000/boards').then((resp) => {
            BoardStore.setCollection(resp.data);
        });
    }
};

export default BoardActions;
