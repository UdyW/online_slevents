export const validateOptions = (options) =>
  Array.isArray(options) && (options !== undefined || options.length !== 0);
