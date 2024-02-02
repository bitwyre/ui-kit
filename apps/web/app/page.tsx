import {Button} from "@bitwyre/ui-kit/button";
import {Card} from "@bitwyre/ui-kit/card";

const HomePage = () => {
  return (
    <div>
      <p>Hei This is HomePage</p>
      <Button variant="link">This is Button</Button>
      <div className="mt-5 p-4">
        <Card className="p-4">
          <p>This is Card</p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
