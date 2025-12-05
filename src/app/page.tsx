import Header from "@/components/Header/Header";
import PoskoList from "@/components/PoskoList/PoskoList";
import AppLayout from './AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <Header />
      <PoskoList />
    </AppLayout>
  );
}
