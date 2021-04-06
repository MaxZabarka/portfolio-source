export default function promiseTimeout(time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(time);
		}, time);
	});
}