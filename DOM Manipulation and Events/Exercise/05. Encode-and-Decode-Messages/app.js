function encodeAndDecodeMessages() {

    const textareas = Array.from(document.querySelectorAll('textarea'));
    const btns = Array.from(document.querySelectorAll('button'));

    let sendText = textareas[0];
    let sendBtn = btns[0];
    sendBtn.addEventListener('click', encode);

    let receivedText = textareas[1];
    let receiveBtn = btns[1];
    receiveBtn.addEventListener('click', decode);

    function encode(e) {
        let newText = '';
        for (let i = 0; i < sendText.value.length; i++) {
            let chr = sendText.value.charCodeAt(i) + 1;
            newText += String.fromCharCode(chr);
        }

        sendText.value = '';
        receivedText.value = newText;
    }

    function decode(e) {
        let newText = '';
        for (let i = 0; i < receivedText.value.length; i++) {
            let chr = receivedText.value.charCodeAt(i) - 1;
            newText += String.fromCharCode(chr);
        }

        receivedText.value = newText;
    }
}