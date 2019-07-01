let fs = require('fs');
let dbPath = './db.json';

/**
 *
 *
 * @param {*} callback
 */
exports.getList = function (callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  })
}

/**
 *
 *
 * @param {*} id
 * @param {*} callback
 */
exports.search = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    let students = JSON.parse(data).students;
    let stu = students.find(function (item) {
      return item.id === parseInt(id);
    })
    callback(null, stu);
  })
}

/**
 * @description 添加学生
 * @param {*} stu
 * @param {*} callback
 */
exports.add = function (stu, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }

    let students = JSON.parse(data).students;
    stu.id = students[students.length - 1].id + 1;
    students.push(stu);

    let fileData = JSON.stringify({
      students,
    })

    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  })
}

exports.update = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }

    let students = JSON.parse(data).students;
    student.id = parseInt(student.id);

    let stu = students.find(function (item) {
      return item.id === student.id;
    })
    
    for (let key in student) {
      stu[key] = student[key];
    }
    
    let fileData = JSON.stringify({ students });

    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  })
}

exports.delete = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }

    let students = JSON.parse(data).students;

    let deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id);
    })
    
    students.splice(deleteId, 1);

    let fileData = JSON.stringify({ students });

    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  })
}
