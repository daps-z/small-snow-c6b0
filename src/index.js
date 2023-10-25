/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {

		let html_content = "";
		let html_style =
		  "body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";

		const userEmail = request.headers.get("Cf-Access-Authenticated-User-Email");
		const userCountry = request.headers.get("cf-ipcountry");
		//let countryLink = "<a href='https://tunnel.latzndapz/secure/'" + userCountry + "</a>";
		//document.getElementById("country").innerHTML = countryLink;

		const timeStamp = Date.now();

		html_content += "<p>" + userEmail + " authenticated at " + timeStamp +  " from country:" + "</p>";
		
 


		let html = `<!DOCTYPE html>
		<head>
		  <title> LatznDapz</title>
		  <style> ${html_style} </style>
		</head>
		<body>
		  <h1>Login Success!</h1>
		  <p>User Info:</p>
		  ${html_content}
		  <a href="/secure/${userCountry}">${userCountry}</a>
		</body>`;

		return new Response( html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},

		});
	},
};
