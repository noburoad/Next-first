export default function Content({ children }) {
	return (
		<>
			<div className="container">{children}</div>
			<hr />
			<footer style={{ textAlign: 'center' }}>©︎のぶプラクティス</footer>
		</>
	);
}
