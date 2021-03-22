// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path';
import fs from 'fs';

const regexp = /.json/;

function pathResolve(p) {
    return path.resolve(__dirname, p);
}
const templateDir = pathResolve('./');
const templateFiles = fs.readdirSync(templateDir);
// eslint-disable-next-line array-callback-return
const filtrtemplateFiles = templateFiles.filter(name => { if (regexp.test(name)) return name; });
const careers = [];
filtrtemplateFiles.forEach(n => {
    careers.push(JSON.parse(fs.readFileSync(`${templateDir}/${n}`, 'utf8')));
});

const caseAll = careers;

export default caseAll;

