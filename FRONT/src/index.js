import { createRoot } from "react-dom/client";
import App from "./components/App";
import './styles/index.scss';
import * as dotenv from 'dotenv'; // on importe dotenv pour charger nos variables d'environnement

dotenv.config();

const container = document.getElementById("app");

const root = createRoot(container);

root.render(<App />);