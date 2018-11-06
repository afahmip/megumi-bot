'use strict';

const data_health = require('./data_health.json'),
      data_aktivitas = require('./data_aktivitas.json');

const command_list = {
    'Tampilin data kesehatanku dong': data_health,
    'Minta rekomendasi aktivitas dong': data_aktivitas
}

let handle_command = (input) => {
    return command_list[input];
}

module.exports = {
    handle_command: handle_command
}