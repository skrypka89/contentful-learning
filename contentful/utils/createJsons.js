const fs = require('fs');
const pathResolve = require('./pathResolve');

const createJsons = entry =>
    entry.items.forEach(item => {
        const obj = {
            id: item.sys.id,
            revision: item.sys.revision,
            createdAt: item.sys.createdAt,
            ...item.fields
        };
        const json = JSON.stringify(obj);
        fs.writeFileSync(pathResolve(`json/${obj.name}.json`), json);
    })
;

module.exports = createJsons;
