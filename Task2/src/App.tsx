
import DeviceFrame from './components/DeviceFrame';
import Collectibles from './components/Collectibles';

function App() {
  return (
    <div className="min-h-screen bg-[#111] grid place-items-center w-full">
      <DeviceFrame>
        <Collectibles />
      </DeviceFrame>
    </div>
  );
}

export default App;
