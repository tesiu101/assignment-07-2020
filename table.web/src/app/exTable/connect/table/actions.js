export const CHANGE_FILTER_STRING = 'CHANGE_FILTER_STRING';

export function change_filter_string(filter) {
  return {
    type: CHANGE_FILTER_STRING,
    filter
  };
}

export const FILTER_TABLE = 'FILTER_TABLE';

export function filter_table(data) {
  return {
    type: FILTER_TABLE,
    data
  };
}

