
let resultWindow = null;

function displayResult() {
    const name = document.getElementById('winnerName').value || "";
    const timestamp = document.getElementById('timestamp').value || "";

    // Check if inputs are filled
    // if (!name || !timestamp) {
    //     alert("Please fill in all fields.");
    //     return;
    // }

    // Format the HTML content for the pop-up window with the uploaded image as background
    const resultContent = `
        <html>
        <head>
            <title>Winner Announcement</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    height: 100vh;
                    margin: 0;
                    padding-bottom: 6.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-image: url('./assets/Drawing Winner Graphic (1).png');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    text-align: center;
                }
                p{
                    margin: 10px;
                    padding-bottom: 2rem;
                }
                .winner-details-name{
                    font-size: 8rem;
                }
                .winner-details-timestamp{
                    font-size: 6.5rem;
                }
            </style>
        </head>
        <body>
            <div class="winner-details">
                <p class="winner-details-name">${name}</p>
                <p class="winner-details-timestamp">${timestamp}</p>
            </div>
        </body>
        </html>
    `;

    // Open a new window and write the result content
    if (!resultWindow || resultWindow.closed) {
        // Open a new window if it's not already open or if it was closed
        resultWindow = window.open('', '', 'width=1920,height=1080');
    }

    // Write or update the content of the pop-up window
    resultWindow.document.open();
    resultWindow.document.write(resultContent);
    resultWindow.document.close();
}