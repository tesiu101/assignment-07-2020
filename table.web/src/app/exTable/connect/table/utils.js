export function filterTable(data, filterString) {
	const _contains = containsString.bind(this, filterString);

	return data.filter((el) => _contains(el.name) || _contains(el.description));
}

export function containsString(filter, element) {
	const _filter = filter.toLowerCase();
	const _element = element.toLowerCase();
	return _element.indexOf(_filter) !== -1;
}
