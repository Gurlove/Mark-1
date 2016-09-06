
	var fs = require('fs')
	var path = require('path')

	var file = __dirname + '/data/data.json'

	var file_content = fs.readFileSync(file)
	var content = JSON.parse(file_content)

	var obj = {name: 'JP'}

	fs.appendFile(file, JSON.stringify(obj), function (err) {
	  console.error(err)
	})


