import { getAllTours } from "@/actions/getAllTours";
import Card from "@/components/Card";
import { TourProp } from "@/types/types";

export default async function Home() {
  const tours = await getAllTours();
  return (
    <main>
      <main className="main">
        <div className="card-container">
          {tours.map((tour:TourProp)=><Card key={tour._id} tour={tour}/>)}
        </div>
      </main>
    </main>
  );
}
