import { getProducts } from '@helpers/api';
import paginate from '@helpers/paginate';
import sort from '@helpers/sorting';
import filter from '@helpers/filter';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    let data;
    const { query } = req;
    const products = await getProducts();
    const paginated = paginate({
      page: Number(query.page || 1),
      limit: Number(query.limit || 4),
      data: products,
    });
    data = sort(
      query.sort
        ? {
            sortBy: query.sort[0],
            direction: query.sort[1],
            data: paginated.data,
          }
        : { data: paginated.data }
    );

    if (query.categories) {
      data = filter('categories', query.categories, data);
    }

    if (query.maxPrice || query.minPrice) {
      data = filter(
        'priceRage',
        { min: query.minPrice, max: query.maxPrice },
        data
      );
    }

    return res.status(200).json({ ...paginated, data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Server was interupted' });
  }
};
