const contentful = require('contentful');
const Util = require('util');
const path = require('path');
const fs = require('fs');

Util.inspect.defaultOptions.depth = 10;
Util.inspect.defaultOptions.colors = true;
const spaceId = '05nc6mbisqy8';
const accessToken = 'AA7ePv3v7sxuV3NhDDMxkPXOifZ63BHoKd3WSp9jYN8';

const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
})

client.getEntries({ content_type: 'person'})
.then(function (entry) {
  entry.items.forEach(item => createJson(item));
});

function pathResolve(p) {
    return path.resolve(__dirname, p);
}

function createJson(item) {
    const json = JSON.stringify(item);
    fs.writeFileSync(`json/${item.fields.name}.json`, json);
}
