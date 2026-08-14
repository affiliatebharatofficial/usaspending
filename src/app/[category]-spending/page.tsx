import CategoryDetailPage from '../categories/[slug]/page';
export { generateMetadata } from '../categories/[slug]/page';

export default function RootCategorySpendingPage({ params }: { params: { 'category-spending'?: string; category?: string } }) {
  const slug = params?.category || params?.['category-spending'] || '';
  return <CategoryDetailPage params={{ slug }} />;
}
