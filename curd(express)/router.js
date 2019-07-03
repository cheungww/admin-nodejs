let fs = require('fs');
let express = require('express');
let router = express.Router();

let Student = require('./student');

router.get('/students', function (req, res) {
  Student.getList(function (err, students) {
    if (err) {
      return res.status(500).send('Server Error');
    }
    res.render('index.html', {
      labels: ['ONE', 'TEO', 'THREE', 'FOUR'],
      students: students,
    })
  })
})

router.get('/students/new', function (req, res) {
  res.render('new.html');
})

router.post('/students/new', function (req, res) {
  Student.add(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server Error');
    }
    res.redirect('/students');
  })
})

router.get('/students/edit', function (req, res) {
  Student.search(parseInt(req.query.id), function (err, stu) {
    if (err) {
      return res.status(500).send('Server Error');
    }
    res.render('edit.html', {
      student: stu,
    });
  })
})

router.post('/students/edit', function (req, res) {
  Student.update(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server Error');
    }
    res.redirect('/students');
  })
})

router.get('/students/delete', function (req, res) {
  Student.delete(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server Error');
    }
    res.redirect('/students');
  })
})
module.exports = router;
