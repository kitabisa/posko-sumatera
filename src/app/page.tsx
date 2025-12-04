import Header from "@/components/Header/Header";
import PoskoList from "@/components/PoskoList/PoskoList";
import FloatingBar from "@/components/FloatingBar/FloatingBar";

export default function Home() {
  return (
    <main>
      <Header />
      <PoskoList />
      <FloatingBar />
    </main>
  );
}
