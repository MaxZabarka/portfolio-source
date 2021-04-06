import "./Flicker.scss";
// window.onload =  (event) => {
//     flicker()
// };
// async function flicker() {
// 	// for (const element of elementsToFlicker) {

//         console.log("asdasdasd");
//         console.log(element);
//         console.log("INIT!!!");
//         setInterval(async () => {

//             // element.classList.add("flicker-animation");
//             // console.log("A");
//             // setTimeout(() => console.log("B"),1000)
//             // console.log("B");
//             // element.classList.remove("flicker-animation");

//         },_random_int(500, 1000))

// 	// }
// }

// function flicker(element) {
// 		element.classList.add("flicker-animation");
// 		const delay = _random_int(2000, 10_000);
// 		console.log(delay);
// 		setTimeout(() => {
// 			element.classList.remove("flicker-animation");
// 			setTimeout(() => {
// 				flicker(element);
// 			}, delay);
// 		}, 1000);
// }
// window.onload = () => {
//     const B = document.querySelectorAll("img")[3];

//     flicker(B)
// };

// const element = document.querySelectorAll("img")[3];
export default function initFlicker () {
    const elementsToFlicker = document.querySelectorAll(".Letter, .name h1, .flicker");
    console.log(elementsToFlicker);
    for (const element of elementsToFlicker) {
        function flicker() {
            // console.log(element);
            setTimeout(() => {
                element.classList.add("flicker-animation")
                setTimeout(() => {
                    element.classList.remove("flicker-animation")
                    flicker();
                },1000)
            }, _random_int(10_000, 30_000));
        }
        setTimeout(flicker, _random_int(0, 10_000))
        // flicker();
    }
    
}


function _random_int(min, max) {
	return Math.floor(Math.random() * max) + min;
}
