import faunadb from 'faunadb';

const client = new faunadb.Client({ secret: process.env.DB_SECRET });
const query = faunadb.query;

export const getProducts = async () => {
  const collection = query.Collection('products');
  const documents = query.Documents(collection);
  const pagination = query.Paginate(documents);
  const callback = query.Lambda('ref', query.Get(query.Var('ref')));
  const { data } = await client.query(query.Map(pagination, callback));

  return data.map((product) => {
    product.id = product.ref.id;
    delete product.ref;
    return product;
  });
};

export default { getProducts };
