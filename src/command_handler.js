'use strict';

const data_health = require('./data_health.json'),
    data_aktivitas = require('./data_aktivitas.json'),


    data_daftardok = require('./cluster_appointment/data_daftardok.json'),
    data_dokter_01 = require('./cluster_appointment/data_dokter_01.json'),
    data_dokter_02 = require('./cluster_appointment/data_dokter_02.json'),
    data_show_schedule = require('./cluster_appointment/data_show_schedule.json'),
    data_result_appointment = require('./cluster_appointment/data_result_appointment.json'),
    data_request_reschedule = require('./cluster_appointment/data_reschedule.json'),
    data_result_reschedule = require('./cluster_appointment/data_result_reschedule.json'),
    data_show_appointment = require('./cluster_appointment/data_show_appointment.json'),
    data_request_cancel = require('./cluster_appointment/data_request_cancel.json'),
    data_result_cancel_appointment = require('./cluster_appointment/data_result_cancel_appointment.json'),

    data_penyakit = require('./data_penyakit.json'),
    data_thank = require('./data_thank.json'),
    data_riwayat = require('./data_riwayat.json'),
    data_daftarpenyakit = require('./data_daftarpenyakit.json'),
    data_kesehatan_bagus = require('./data_kesehatan_bagus.json'),
    data_hello = require('./data_hello.json');

const input_riwayat = {
    type: 'text',
    text: 'Ehhh kamu habis sakit? .__. Sakit apa...'
};

const input_riwayatdetil = {
    type: 'text',
    text: 'Detailnya gimana tuh...kok bisa sih :('
};

const input_riwayatok = {
    type: 'text',
    text: 'Oke udah kesimpen ya...semoga kamu tetep sehat terus ke depannya :('
};

const command_list = {
    'Hai Megumi!': data_hello,
    'Kondisiku sekarang gimana ya?': data_kesehatan_bagus,
    'Tampilin data kesehatanku dong': data_health,
    'Minta rekomendasi aktivitas dong': data_aktivitas,
    'Tampilkan rekomendasi aktivitas': data_aktivitas,

    // =============  Cluster make appointment  =======================

    'Mau bikin appointment sama dokter nih': data_daftardok,
    'Buat appointment': data_daftardok,

    'Tampilkan dr. Winnie Fiona, Sp.A': data_dokter_01,
    'Tampilkan dr. Jonathan Pierro': data_dokter_02,

    'Schedule dr. Winnie Fiona, Sp.A': data_show_schedule,
    'Schedule dr. Jonathan Pierro': data_show_schedule,

    'Appointment 3 December 2018 12:00': data_result_appointment,
    'Appointment 3 December 2018 15:00': data_request_reschedule,
    'Reschedule ke jam 15:00 dong': data_request_reschedule,

    'Reschedule 3 December 2018 15:00': data_result_reschedule,
    'Cek appointment': data_show_appointment,
    'Tampilkan appointment': data_show_appointment,

    'Cancel appointment': data_request_cancel,
    'Cancel 3 December 2018 15:00': data_result_cancel_appointment,

    // ================================================================
    'Tampilkan gejala demam': data_penyakit,
    'Kebiasaan hidupku selama ini gimana ya, megumi?': data_riwayat,
    'Makasih ya megumi :)': data_thank,
    'Megumi, aku habis sakit nih': input_riwayat,
    'Tambah riwayat penyakit': input_riwayat,
    'Tampilin riwayat kesehatanku dong': data_daftarpenyakit,
    'Tampilkan riwayat kesehatan': data_daftarpenyakit,
    'Aku kemarin habis patah tulang lagi nih': input_riwayatdetil,
    'Abis kecelakaan, nabrak mobil gitu, kena kepala': input_riwayatok
};

let handle_command = (input) => {
    return command_list[input];
};

module.exports = {
    handle_command: handle_command
};