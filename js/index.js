/*
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * Copyright (C) 2024 BlipSoft (@ilbpedro)
 * https://www.gnu.org/licenses/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */

// ############################################################################

const theme = document.getElementById('theme-select').value;

// ################################ SECTION 01 ################################
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("section1-header").addEventListener("click", function() {
		toggleSection('section1');
	});

	document.getElementById("section1-textspan").addEventListener("click", function() {
		copyToClipboard(this);
	});
});
// ################################ SECTION 02 ################################

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("section2-header").addEventListener("click", function() {
		toggleSection('section2');
	});

	document.getElementById("section2-textspan").addEventListener("click", function() {
		copyToClipboard(this);
	});
});
// ################################ SECTION 03 ################################
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("section3-header").addEventListener("click", function() {
		toggleSection('section3');
	});

	document.getElementById("section3-textspan").addEventListener("click", function() {
		copyToClipboard(this);
	});

	document.getElementById("section3-label2").value = -2.0; // default value (js)
});
// ################################ SECTION 04 ################################
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("section4-header").addEventListener("click", function() {
		toggleSection('section4');
	});

	document.getElementById("section1-textspan").addEventListener("click", function() {
		copyToClipboard(this);
	});
});
// ########################### PREFERENCES EVENTS #############################
document.addEventListener('DOMContentLoaded', function () {
	const themeSelect = document.getElementById('theme-select');

	const closeModalButton = document.getElementById('closeModal');
	const savePreferencesButton = document.getElementById('savePreferences');

	savePreferencesButton.addEventListener('click', function () {
		savePreferences();
	});

	themeSelect.addEventListener('change', function () {
	const selectedTheme = themeSelect.value;
		applyTheme(selectedTheme);
	});

	closeModalButton.addEventListener('click', function () {
		document.getElementById("preferencesModal").style.display = "none";
	});
});
// ############################ HELP/ABOUT EVENTS #############################
document.addEventListener('DOMContentLoaded', function () {
	const closeHelpModalButton = document.getElementById('closeHelpModal');
	const closeDonationModalButton = document.getElementById('closeDonationModal');
	const closePrivacyModalButton = document.getElementById('closePrivacyModal');
	const closeTosModalButton = document.getElementById('closeTosModal');

	const openPrivacyModalButton = document.getElementById('openPrivacyModal');
	const openTosModalButton = document.getElementById('openTosModal');

	const donationModal = document.getElementById('donationModal');
	const privacyModal = document.getElementById('privacyModal');
	const tosModal = document.getElementById('tosModal');
	const helpModal = document.getElementById('helpModal');

	closeHelpModalButton.addEventListener('click', function () {
		helpModal.style.display = 'none';
	});

	closeDonationModalButton.addEventListener('click', function () {
		donationModal.style.display = 'none';
	});

	closePrivacyModalButton.addEventListener('click', function () {
		privacyModal.style.display = 'none';
	});

	closeTosModalButton.addEventListener('click', function () {
		tosModal.style.display = 'none';
	});

	donatePixButton.addEventListener('click', function () {
		donationModal.style.display = 'block';
	});

	openPrivacyModalButton.addEventListener('click', function () {
		privacyModal.style.display = 'block';
	});

	openTosModalButton.addEventListener('click', function () {
		tosModal.style.display = 'block';
	});
});

// ############################################################################

