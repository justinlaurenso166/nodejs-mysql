const db = require('../database/db.js')
const helper = require("../helper")
const config = require("../database/config")

const getAllMahasiswa = async() => {
    const rows = await db.query("SELECT * FROM mahasiswas")
    const check = helper.emptyOrRows(rows)

    return check;
}

const addMahasiswa = async(Nama, Age) => {
    const rows = await db.query(`INSERT INTO mahasiswas (Nama,Age) VALUES ('${Nama}','${Age}')`)
    const check = helper.emptyOrRows(rows)

    return check
}

const updateMahasiswa = async(data) => {
    const rows = await db.query(`UPDATE mahasiswas SET Nama='${data.Nama}',Age='${data.Age}' WHERE id=${data.Id}`)
    const check = helper.emptyOrRows(rows)

    return check
}

const deleteMahasiswa = async(id) => {
    const rows = await db.query(`DELETE FROM mahasiswas where id=${id}`)
    const check = helper.emptyOrRows(rows)

    return check;
}

const getMahasiswa = async(id) => {
    const rows = await db.query(`SELECT * FROM mahasiswas WHERE Id=${id}`)
    const check = helper.emptyOrRows(rows)

    return check
}

module.exports = {
    getAllMahasiswa,
    deleteMahasiswa,
    addMahasiswa,
    updateMahasiswa,
    getMahasiswa,
}