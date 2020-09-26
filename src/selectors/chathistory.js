import * as util from '../utils/helper';

export default ({ to, from, messages }) => {
    let msgKey = util.toFromEncode(to.userid, from.userid);

    if (msgKey in messages) {
        return messages[msgKey];
    }
    return null;

}
