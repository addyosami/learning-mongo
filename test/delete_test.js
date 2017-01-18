/**
 * Created by Nam-Le on 13/01/2017.
 */
const assert = require('assert');
const rek = require('rek');

const User = rek('src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'joe' });
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'joe' })) // Personally, I prefer use findById
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method remove', (done) => {
        // Remove a bunch of records with some given criteria
        User.remove({ name: 'joe' })
            .then(() => User.findOne({ name: 'joe' })) // Personally, I prefer use findById
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findOneAndRemove', (done) => {
        User.findOneAndRemove({ name: 'joe' })
            .then(() => User.findOne({ name: 'joe' })) // Personally, I prefer use findById
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({ name: 'joe' })) // Personally, I prefer use findById
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});
