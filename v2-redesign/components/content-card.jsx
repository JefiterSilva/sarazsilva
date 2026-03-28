import { Card, CardContent } from '@/components/ui/card';

const ContentCard = () => {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/3">
      <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContentCard;
