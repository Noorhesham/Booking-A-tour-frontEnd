export interface LocationProp {
  type: 'Point';
  coordinates: [number,number];
  description: string;
  day:number;
  _id:string
}
export interface TourProp {
  startLocation: Location;
  ratingsAverage: Number;
  ratingsQuantity: Number;
  images: Array<string>;
  startDates: Array<Date>;
  secretTour: boolean;
  guides: Array<{ role: string; _id: string; name: string; email: string; photo: string }>;
  _id: string;
  name: string;
  duration: Number;
  maxGroupSize: Number;
  difficulty: string;
  price: Number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Array<Location>;
  slug: string;
  durationWeeks: number;
  id: string;
}
export interface GuideProp {
  role: "lead-guide" | "tour-guide";
  _id: string;
  name: string;
  email: string;
  photo: string;
}
export interface UserProp{
  name: string; photo: string; _id: string;email:string
}
export interface reviewProp{
  createdAt: string | Date;
    _id: string;
    review: string;
    rating: number;
    user: UserProp;
    tour: string;
    id: string;
}
export interface TourDetailsProp {
  startLocation: Location;
  ratingsAverage: Number;
  ratingsQuantity: Number;
  images: Array<string>;
  startDates: Array<Date>;
  secretTour: boolean;
  guides: Array<GuideProp>;
  _id: string;
  name: string;
  duration: Number;
  maxGroupSize: Number;
  difficulty: string;
  price: Number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Array<LocationProp>;
  slug: string;
  durationWeeks: number;
  id: string;
  reviews: Array<reviewProp>;
}
