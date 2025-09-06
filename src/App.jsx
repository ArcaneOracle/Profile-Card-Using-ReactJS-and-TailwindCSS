import './App.css';
import profilePic from './assets/jeremy-clarkson2.jpg';
import UserProfile from './components/UserProfile.jsx';

const user = {
   name: `Jeremy`,
   surname: `Clarkson`,
   dateOfBirth: `1960-04-11`,
   country: `USA`,
   email: `thejeremyclarkson@gmail.com`,
   telephone: ``,
   company: `Top Gear`,
   profilePicture: profilePic,
   interests: [`cars`, `motorcycles`, `music`, `movies`]
};

export default function App() {
   return <UserProfile user={user} />;
}
