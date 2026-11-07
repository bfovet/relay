export type Delivery = {
	id: string;
	eventType:
		| "payment.created"
		| "payment.converted"
		| "payment.failed"
		| "payment.canceled";
	endpointUrl: string;
	status: "pending" | "succeeded" | "failed";
	createdAt: string;
	latestResponseCode: number | null;
};

export const deliveries: Delivery[] = [
	{
		id: "del_001",
		eventType: "payment.created",
		endpointUrl: "https://example.com/webhooks",
		status: "succeeded",
		createdAt: "2026-11-07T09:00:00Z",
		latestResponseCode: 200,
	},
	{
		id: "del_002",
		eventType: "payment.converted",
		endpointUrl: "https://crm.example.com/webhooks",
		status: "succeeded",
		createdAt: "2026-11-07T09:05:00Z",
		latestResponseCode: 204,
	},
	{
		id: "del_003",
		eventType: "payment.failed",
		endpointUrl: "https://billing.example.com/webhooks",
		status: "failed",
		createdAt: "2026-11-07T09:10:00Z",
		latestResponseCode: 500,
	},
	{
		id: "del_004",
		eventType: "payment.converted",
		endpointUrl: "https://accounting.example.com/webhooks",
		status: "failed",
		createdAt: "2026-11-07T09:15:00Z",
		latestResponseCode: null,
	},
	{
		id: "del_005",
		eventType: "payment.created",
		endpointUrl: "https://subscriptions.example.com/webhooks",
		status: "pending",
		createdAt: "2026-11-07T09:20:00Z",
		latestResponseCode: null,
	},
];
