import Button from "./components/Button";

export default function App() {
  return (
    <div>
      <h1>Buttons with different styles!</h1>
      <div>
        <Button success rounded outline>
          success rounded outline
        </Button>
      </div>
      <div>
        <Button danger outline>
          danger outline
        </Button>
      </div>
      <div>
        <Button warning>warning</Button>
      </div>
      <div>
        <Button secondary outline>
          secondary outline
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          secondary rounded
        </Button>
      </div>
    </div>
  );
}
