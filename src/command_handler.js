'use strict';

const data_health = require('./data_health.json'),
      data_aktivitas = require('./data_aktivitas.json'),
      data_daftardok = require('./data_daftardok.json'),
      data_dokter = require('./data_dokter.json'),
      data_appoint = require('./data_appoint.json'),
      data_penyakit = require('./data_penyakit.json'),
      data_thank = require('./data_thank.json'),
      data_riwayat = require('./data_riwayat.json'),
      data_daftarpenyakit = require('./data_daftarpenyakit.json');

const input_riwayat = {
    type: 'text',
    text: 'Ehhh kamu habis sakit? .__. Sakit apa...'
}

const input_riwayatdetil = {
    type: 'text',
    text: 'Detailnya gimana tuh...kok bisa sih :('
}

const input_riwayatok = {
    type: 'text',
    text: 'Oke udah kesimpen ya...semoga kamu tetep sehat terus ke depannya :('
}

const command_list = {
    'Tampilin data kesehatanku dong': data_health,
    'Minta rekomendasi aktivitas dong': data_aktivitas,
    'Tampilkan rekomendasi aktivitas': data_aktivitas,
    'Mau bikin appointment sama dokter nih': data_daftardok,
    'Buat appointment': data_daftardok,
    'Tampilkan dr. Winnie Fiona, Sp.A': data_dokter,
    'Pilih dr. Winnie Fiona, Sp.A': data_appoint,
    'Tampilkan gejala demam': data_penyakit,
    'Kebiasaan hidupku selama ini gimana ya, megumi?': data_riwayat,
    'Makasih ya megumi :)': data_thank,
    'Megumi, aku habis sakit nih': input_riwayat,
    'Tambah riwayat penyakit': input_riwayat,
    'Tampilin riwayat kesehatanku dong': data_daftarpenyakit,
    'Tampilkan riwayat kesehatan': data_daftarpenyakit,
    'Aku kemarin habis patah tulang lagi nih': input_riwayatdetil,
    'Abis kecelakaan, nabrak mobil gitu, kena kepala': input_riwayatok
}

let handle_command = (input) => {
    return command_list[input];
}

module.exports = {
    handle_command: handle_command
}