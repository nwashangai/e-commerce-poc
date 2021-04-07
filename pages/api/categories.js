import { getProducts } from '@helpers/api';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    const products = await getProducts();
    const categories = products.map((product) => product.data.category);
    return res.status(200).json([...new Set(categories)]);
  } catch (error) {
    res.status(500).json({ message: 'Server was interupted' });
  }
};
