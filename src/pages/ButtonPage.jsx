import Button from "../components/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoAlert,
  GoCalendar,
  GoArchive,
} from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          primary rounded
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoCloudDownload />
          success rounded outline
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          danger outline
        </Button>
      </div>
      <div>
        <Button warning>
          <GoAlert /> warning
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCalendar />
          secondary outline
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoArchive />
          secondary rounded
        </Button>
      </div>
    </div>
  );
}
