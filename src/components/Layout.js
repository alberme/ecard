import { HashRouter, Routes, Route } from 'react-router-dom';

export default function Layout ({ children, card }) {
  return (
    <HashRouter>
      {/* Header */}
      <Routes>
        <Route path="/" element/>
        <Route path="/new" element/>
        <Route path="/preview" element/>
        <Route path="/view" element/>
      </Routes>
      {/* Footer */}
    </HashRouter>
  );
}