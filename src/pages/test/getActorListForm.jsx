import * as Api from '../../utils/api'

export default function App() {
	
	const handleClickEvent = () => {
		//console.log(data);
    const apiContext/*ApiContext*/ = {
      apiRootUrl: process.env.SELF_API_URL || 'http://localhost:3000/api',
    }
		Api.GetActorsList(apiContext)
			.then(result => {
				console.log(result);
			})
	}

	return (
		<>
			<a href="/">戻る</a>
			<br />
			<button onClick={handleClickEvent}>一覧取得</button>
		</>
	)
}