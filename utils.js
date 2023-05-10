export function getCaseSensitiveInnerHtml(domElement) {
    let tempEl = document.createElement('ddd');
    [...domElement.childNodes].forEach(item => {
        tempEl.appendChild(item.cloneNode(true));
    });
    let template = new XMLSerializer().serializeToString(tempEl);
    template = template.replace(/^<ddd .*?>/g, '');
    template = template.replace(/<\/ddd>$/g, '');
    return template
}
