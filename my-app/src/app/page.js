import HomeMain from '@/components/HomeMain';
import data from '@/data/irg-data.json';

export default function Home() {
  return <HomeMain data={data} />;
}