function toggleSection(sectionId) {
	const section = document.getElementById(sectionId);
	section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

document.querySelectorAll('.section-content').forEach(section => {
	section.style.display = 'none';
});
// ----------------------------------------------------------------------------
function savePreferences() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;

    localStorage.setItem('theme', selectedTheme);
    
    applyTheme(selectedTheme);

    document.getElementById("preferencesModal").style.display = "none";
}
// ----------------------------------------------------------------------------
function applyTheme(theme) {
	document.body.className = '';
	document.body.classList.add(theme);

	const themes = {
		light: {
			bg: '#ffffff', text: '#353535', border: '#888888', button: '#004bbb', buttonText: '#ffffff', buttonHover: '#1866ba',
			helpButtonTextContent: '?', helpButtonTextColor: '#eeeeee',
			modalBg: 'rgba(0, 0, 0, 0.5)', modalContentBg: '#fefefe', modalText: '#000000', link: '#008cff', linkHover: '#0067b3',
			sectionBg: '#eeeeee', sectionBorder: '#5f5f5f', closeBtn: '#212121', closeBtnHover: '#424242', sectionHover: '#cccccc',
			textColorControls: '#1866ba', pSpan: '#0059cc'
		},
		dark: {
			bg: '#333333', text: '#40bfbf', border: '#8f7797', button: '#3292a3', buttonText: '#2a2d40', buttonHover: '#3cafc4',
			helpButtonTextContent: '?', helpButtonTextColor: '#ccefff',
			modalBg: 'rgba(0, 0, 0, 0.8)', modalContentBg: '#333333', modalText: '#3ba2b5', link: '#bbdfff', linkHover: '#77aaff',
			sectionBg: '#444444', sectionBorder: '#7e6f35', closeBtn: '#797979', closeBtnHover: '#aaaaaa', sectionHover: '#3c4b4f',
			textColorControls: '#0d95b7', pSpan: '#40bfbf'
		},
			cblind0: {
			bg: '#ffffff', text: '#000000', border: '#000000', button: '#000000', buttonText: '#ffffff', buttonHover: '#333333',
			helpButtonTextContent: '?', helpButtonTextColor: '#ffffff',
			modalBg: 'rgba(255, 255, 255, 0.9)', modalContentBg: '#ffffff', modalText: '#000000', link: '#000000', linkHover: '#666666',
			sectionBg: '#f0f0f0', sectionBorder: '#000000', closeBtn: '#000000', closeBtnHover: '#aaaaaa', sectionHover: '#dedede',
			textColorControls: '#000000', pSpan: '#505050'
		},
		cblind1: { // Protan - avoids red
			bg: '#f7e0d0', text: '#4d3a3a', border: '#704040', button: '#704040', buttonText: '#f7e0d0', buttonHover: '#4d3a3a',
			helpButtonTextContent: '?', helpButtonTextColor: '#f7e0d0',
			modalBg: 'rgba(255, 240, 230, 0.9)', modalContentBg: '#f7e0d0', modalText: '#4d3a3a', link: '#735c5c', linkHover: '#563838',
			sectionBg: '#f2d7c7', sectionBorder: '#704040', closeBtn: '#704040', closeBtnHover: '#4d3a3a', sectionHover: '#d0b5a5',
			textColorControls: '#5d4a48', pSpan: '#804040'
		},
		cblind2: { // Deuteran - avoids green
			bg: '#f5e6ff', text: '#5a3a78', border: '#4d3066', button: '#5a3a78', buttonText: '#f5e6ff', buttonHover: '#4d3066',
			helpButtonTextContent: '?', helpButtonTextColor: '#f5e6ff',
			modalBg: 'rgba(245, 230, 255, 0.9)', modalContentBg: '#f5e6ff', modalText: '#5a3a78', link: '#856a94', linkHover: '#644f73',
			sectionBg: '#e8d8f8', sectionBorder: '#4d3066', closeBtn: '#4d3066', closeBtnHover: '#c474a0', sectionHover: '#c6b8d6',
			textColorControls: '#4d3066', pSpan: '#8040bf'

		},
		cblind3: { // Tritan - avoids blue
			bg: '#e7f2f0', text: '#4a5854', border: '#2e4c46', button: '#4a5854', buttonText: '#e7f2f0', buttonHover: '#2e4c46',
			helpButtonTextContent: '?', helpButtonTextColor: '#e7f2f0',
			modalBg: 'rgba(231, 242, 240, 0.9)', modalContentBg: '#e7f2f0', modalText: '#4a5854', link: '#57756e', linkHover: '#3a4b46',
			sectionBg: '#d9ebe7', sectionBorder: '#2e4c46', closeBtn: '#4a5854', closeBtnHover: '#212223', sectionHover: '#b7c9c5',
			textColorControls: '#2e4c46', pSpan: '#108b70'
		}
	};

	const selectedTheme = themes[theme] || themes.light;

	document.body.style.backgroundColor = selectedTheme.bg;
	document.body.style.color = selectedTheme.text;

	const header = document.querySelector('.header');
	header.style.backgroundColor = selectedTheme.bg;
	header.style.color = selectedTheme.text;
	//header.style.borderBottom = 1px solid ${selectedTheme.border}; // line below <h1>

	document.querySelectorAll('button').forEach(btn => {
		btn.style.backgroundColor = selectedTheme.button;
		btn.style.color = selectedTheme.buttonText;
		/*button.style.border = 1px solid ${selectedTheme.border};*/
		btn.addEventListener('mouseenter', () => btn.style.backgroundColor = selectedTheme.buttonHover);
		btn.addEventListener('mouseleave', () => btn.style.backgroundColor = selectedTheme.button);
	});
	document.querySelectorAll('.close').forEach(closeButton => {
		closeButton.style.backgroundColor = selectedTheme.closeButton;
		closeButton.style.color = selectedTheme.closeBtn; // close button is a character (times)
		/*closeButton.style.border = 1px solid ${selectedTheme.border};*/
		closeButton.addEventListener('mouseenter', () => closeButton.style.color = selectedTheme.closeBtnHover);
		closeButton.addEventListener('mouseleave', () => closeButton.style.color = selectedTheme.closeBtn);
	});

	document.querySelectorAll('section, .result').forEach(section => {
		section.style.backgroundColor = selectedTheme.sectionBg;
		/*section.style.border = 3px solid ${selectedTheme.sectionBorder};*/
		section.style.borderRadius = '10px';
		section.addEventListener('mouseenter', () => section.style.backgroundColor = selectedTheme.sectionHover);
		section.addEventListener('mouseleave', () => section.style.backgroundColor = selectedTheme.sectionBg);
	});
	document.querySelectorAll('h2').forEach(h2 => {
		h2.style.color = selectedTheme.text;
	});

	document.querySelectorAll('span').forEach(pspan => {
		pspan.style.color = selectedTheme.pSpan;
	});

	document.querySelectorAll('input, select').forEach(el => {
		el.style.color = selectedTheme.textColorControls;
		el.style.backgroundColor = selectedTheme.bg;
		//el.style.border = selectedTheme.border;
	});

	document.querySelectorAll('a').forEach(link => {
		link.style.color = selectedTheme.link;
		link.addEventListener('mouseenter', () => link.style.color = selectedTheme.linkHover);
		link.addEventListener('mouseleave', () => link.style.color = selectedTheme.link);
	});


		document.querySelectorAll('.result, label').forEach(resLabel => {
		resLabel.style.color = selectedTheme.text;
	});

	const modals = document.querySelectorAll('.modal');
	modals.forEach(modal => {
		modal.style.backgroundColor = selectedTheme.modalBg;
		/*modal.style.border = 1px solid ${selectedTheme.border};*/

		const modalContent = modal.querySelector('.modal-content');
		modalContent.style.backgroundColor = selectedTheme.modalContentBg;
		modalContent.style.color = selectedTheme.modalText;

		modalContent.querySelectorAll('a').forEach(link => {
			link.style.color = selectedTheme.link;
			link.addEventListener('mouseenter', () => link.style.color = selectedTheme.linkHover);
			link.addEventListener('mouseleave', () => link.style.color = selectedTheme.link);
		});
	});

	const modalsHelp = document.querySelectorAll('.modal-help');
	modalsHelp.forEach(modalH => {
		modalH.style.backgroundColor = selectedTheme.modalBg;
		const modalContentH = modalH.querySelector('.modal-content');

		if (modalContentH) {
			modalContentH.style.backgroundColor = selectedTheme.modalContentBg;
			modalContentH.style.color = selectedTheme.modalText;

			modalContentH.querySelectorAll('a').forEach(link => {
				link.style.color = selectedTheme.link;
				link.onmouseenter = () => link.style.color = selectedTheme.linkHover;
				link.onmouseleave = () => link.style.color = selectedTheme.link;
			});
		}
	});

	const helpButton = document.getElementById('helpButton');
	const helpButtonSpan = helpButton.querySelector('span');

	if (helpButton) {
		helpButtonSpan.textContent = selectedTheme.helpButtonTextContent;
		helpButtonSpan.style.color = selectedTheme.helpButtonTextColor;
	}

	const helpBtn = document.getElementById('help-btn');
	const prefButton = document.getElementById('prefbutton');
	if (helpBtn) helpBtn.style.color = selectedTheme.link;
	if (prefButton) prefButton.style.color = selectedTheme.text;

	document.querySelectorAll('p').forEach(p => {
		p.style.color = selectedTheme.linkHover;
	});
}
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('preferencesModal');
	const btn = document.getElementById('preferencesButton');
	const span = document.getElementsByClassName('close')[0];

	btn.onclick = function() {
		modal.style.display = 'block';
	}

	span.onclick = function () {
		modal.style.display = 'none';
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	}

	window.onclick = function(event) {
		if (event.target == modal && !modalContent.contains(event.target)) {
			modal.style.display = 'none';
		}
	};
});
// ----------------------------------------------------------------------------
function openHelpModal() {
	document.getElementById('helpModal').style.display = 'block';   
}

