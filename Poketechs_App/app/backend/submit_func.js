import Environment from './dummy_environment'

export async function predict(content){
	try {
		let body = JSON.stringify({
			"payload": {
				"image": {
					"image_bytes": content
				}
			},
			"params": {
			}
		});

		let response = await fetch(
			"https://automl.googleapis.com/v1/projects/" + Environment["GOOGLE_AUTOML_PROJECT_ID"] +
			"/locations/" + Environment["GOOGLE_AUTOML_LOCATION"] +
			"/models/" + Environment["GOOGLE_AUTOML_MODEL_ID"] + ":predict",
			{
				method: "POST",
				headers: {
					"Authorization": "Bearer " + Environment['AUTH_BEARER'],
					"Content-Type": "application/json; charset=utf-8"
				},
				body: body
			}
		);

		let responseJson = await response.json();
		console.log('RESPONSE: ' + JSON.stringify(responseJson));
		console.log('RESPONSE: ' + JSON.stringify(responseJson.payload));
		console.log('RESPONSE: ' + JSON.stringify(responseJson.error));
	} catch (error) {
		console.log(error);
	}
};
