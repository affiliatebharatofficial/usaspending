import CategoryDetailPage from '../categories/[slug]/page';
export { generateMetadata } from '../categories/[slug]/page';

export default function RootCategorySpendingPage({ params }: { params: { 'category-spending': string } }) {
  const slug = params['category-spending'];
  return <CategoryDetailPage params={{ slug }} />;
}
