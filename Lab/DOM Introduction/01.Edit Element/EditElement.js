function editElement(reference,match,replacement){
    const reg = new RegExp(match, 'g');
    let content = reference.textContent;
    content = content.replace(reg,replacement);
    reference.textContent = content;
}