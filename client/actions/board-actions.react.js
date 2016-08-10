import BoardStore from '../stores/board-store.react';
import { get, post } from 'axios';

const BoardActions = {
    index: () => {
        get('http://localhost:3000/boards').then((resp) => {
            BoardStore.setCollection(resp.data);
        });
    },

    addPoints: (selectedLeaderId) => {
        post('http://localhost:3000/boards/vote', {
            selectedLeaderId: selectedLeaderId
        }).then((resp) => {
            BoardActions.index();
        });
    }
};

export default BoardActions;
