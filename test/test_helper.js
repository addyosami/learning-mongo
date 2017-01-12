/**
 * Created by Nam-Le on 12/01/2017.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://mongodb:27017/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (err) => {
            console.warn('Warning', err);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test!
        done();
    });
});
