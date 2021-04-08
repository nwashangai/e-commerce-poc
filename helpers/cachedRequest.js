import axios from 'axios';

const requestBuild = () => {
  const cache = [];

  return async (url) => {
    const isCached = cache.find((response) => response.url === url);
    if (isCached) {
      return isCached.data;
    } else {
      const data = await axios.get(url).then((res) => res.data);
      cache.push({ url, data });
      return data;
    }
  };
};

export default requestBuild();
