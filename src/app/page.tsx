import NavIconProvider from "@/provider/NavIconProvider";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <NavIconProvider>
      <Header />
      <Hero />
    </NavIconProvider>
  );
}
