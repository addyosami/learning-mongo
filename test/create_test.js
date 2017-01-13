/**
 * Created by Nam-Le on 12/01/2017.
 */
const assert = require('assert');
const rek = require('rek');

const User = rek('src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new User({
            name: 'joe'
        });

        joe.save()
            .then(() => {
               assert(!joe.isNew);
               done();
            });
    });
});
