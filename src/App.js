// import PaintingList from './components/PaintingList';
// import paintings from './paintings.json';
import Alert from './components/Alert/Alert';
export default function App() {
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}

      <Alert
        text="GameOver
        
      "
        type="success"
      />
      <Alert
        text="GameOver
      "
        type="warning"
      />
      <Alert
        text="GameOver
      "
        type="error"
      />
    </div>
  );
}
