import Header from './components/header';

export default function Home() {
	return (
		<>
			<Header title={`ヘッダー`}></Header>
			<h2 style={{ textAlign: 'center' }}>初めてのNext.jsだよ</h2>
			<p style={{ textAlign: 'center' }}>べんきょうちゅう</p>
		</>
	);
}
