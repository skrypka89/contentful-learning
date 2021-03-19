const contentful = require('contentful');
const Util = require('util');
const path = require('path');
const fs = require('fs');

Util.inspect.defaultOptions.depth = 10;
Util.inspect.defaultOptions.colors = true;
const spaceId = '05nc6mbisqy8';
const accessToken = 'AA7ePv3v7sxuV3NhDDMxkPXOifZ63BHoKd3WSp9jYN8';

const pathResolve = p => path.resolve(__dirname, p);
const deleteJsons = p => {
    const files = fs.readdirSync(pathResolve(p));
    const filenames = files.map(file => {
        const parts = file.split('.');

        if (/\.json/.test(file) && parts[parts.length - 1] === 'json') {
            return file;
        }
    })
    filenames.forEach(filename => filename && fs.unlinkSync(pathResolve(p + '/' + filename)));
};
const createJsons = entry =>
    entry.items.forEach(item => {
        const obj = {
            id: item.sys.id,
            revision: item.sys.revision,
            createdAt: item.sys.createdAt,
            fields: item.fields
        };
        const json = JSON.stringify(obj);
        fs.writeFileSync(pathResolve(`json/${obj.fields.name}.json`), json);
    })
;

const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
});
client.getEntries({ content_type: 'person' })
.then(entry => {
    deleteJsons('json');
    createJsons(entry);
});
