/**
 * This function will receive an object and convert all its values as list
 * of string. Final this function will join all strings wtih '&' and return
 * a single string.
 *
 * @param {object} params   An object of query parameters.
 * @returns {string}   A string of object by joining all its values with '&'
 */
export const objectToQueryParams = (params) => {
  const paramList = [];
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      paramList.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  });

  return paramList.join("&");
};

/**
 * This function join baseURL and query parameters with '?'
 * @param {string} requestUrl   Base URL
 * @param {object} params   An object of query parameters.
 * @returns {string}  A single string by joining requestUrl and params with '?'
 */
export const getUrlWithParams = (requestUrl, params) => {
  const queryString = objectToQueryParams(params);
  return queryString ? `${requestUrl}?${queryString}` : `${requestUrl}`;
};
