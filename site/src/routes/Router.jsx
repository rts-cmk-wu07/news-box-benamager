import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "../App"
import NewsboxPage from "../pages/NewsboxPage"
import ArchivePage from "../pages/ArchivePage"
import SettingsPage from "../pages/SettingsPage"
import NotFoundPage from "../pages/NotFoundPage"

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NewsboxPage />}></Route>
            <Route path="/archive" element={<ArchivePage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
