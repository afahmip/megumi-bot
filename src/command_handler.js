'use strict';

const data_health = require('./data_health.json'),
      data_aktivitas = require('./data_aktivitas.json'),
      data_daftardok = require('./data_daftardok.json'),
      data_dokter = require('./data_dokter.json');

const command_list = {
    'Tampilin data kesehatanku dong': data_health,
    'Minta rekomendasi aktivitas dong': data_aktivitas,
    'Mau bikin appointment sama dokter nih': data_daftardok,
    'Pilih dr. Winnie Fiona, Sp.A': data_dokter
}

let handle_command = (input) => {
    return command_list[input];
}

module.exports = {
    handle_command: handle_command
}