export const GistCache = () => {
  const cache = {};
  return {
    set: (key, data) => {
      cache[key] = data;
      console.log(cache)
    },
    get: (key) => {
      return cache[key];
    },
  };
};
