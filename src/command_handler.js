'use strict';

const data_health = require('./data_health.json'),
    data_aktivitas = require('./data_aktivitas.json'),

    // ===========================================================

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

    // ===========================================================

    data_riwayat = require('./cluster_riwayat/data_riwayat.json'),
    data_riwayat_11_28 = require('./cluster_riwayat/catatan_harian/detail_11_28.json'),
    data_riwayat_11_29 = require('./cluster_riwayat/catatan_harian/detail_11_29.json'),
    data_riwayat_11_30 = require('./cluster_riwayat/catatan_harian/detail_11_30.json'),

    // ===========================================================
    data_penyakit = require('./data_penyakit.json'),
    data_thank = require('./data_thank.json'),

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
    'hai megumi!': data_hello,
    'kondisiku sekarang gimana ya?': data_kesehatan_bagus,
    'tampilin data kesehatanku dong': data_health,
    'minta rekomendasi aktivitas dong': data_aktivitas,
    'tampilkan rekomendasi aktivitas': data_aktivitas,

    // =============  Cluster make appointment  =======================

    'mau bikin appointment sama dokter nih': data_daftardok,
    'buat appointment': data_daftardok,

    'tampilkan dr. winnie fiona, sp.a': data_dokter_01,
    'tampilkan dr. jonathan pierro': data_dokter_02,

    'schedule dr. winnie fiona, sp.a': data_show_schedule,
    'schedule dr. jonathan pierro': data_show_schedule,

    'appointment 3 desember 2018 12:00': data_result_appointment,
    'appointment 3 desember 2018 15:00': data_request_reschedule,
    'reschedule ke jam 15:00 dong': data_request_reschedule,

    'reschedule 3 desember 2018 15:00': data_result_reschedule,
    'cek appointment': data_show_appointment,
    'tampilkan appointment': data_show_appointment,

    'cancel appointment': data_request_cancel,
    'cancel 3 desember 2018 15:00': data_result_cancel_appointment,

    // =============  Cluster riwayat  =======================
    'kebiasaan hidupku selama ini gimana ya, megumi?': data_riwayat,
    'tampilkan riwayat 28/11/2018': data_riwayat_11_28,
    'tampilkan riwayat 29/11/2018': data_riwayat_11_29,
    'tampilkan riwayat 30/11/2018': data_riwayat_11_30,

    // ================================================================
    'tampilkan gejala demam': data_penyakit,
    'makasih ya megumi :)': data_thank,
    'megumi, aku habis sakit nih': input_riwayat,
    'tambah riwayat penyakit': input_riwayat,
    'tampilin riwayat kesehatanku dong': data_daftarpenyakit,
    'tampilkan riwayat kesehatan': data_daftarpenyakit,
    'aku kemarin habis patah tulang lagi nih': input_riwayatdetil,
    'abis kecelakaan, nabrak mobil gitu, kena kepala': input_riwayatok
};

let handle_command = (input) => {
    return command_list[input.toLowerCase()];
};

module.exports = {
    handle_command: handle_command
};