document.addEventListener('DOMContentLoaded', () => {
	const helpModal = document.getElementById('helpModal');
	const helpButton = document.getElementById('helpButton');
	const closeHelpModal = document.getElementById('closeHelpModal');

	helpButton.onclick = function() {
		helpModal.style.display = 'block';
	}

	closeHelpModal.onclick = function() {
		helpModal.style.display = 'none';
	}

	window.onclick = function(event) {
		if (event.target == helpModal) {
			helpModal.style.display = 'none';
		}
	}
});
// ----------------------------------------------------------------------------
function openModalPix() {
	document.getElementById("donationModal").style.display = "flex";
}

function closeModalPix() {
	document.getElementById("donationModal").style.display = "none";
}

window.onclick = function(event) {
	const modal = document.getElementById("donationModal");
	if (event.target === modal) {
		closeModalPix();
	}
};
// ----------------------------------------------------------------------------
function openModalTosPriv(modalId) {
	document.getElementById(modalId).style.display = "flex"; // Exibe o modal

	if (modalId === "privacyModal") {
		const encodedText = document.getElementById("privacyText").textContent.trim();
		const decodedText = atob(encodedText);
		document.getElementById("privacyText").textContent = decodedText;

	} else if (modalId === "tosModal") {
		const encodedText = document.getElementById("tosText").textContent.trim();
		const decodedText = atob(encodedText);
		document.getElementById("tosText").textContent = decodedText;
	}
}

