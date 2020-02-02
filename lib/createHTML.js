const generateHTML = (managerCard, engineerCard, internCard) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/ea0ff230eb.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Template Engine</title>
    
        <style>
    
            .card {
                min-width: 7rem;
            }
    
            @media screen and (min-width: 920px) {
                .card {
                    min-width: 18rem;
                }
            }
    
        </style>
    </head>
    <body>
    
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center mt-4">
                    ${managerCard}
                    ${engineerCard}
                    ${internCard}
                </div>
            </div>
        </div>
    
    </body>
    </html>`;
}

module.exports = generateHTML;