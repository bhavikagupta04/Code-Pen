document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const result = document.getElementById('result');

    function updateResult() {
        const htmlValue = htmlCode.value;
        const cssValue = cssCode.value;
        const jsValue = jsCode.value;

        const combinedCode = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 0; 
                        padding: 20px; 
                        background-color: white;
                    }
                    ${cssValue}
                </style>
            </head>
            <body>
                ${htmlValue}
                <script>
                    try {
                        ${jsValue}
                    } catch (error) {
                        console.error('Error in JavaScript:', error);
                        document.body.innerHTML += '<div style="color:red;">Error: ' + error.message + '</div>';
                    }
                <\/script>
            </body>
            </html>
        `;

        result.srcdoc = combinedCode;
    }

    htmlCode.addEventListener('input', updateResult);
    cssCode.addEventListener('input', updateResult);
    jsCode.addEventListener('input', updateResult);

    updateResult();
});
