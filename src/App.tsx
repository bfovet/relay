import { deliveries } from "./deliveries";
export default function App() {
	return (
		<main>
			<h1>Relay</h1>
			<section
				className="table-scroll"
				aria-label="Webhook deliveries table"
				// biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need focus to scroll the table.
				tabIndex={0}
			>
				<table>
					<caption>Webhook deliveries</caption>
					<thead>
						<tr>
							<th scope="col">Event</th>
							<th scope="col">Endpoint</th>
							<th scope="col">Status</th>
							<th scope="col">Created</th>
							<th scope="col">Response</th>
						</tr>
					</thead>
					<tbody>
						{deliveries.map((delivery) => (
							<tr key={delivery.id}>
								<td>{delivery.eventType}</td>
								<td>{delivery.endpointUrl}</td>
								<td>{delivery.status}</td>
								<td>
									<time dateTime={delivery.createdAt}>
										{delivery.createdAt}
									</time>
								</td>
								<td>{delivery.latestResponseCode ?? "No response"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</main>
	);
}
