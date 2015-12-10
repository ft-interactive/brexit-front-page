import request from 'supertest';

import { app, listen } from '../../../server/app';

describe('Front Page', () => {

    before(() => listen);

    it('should be able to set edition to uk', done => {
        request(app)
            .get(`/uk?editionPref=uk`)
            .expect('set-cookie', /\bnext-edition=uk; Max-Age=31536000; Domain=ft.com;/, done)
    });

    it('should be able to set edition to international', done => {
        request(app)
            .get(`/uk?editionPref=international`)
            .expect('set-cookie', /\bnext-edition=international; Max-Age=31536000; Domain=ft.com;/, done)
    });

});
