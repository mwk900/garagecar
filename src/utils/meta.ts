export function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let tag = document.head.querySelector(`meta[${attr}='${name}']`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}
