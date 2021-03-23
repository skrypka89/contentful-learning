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
const caseAll = []
careers.forEach(c => {
    const page = {
        id: c.id,
        entryPoint: './app/scripts/pages/casePage.ts',
        templateName: 'app/html/case.ejs',
        skipRender: false,
        status: 'case',
        output: {
            path: `case${c.id}/index.html`,
            href: '/',
            title: 'Zajno | Digital Design Agency',
            description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
            image: 'zajno.png',
            locale: 'en',
            copy: c,
        },
    };
    caseAll.push(page)
})
// const caseAll = careers;

export default caseAll;

