# Cash library : description of installation, usage... 
This cash library allows us to convert an amount of a certain currency in other currencies.

# firstly
We need to have a terminal and install node.js.

# Secondly
Install in the 'package.json' file all the libraries that we need by running the following commandes

    cd cash/
    install npm 

# Thirdly
Running the project

Start by running the following command (index.js file is the entry point of the cash library ).

    node ./bin/index.js
    
Run the following command to convert an amount of currency.

    node ./bin/index.js 30 eur

Run the following command to set some currencies to convert to.

    node index.js --save eur usd aud pln

Get the help by running the following command.

    node ./bin/index.js --help
