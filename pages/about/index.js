import Link from 'next/link';
import Header from '../components/header';

export default function About() {
	return (
		<>
			<Header title={'ヘッダー'}></Header>
			<h1 style={{ textAlign: 'center' }}>アバウトページだよ。</h1>
			<Link href={`/`}>
				<button style={{ cursor: 'pointer' }}>トップへ</button>
			</Link>
		</>
	);
}
