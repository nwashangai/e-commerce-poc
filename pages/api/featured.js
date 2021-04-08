import { getProducts } from '@helpers/api';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    const product = (await getProducts()).find((item) => item.data.featured);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Server was interupted' });
  }
};
