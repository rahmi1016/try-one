import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  return (
    <>
      <div className="w-full h-full bg-very-light-grayish-blue font-josefin dark:bg-very-dark-blue">
        <div
          className={`flex items-center bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light dark:sm:bg-desktop-dark bg-no-repeat bg-top flex-col w-lvw h-screen`}
        >
          <Header />
          <Lists />
          <div className="text-sm text-darkish-grayish-blue">Drop and drag to reorder list</div>
        </div>
      </div>
    </>
  );
}

export default App;
