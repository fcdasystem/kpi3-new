document.addEventListener('DOMContentLoaded', () => {
	const downloadBtn = document.querySelector('.respons');
	const users = document.querySelector('.block');

	const fetchData = async () => {
		const response = await fetch('https://randomuser.me/api');
		const data = await response.json();
		
		return data;
	}

	downloadBtn.addEventListener('click', () => {
		fetchData().then((data) => {
			const { results } = data;
			let html = '';

			results.forEach(({ picture, city, postcode, location, name }) => {
				html = `
					<div class="user">
						<div class="photo">
							<img src="${ picture.large }"/>
						</div>
                        <div><b>City:</b> ${ location.city }</div>
                        <div><b>Postcode:</b> ${ location.postcode }</div>
						<div><b>Location:</b> Street: ${ location.street.name }, ${ location.street.number }</div>
                        <div><b>Name:</b> ${ name.title } ${ name.first } ${ name.last }</div>
					</div>
				`
			});

			users.innerHTML = html;

		}).catch((error) => {
			console.log(error);
		})
	})
});
