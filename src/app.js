const {inquirerMenu, pause} = require('./helpers/inquirer');

console.clear();

const main = async() => {
    let opt = '';

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                break;  
            case '2':
                break;
            case '3':
                break;
            case '4': 
                break;
        }

        if (opt !== '0') await pause(opt);

    } while (opt !== '0');
}

main();