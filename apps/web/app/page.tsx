import {Button, Card, Idr, Usd} from "@bitwyre/ui-kit";

const HomePage = () => {
  return (
    <div>
      <p>Hei This is HomePage</p>
      <Idr size={30} />
      <Usd size={30} />
      <Button variant="link">This is Button</Button>
      <div className="mt-5 bg-green-400 p-4 text-white">
        <Card className="p-4">
          <p>This is Card</p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
