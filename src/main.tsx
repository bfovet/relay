import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Missing root element");
}

createRoot(container).render(
	<main>
		<h1>Relay</h1>
		<p>Your webhook deliveries will appear here.</p>
	</main>,
);
