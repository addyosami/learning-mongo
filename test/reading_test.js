/**
 * Created by Nam-Le on 12/01/2017.
 */
const assert = require('assert');
const rek = require('rek');

const User = rek('src/user');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'joe' });
        joe.save()
            .then(() => done());
    });

    it('finds all users with a name of joe', (done) => {
        User.find({ name: 'joe' })
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString());
                done()
            });
    });

    it('find a user with a particular id', (done) => {
        User.findOne({ _id: joe._id })
            .then((user) => {
                assert(user.name === 'joe');
                done();
            });
    });
});
