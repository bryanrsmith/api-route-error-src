export const config = {
	runtime: 'edge',
};

export default function () {
	return new Response('Hello from edge');
}
