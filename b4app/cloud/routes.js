// Can't figure out how to use this with the static folders - enabling 
// this servers index for all css/js
// app.get('*', function (req, res) {
//   res.render('index');
// });

app.get('/seasons', function (req, res) {
  res.render('index');
})

app.get('/callback', function (req, res) {
  res.render('index');
})

app.get('/members', function (req, res) {
  res.render('index');
})

app.get('/attendance', function (req, res) {
  res.render('index');
})

app.get('/users', function (req, res) {
  res.render('index');
})
