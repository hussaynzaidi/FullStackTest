import ActionsFooter from "./components/actionsfooter";
import LoadBoard from "./components/loadboard";
import WelcomeHeader from "./components/welcome-header";

export default function Home() {
  return (
    <div className="mx-8 w-full mt-10">
      <WelcomeHeader/>
      <LoadBoard/>
      <ActionsFooter />
    </div>
  );
}
