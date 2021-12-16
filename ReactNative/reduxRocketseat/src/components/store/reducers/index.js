/* REDUX */
import { combineReducers } from 'redux';
/* * */

import course from './course';

export default combineReducers({
    course,
    // Cada reducer vai ser um novo objeto contido dentro do 'combineReducers'. Ex.: user
});

/*
    Estrutura do combineReducers:
        {
            course: { modules: null, activeLesson: null, modules: [] },
            user: { name: '', avatar: '' }
        }

*/
