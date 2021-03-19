const fs = require('fs');
const pathResolve = require('./pathResolve');

const deleteJsons = p => {
    const files = fs.readdirSync(pathResolve(p));
    const filenames = files.map(file => {
        const parts = file.split('.');

        if (/\.json/.test(file) && parts[parts.length - 1] === 'json') {
            return file;
        }
    });
    filenames.forEach(filename => filename && fs.unlinkSync(pathResolve(p + '/' + filename)));
};

module.exports = deleteJsons;
