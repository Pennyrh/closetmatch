import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Placeholder from './pages/Placeholder.jsx';

const routes = [
  { path: 'closet', title: 'My Closet', stories: ['US-04'] },
  { path: 'closet/add', title: 'Add Clothing', stories: ['US-01'] },
  { path: 'closet/:id', title: 'Clothing Item Details', stories: ['US-04', 'US-23'] },
  { path: 'closet/:id/edit', title: 'Edit Clothing', stories: ['US-07'] },
  { path: 'closet/:id/matches', title: 'Find Matches', stories: ['US-17'] },
  { path: 'outfits', title: 'Saved Outfits', stories: ['US-13'] },
  { path: 'outfits/new', title: 'Outfit Builder', stories: ['US-09', 'US-11', 'US-13'] },
  { path: 'outfits/:id', title: 'Outfit Details', stories: ['US-11', 'US-13'] },
  { path: 'planner', title: 'Outfit Planner', stories: ['US-20'] },
  { path: 'usage', title: 'Wardrobe Usage', stories: ['US-23', 'US-26'] },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={<Placeholder title={r.title} stories={r.stories} />}
          />
        ))}
        <Route path="*" element={<Placeholder title="Page not found" stories={[]} />} />
      </Route>
    </Routes>
  );
}
