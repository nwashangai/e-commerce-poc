export default ({ page = 1, limit = 4, data = [] }) => {
  const total = data.length;
  const end = page * limit;
  const start = end - limit;
  return {
    prev: page <= 1 ? null : page - 1,
    next: total - end > 0 ? page + 1 : null,
    data: data.slice(start, end),
    total,
  };
};
