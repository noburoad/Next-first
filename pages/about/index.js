import Link from 'next/link';

export default function About() {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>アバウトページだよ。</h1>
			<Link href={`/`}>
				<button style={{ cursor: 'pointer' }}>トップへ</button>
			</Link>
		</>
	);
}
