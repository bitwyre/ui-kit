import {Button, Card, CardDescription, CardHeader, CardTitle} from "@bitwyre/ui-kit";

const HomePage = () => {
  return (
    <div>
      <p>Hei This is HomePage</p>
      <Button variant="link">This is Button</Button>
      <div className="mt-5 p-4">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>Total Assets</CardTitle>
            <CardDescription>≈1,000,000.00 USD</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
