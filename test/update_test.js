/**
 * Created by Nam-Le on 13/01/2017.
 */
const assert = require('assert');
const rek = require('rek');

const User = rek('src/user');

describe('Updating records', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'joe' });
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'alex');
                done();
            });
    }

    it('instance type using set n save', (done) => {
        joe.set('name', 'alex');
        assertName(joe.save(), done);
    });

    it('A model instance can update', (done) => {
        assertName(joe.update({ name: 'alex' }), done);
    });

    it('A model class can update', (done) => {
        assertName(
            User.update( {name: 'joe'}, {name: 'alex'} ),
            done
        );
    });

    it('A model class can update one record', (done) => {
        assertName(
            User.findOneAndUpdate( {name: 'joe'}, {name: 'alex'} ),
            done
        );
    });

    it('A model class can find a record with an Id and update', (done) => {
        assertName(
            User.findByIdAndUpdate( joe._id, {name: 'alex'} ),
            done
        );
    });
});
