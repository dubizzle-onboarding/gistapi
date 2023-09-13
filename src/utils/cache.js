// A cache Function that will cache the result against search keyword

export const GistCache = () => {
  const cache = {};
  return {
    set: (key, data) => {
      cache[key] = data;
    },
    get: (key) => {
      return cache[key];
    },
  };
};
