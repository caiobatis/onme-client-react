const express = require('express');
const path = require('path');
const app = express();

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});
app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+ process.pid}: listening on port ${PORT}`);
})