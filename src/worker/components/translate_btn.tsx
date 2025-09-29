import React, { useState, useEffect, useRef } from 'react';

const TranslateButton = ({ setShowLanguageModal, parentClass, className, textClassName }: any) => {
	const [isSpanish, setIsSpanish] = useState(false);
	const [scriptAdded, setScriptAdded] = useState(false);
	const [count, setCount] = useState(0);
	let [changed, setChanged] = useState("en");

	const googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement(
			{
				pageLanguage: "en",
				includedLanguages: 'es,en',
				layout: window.google.translate.TranslateElement.InlineLayout.TEXT,
				autoDisplay: false
			},
			"google_translate_element"
		);
	};


	useEffect(() => {
		if (!scriptAdded) {
			const myTranslateScript = document.querySelectorAll(
				'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
			);

			if (myTranslateScript.length < 1) {
				const addScript = document.createElement("script");
				addScript.setAttribute(
					"src",
					"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
				);

				document.body.appendChild(addScript);
				window.googleTranslateElementInit = googleTranslateElementInit;
			}
		}
	}, [scriptAdded]);


	useEffect(() => {
		if (count % 2 == 0 && count !== 0) {
			location.reload()
		}
	}, [count])

	// useEffect(() => {
	//     // update the location link
	//     let url = new URL(window.location.href);
	//     console.log("changed", changed);
	//     if (changed !== "") {
	//         url.searchParams.set("lg", changed);
	//         if (setQueryLg !== undefined) {
	//             `${setQueryLg(`${changed}`)}`;
	//         }
	//     }
	//     window.history.replaceState({}, "", url);

	// }, [changed])

	// console.log(count);

	const toggleTranslation = () => {
		setIsSpanish(!isSpanish);
		// const newLang = isSpanish ? 'en' : 'es';
		// setChanged(newLang);
		// translatePage(newLang);
		// triggerHtmlEvent(document.querySelector('.goog-te-combo'), 'change');
		// setCount(prev => prev + 1);
		setShowLanguageModal(true);
	};

	const triggerHtmlEvent = (element: any, eventName: any) => {
		let event;
		if (document.createEvent) {
			event = document.createEvent('HTMLEvents');
			event.initEvent(eventName, true, true);
			element.dispatchEvent(event);
		} else {
			
		}
	};

	const translatePage = (newLang: any) => {
		if (document.querySelector('.goog-te-combo') == undefined) {
			if (window.location.pathname == "/") {
				window.location.reload()
			}
		} else {
			document.querySelector('.goog-te-combo')?.setAttribute('value', newLang);
		}
	};


	return (
		<div className={`cursor-pointer ${parentClass}`} onClick={toggleTranslation}>
			<div id="google_translate_element" className="hidden"></div>
			<button
				className={`${className}`}
			// disabled={!scriptAdded}
			>
				<img
					src={
						isSpanish
							? 'https://res.cloudinary.com/drlcisipo/image/upload/v1714663084/English_1_z3fa77.png'
							: 'https://res.cloudinary.com/drlcisipo/image/upload/v1713288601/Website%20images/Spanish_2_oaawih.svg'
					}
					alt="Spanish Flag"
					className="w-7 h-7"
				/>
				<span className={`${textClassName} lg:inline hidden notranslate`}>
					{isSpanish ? 'ENG' : 'ESP'}
				</span>

				<span className={`${textClassName} inline lg:hidden notranslate`}>
					{isSpanish ? 'Translate to English' : 'Traducir al Español'}
				</span>
			</button>
		</div>
	);
};

export default TranslateButton;