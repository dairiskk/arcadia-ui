// pages/index.js

import LoginComponent from "@/components/auth/login.component";
import Footer from "@/components/footer";
import Header from "@/components/header";


export default function Home() {


  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <LoginComponent></LoginComponent>
      <Footer></Footer>
    </div>
  );
}
