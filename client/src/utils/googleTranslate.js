// export function loadGoogleTranslateScript(callback) {
//   if (document.getElementById('google-translate-script')) {
//     callback();
//     return;
//   }

//   const script = document.createElement('script');
//   script.id = 'google-translate-script';
//   script.type = 'text/javascript';
//   script.src =
//     '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//   script.async = true;
//   script.defer = true;
//   script.onload = callback;
//   document.body.appendChild(script);
// }

// export function initializeGoogleTranslate() {
//   if (
//     window.google &&
//     window.google.translate &&
//     window.google.translate.TranslateElement
//   ) {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: 'en',
//         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//       },
//       'google_translate_element'
//     );
//   }
// }
