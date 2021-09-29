import Header from './components/header';
import Content from './components/content';
import useSWR from 'swr';

export default function Home() {

	let practice = '練習'
	const fetcher = () => fetch('/api/message')
	const {data, error} = useSWR('/api/message', fetcher)
	if(error) return <div>failed to load</div>
	if(!data) return <div>loading...</div>
	console.log(data.message)
	return (
		<>
			
			<Content>
			<Header title={ practice } />
				<h2 style={{ textAlign: 'center' }}>初めてのNext.jsだよ</h2>
				<p style={{ textAlign: 'center' }}> { data.message } </p>
			</Content>
		</>
	);
}
