import { getProducts } from '@helpers/api';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    const products = await getProducts();
    const prices = products.map((product) => product.data.price);
    const max = Math.max(...prices);
    const groups = max / 5;

    return res.status(200).json([
      {
        max: Math.floor(groups) * 2,
      },
      {
        max: Math.floor(groups) * 3,
        min: Math.floor(groups) * 2,
      },
      {
        max: Math.floor(groups) * 4,
        min: Math.floor(groups) * 3,
      },
      {
        min: Math.floor(groups) * 4,
      },
    ]);
  } catch (error) {
    res.status(500).json({ message: 'Server was interupted' });
  }
};
