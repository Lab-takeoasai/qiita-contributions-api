const cheerio = require('cheerio');
const request = require('request');

function qiitaContributions(user) {
    return new Promise((resolve, reject) => {
        request('http://qiita.com/' + user, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(response);
            const $ = cheerio.load(body)
            const contributions = $('span.userActivityChart_statCount');
            contributions.each((i, element) => {
                if (i === 1) resolve(element.children[0].data);
            });
            resolve(0);
        });
    });
}

exports.qiitaContributions = (request, response) => {
    const user = request.query.user;
    qiitaContributions(user).then(contributions => {
        const json = {
            id: user,
            contributions: contributions,
        };
        response.send(JSON.stringify(json));
    }).catch(error => {
        response.send(JSON.stringify({}));
    });
};
