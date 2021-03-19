const contentful = require('contentful');
const Util = require('util');
const deleteJsons = require('./utils/deleteJsons');
const createJsons = require('./utils/createJsons');

Util.inspect.defaultOptions.depth = 10;
Util.inspect.defaultOptions.colors = true;
const spaceId = '05nc6mbisqy8';
const accessToken = 'AA7ePv3v7sxuV3NhDDMxkPXOifZ63BHoKd3WSp9jYN8';

const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
});
client.getEntries({ content_type: 'person' })
.then(entry => {
    deleteJsons('json');
    createJsons(entry);
});
