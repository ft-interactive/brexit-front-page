const prefConfings = {
    editionPref: {
        options: ['international', 'uk'],
        name: 'next-edition',
        // 1 year
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
};

const prefs = (req, res, next) => {
    Object.keys(req.query)
        .filter(key => {
            const prefConfig = prefConfings[key];
            // make sure the value is one of the possible ones
            return prefConfig && prefConfig.options.includes(req.query[key]);
        })
        .forEach(prefName => {
            const prefConfig = prefConfings[prefName];
            res.cookie(prefConfig.name, req.query[prefName], { domain: 'ft.com', maxAge: prefConfig.maxAge });
        });

    next();
};

export default prefs;
