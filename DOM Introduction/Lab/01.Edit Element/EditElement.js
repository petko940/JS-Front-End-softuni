function editElement(element, match, replacer) {
    let textContent = element.textContent;
    let newTextContent = textContent.replace(new RegExp(match, 'g'), replacer);

    element.textContent = newTextContent
}

