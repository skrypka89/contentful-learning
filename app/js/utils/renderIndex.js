function heroSectionRender(obj) {
    const heroSection = `
        <h1 class="title-h3">${obj.name}</h1>
        <h2 class="title-h4"><u>Birthday:</u> ${obj.birthday}</h2>
        <h2 class="title-h4"><u>Company:</u> ${obj.company}</h2>
        <h2 class="title-h4"><u>Job position:</u> ${obj.jobPosition}</h2>
        <p class="desc-1">${obj.description}</p>
    `;
    return heroSection;
}

export { heroSectionRender };
