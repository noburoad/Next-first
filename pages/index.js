import Header from './components/header';
import Content from './components/content';

export default function Home() {
	return (
		<>
			<Header title={`ヘッダー`}></Header>
			<Content>
				<h2 style={{ textAlign: 'center' }}>初めてのNext.jsだよ</h2>
				<p style={{ textAlign: 'center' }}>べんきょうちゅう</p>
			</Content>
		</>
	);
}
