// pages/index.js

import LoginComponent from "@/components/auth/login.component";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing-page";

export default function Home() {
  let isLoggedIn = false;

  return (
    <div className="container mx-auto px-4">
      {isLoggedIn && <Header />}
      {!isLoggedIn && <LoginComponent />}
      {isLoggedIn && <LandingPage />}
      <Footer />
    </div>
  );
}
