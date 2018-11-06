'use strict';

const data_health = require('./data_health.json');

const command_list = {
    'Tampilin data kesehatanku dong': data_health
}

let handle_command = (input) => {
    return command_list[input];
}

module.exports = {
    handle_command: handle_command
}