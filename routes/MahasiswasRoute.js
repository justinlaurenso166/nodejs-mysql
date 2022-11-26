const express = require("express")
const router = express.Router()
const Mahasiswa = require("../services/Mahasiswa")

router.get('/GetMahasiswas', async(req, res) => {
    try {
        let data = await Mahasiswa.getAllMahasiswa()
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).send("No Data Found")
        }
    } catch (error) {
        res.status(500).send(error.message || "Error Occured")
    }
})

router.delete('/DeleteStudent', async(req, res) => {
    try {
        let delete_mahasiswa = await Mahasiswa.deleteMahasiswa(req.body.Id)
            // console.log(req.params.id)
        if (delete_mahasiswa) {
            console.log("berhasil hapus")
            res.status(200).send("Mahasiswa berhasil dihapus")
        } else {
            res.status(404).send(`Mahasiswa dengan id ${req.body.Id} tidak berhasil dihapus`)
        }
    } catch (error) {
        res.status(500).send(error.message || "Error Occured")
    }
})

router.post('/AddStudent', async(req, res) => {
    try {
        const Name = req.body.Nama
        const Age = req.body.Age
        let add_mahasiswa = Mahasiswa.addMahasiswa(Name, Age)

        if (add_mahasiswa) {
            res.status(200).send("Tambah mahasiswa berhasil")
        } else {
            res.status(404).send("Tambah mahasiswa tidak berhasil")
        }
    } catch (error) {
        res.status(500).send(error.message || "Error Occured")
    }
})

router.put('/UpdateStudent', async(req, res) => {
    try {
        let update_mahasiswa = Mahasiswa.updateMahasiswa(req.body)

        if (update_mahasiswa) {
            res.status(200).send("Update mahasiswa berhasil")
        } else {
            res.status(404).send(`Mahasiswa dengan id ${req.body.Id} tidak berhasil diupdate`)
        }

    } catch (error) {
        res.status(500).send(error.message || "Error Occured")
    }
})

router.post('/GetMahasiswa', async(req, res) => {
    try {
        let data = await Mahasiswa.getMahasiswa(req.body.Id)
        if (data) {
            res.status(200).send(data[0])
        } else {
            res.status(404).send(`Mahasiswa dengan Id ${req.body.Id} tidak ditemukan`)
        }
    } catch (error) {
        res.status(500).send(error.message || "Error Occured")
    }
})

module.exports = router