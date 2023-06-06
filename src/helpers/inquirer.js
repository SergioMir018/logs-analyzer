const inquirer = require('inquirer');

require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. `
            }, 
            {
                value: '2',
                name: `${'2'.green}. `
            }, 
            {
                value: '0',
                name: `${'0'.green}. Exit\n`
            }
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();

    console.log('============================'.green);
    console.log(`${'|'.green}     Select an option     ${'|'.green}`);
    console.log('============================'.green);

    const {option} = await inquirer.prompt(menuOpts);

    return option
}

const pause = async(option) => {
    const question = [
        {
            type: 'input',
            name: 'ENTER',
            message: `Press ${'ENTER'.green} to continue`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pause
}