function closeModalTosPriv(modalId) {
	document.getElementById(modalId).style.display = "none";
}

document.getElementById("openPrivacyModal").onclick = () => openModalTosPriv("privacyModal");
document.getElementById("openTosModal").onclick = () => openModalTosPriv("tosModal");
document.getElementById("closePrivacyModal").onclick = () => closeModalTosPriv("privacyModal");
document.getElementById("closeTosModal").onclick = () => closeModalTosPriv("tosModal");

window.onclick = function(event) {
	if (event.target === document.getElementById("privacyModal")) {
		closeModalTosPriv("privacyModal");
	} else if (event.target === document.getElementById("tosModal")) {
		closeModalTosPriv("tosModal");
	}
};
// ----------------------------------------------------------------------------
function copyToClipboard(element) {
	const text = element.textContent;

	const tempInput = document.createElement("input");
	document.body.appendChild(tempInput);
	tempInput.value = text;

	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // for mobile devices
	document.execCommand("copy");

	document.body.removeChild(tempInput);

	alert("Copied to clipboard!"); // comment this line to disable notification
}

// alternative js way to copy to clipboard.
// HTML link example: <a href="#" onclick="copyToClipboard('email@email.net'); return false;">email@email.net</a>
/* async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		alert("Email copied to clipboard!");
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
} */
// ----------------------------------------------------------------------------
window.onload = function() {
	const savedTheme = localStorage.getItem('theme');

	if (savedTheme) {
		document.getElementById('theme-select').value = savedTheme;
		applyTheme(savedTheme);
	}

	document.getElementById('savePreferences').onclick = savePreferences;
};
// ----------------------------------------------------------------------------
