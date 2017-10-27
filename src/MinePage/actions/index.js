/**
 * Created by zhudamao on 2017/10/27.
 */

import {FILTER_ACTION} from '../../appnavigatorreducer'


/**
 *  Action Creator
 * */

export function navgationNagative(dest) {
    return {type:FILTER_ACTION.Navigate,DEST:dest};
}