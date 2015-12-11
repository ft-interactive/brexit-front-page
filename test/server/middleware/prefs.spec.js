import request from 'supertest';
import express from 'ft-next-express';

import prefs from '../../../server/middleware/prefs';

describe('Prefs Middleware', () => {

    const app = express();

    before(() => {
        app.use(prefs);
    });

    it('should set the next-edition cookie if query string', done => {
        request(app)
            .get(`/?editionPref=uk`)
            .expect('set-cookie', /\bnext-edition=uk; Max-Age=31536000; Domain=ft.com;/, done)
    });

    it('should set the next-edition cookie if query string', done => {
        request(app)
            .get(`/?editionPref=international`)
            .expect('set-cookie', /\bnext-edition=international; Max-Age=31536000; Domain=ft.com;/, done)
    });

});
