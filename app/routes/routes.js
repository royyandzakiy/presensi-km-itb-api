var ObjectID = require('mongodb').ObjectID;

var date, bidang, nomorSurat, perihal, pic, file;
// routes/salman_tracking
module.exports = function(app, db) {
  //CREATE temp
  app.post('/:collectionName', (req, res) => {
    var temp = req.body;
    db.collection(req.params.collectionName).insert(temp, function (err, result) {
      if (err) throw err;
      // console.log("res: " + JSON.stringify(result)); // debug
      res.json(result);
    });
  });

  //READ temp
  app.get('/:collectionName/all' , (req, res) => {
    db.collection(req.params.collectionName).find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.get('/:collectionName/total' , (req, res) => {
    db.collection(req.params.collectionName).find({}).toArray(function (err, result) {
      if (err) throw err;

      var list_jurusan = {
        "101": "Matematika (MA)",
        "102": "Fisika (FI)",
        "103": "Astronomi (AS)",
        "105": "Kimia (KI)",
        "112": "Rekayasa Hayati (RH)",
        "114": "Rekayasa Pertanian (RP)",
        "115": "Rekayasa Kehutanan (RK)",
        "104": "Mikrobiologi (MB)",
        "106": "Biologi (BI)",
        "107": "Sains dan Teknologi Farmasi (FA)",
        "116": "Farmasi Klinik dan Komunitas (FK)",
        "120": "Teknik Geologi (GL)",
        "128": "Meteorologi (ME)",
        "129": "Oseanografi (OS)",
        "151": "Teknik Geodesi & Geomatika (GD)",
        "121": "Teknik Pertambangan (TA)",
        "122": "Teknik Perminyakan (TM)",
        "123": "Teknik Geofisika (TG)",
        "125": "Teknik Metalurgi (MG)",
        "132": "Teknik Elektro (EL)",
        "135": "Teknik Informatika (IF)",
        "180": "Teknik Tenaga Listrik (EP)",
        "181": "Teknik Telekomunikasi (ET)",
        "150": "Teknik  Sipil (SI)",
        "153": "Teknik Lingkungan (TL)",
        "155": "Teknik Kelautan (KL)",
        "157": "Rekayasa Infrastruktur Lingkungan (IL)",
        "158": "Teknik dan Pengelolaan Sumberdaya Air (SA)",
        "130": "Teknik Kimia (TK)",
        "133": "Teknik Fisika (FT)",
        "134": "Teknik Industri (TI)",
        "144": "Manajemen Rekayasa Industri (MRI)",
        "170": "Seri Rupa (SR)",
        "172": "Kriya (KR)",
        "173": "Desain Interior (DI)",
        "174": "Desain Komunikasi Visual (DKV)",
        "175": "Desain Produk (DP)",
        "131": "Teknik Mesin (MS)",
        "136": "Aeronotika dan Astronotika (AE)",
        "137": "Teknik Material (MT)",
        "190": "Manajemen (MB)",
        "192": "Kewirausahaan (MK)",
        "152": "Arsitektur (AR)",
        "154": "Perencanaan Wilayah Kota (PL)",
      };

      var rekap_jurusan = [
        { "kode": "101", "himpunan": "-", "jurusan": "Matematika (MA)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "102", "himpunan": "-", "jurusan": "Fisika (FI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "103", "himpunan": "-", "jurusan": "Astronomi (AS)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "105", "himpunan": "-", "jurusan": "Kimia (KI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "112", "himpunan": "-", "jurusan": "Rekayasa Hayati (RH)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "114", "himpunan": "-", "jurusan": "Rekayasa Pertanian (RP)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "115", "himpunan": "-", "jurusan": "Rekayasa Kehutanan (RK)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "104", "himpunan": "-", "jurusan": "Mikrobiologi (MB)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "106", "himpunan": "-", "jurusan": "Biologi (BI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "107", "himpunan": "-", "jurusan": "Sains dan Teknologi Farmasi (FA)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "116", "himpunan": "-", "jurusan": "Farmasi Klinik dan Komunitas (FK)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "120", "himpunan": "-", "jurusan": "Teknik Geologi (GL)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "128", "himpunan": "-", "jurusan": "Meteorologi (ME)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "129", "himpunan": "-", "jurusan": "Oseanografi (OS)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "151", "himpunan": "-", "jurusan": "Teknik Geodesi & Geomatika (GD)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "121", "himpunan": "-", "jurusan": "Teknik Pertambangan (TA)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "122", "himpunan": "-", "jurusan": "Teknik Perminyakan (TM)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "123", "himpunan": "-", "jurusan": "Teknik Geofisika (TG)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "125", "himpunan": "-", "jurusan": "Teknik Metalurgi (MG)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "132", "himpunan": "-", "jurusan": "Teknik Elektro (EL)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "135", "himpunan": "-", "jurusan": "Teknik Informatika (IF)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "180", "himpunan": "-", "jurusan": "Teknik Tenaga Listrik (EP)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "181", "himpunan": "-", "jurusan": "Teknik Telekomunikasi (ET)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "150", "himpunan": "-", "jurusan": "Teknik  Sipil (SI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "153", "himpunan": "-", "jurusan": "Teknik Lingkungan (TL)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "155", "himpunan": "-", "jurusan": "Teknik Kelautan (KL)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "157", "himpunan": "-", "jurusan": "Rekayasa Infrastruktur Lingkungan (IL)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "158", "himpunan": "-", "jurusan": "Teknik dan Pengelolaan Sumberdaya Air (SA)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "130", "himpunan": "-", "jurusan": "Teknik Kimia (TK)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "133", "himpunan": "-", "jurusan": "Teknik Fisika (FT)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "134", "himpunan": "-", "jurusan": "Teknik Industri (TI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "144", "himpunan": "-", "jurusan": "Manajemen Rekayasa Industri (MRI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "170", "himpunan": "-", "jurusan": "Seri Rupa (SR)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "172", "himpunan": "-", "jurusan": "Kriya (KR)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "173", "himpunan": "-", "jurusan": "Desain Interior (DI)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "174", "himpunan": "-", "jurusan": "Desain Komunikasi Visual (DKV)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "175", "himpunan": "-", "jurusan": "Desain Produk (DP)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "131", "himpunan": "-", "jurusan": "Teknik Mesin (MS)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "136", "himpunan": "-", "jurusan": "Aeronotika dan Astronotika (AE)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "137", "himpunan": "-", "jurusan": "Teknik Material (MT)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "190", "himpunan": "-", "jurusan": "Manajemen (MB)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "192", "himpunan": "-", "jurusan": "Kewirausahaan (MK)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "152", "himpunan": "-", "jurusan": "Arsitektur (AR)", "checkin": 0, "checkout": 0, "total": 0 },
        { "kode": "154", "himpunan": "-", "jurusan": "Perencanaan Wilayah Kota (PL)", "checkin": 0, "checkout": 0, "total": 0 }
      ]

      var idxJurusan = 0;

      for (var i=0; i<result.length; i++) {
        result[i].kode = result[i].nim.substring(0,3);
        result[i].jurusan = list_jurusan[result[i].kode];
        result[i].himpunan = list_jurusan[result[i].kode];

        idxJurusan = rekap_jurusan.map(function (d) { return d["kode"]; }).indexOf(result[i].kode);
        
        if (result[i].waktu_pulang == '-')
          rekap_jurusan[idxJurusan].checkin++;
        else
          rekap_jurusan[idxJurusan].checkout++;
        rekap_jurusan[idxJurusan].total++;
      }

      res.json({"data": result, "rekap": rekap_jurusan});
      console.log("RESULT: " +JSON.stringify(result));
      // console.log("REKAP: " +JSON.stringify(rekap_jurusan));
    });
  });
  
  app.get('/is-checked-in/:nim' , (req, res) => {
    db.collection(req.params.collectionName).find({ nim: req.params.nim }).toArray(function (err, result) {
      if (err) throw err;
      var _data = {
        found: !(result.length == 0),
        data: {}
      }

      if (_data.found) _data.data = result[0];

      res.json(_data);
    });
  });
  
  app.get('/:collectionName/:id' , (req, res) => {
    const temp = { '_id': new ObjectID(req.params.id) };
    db.collection(req.params.collectionName).find(temp).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.put('/:collectionName/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const data = req.body
    db.collection(req.params.collectionName).update(
      details,
      data,
      (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  //DELETE temp
  app.delete('/:collectionName/all', (req, res) => {
    const note = db.collection(req.params.collectionName).remove({}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.delete('/:collectionName/:id', (req, res) => {
    const temp = { '_id': new ObjectID(req.params.id) };

    const note = db.collection(req.params.collectionName).remove(temp, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // TESTING
  app.get('/', (req, res) => {
    res.send("Hello, Presensi KM-ITB!");
  });

  // app.get('/:nama', (req, res) => {
  //   var nama = req.params.nama;

  //   res.send("Hello, " + nama + "!");
  // });
};
