import * as program from 'commander'

var packageJSON = require('./package.json')
var version = packageJSON.version as string
var host: string = "localhost:9080"

program
    .version(version)
    .command('use', 'sets and caches a realm object server endpoint. If the port is not included then port 9080 is used')
    .action()
    .option('-h, --host <hostnamewithport>', 'target a realm object server endpoint for this command', 'localhost:9080')
    .option('-s, --service <servicename>', 'specifies a service name', /^(auth|func|realrest|all)$/i, 'all')
    .parse(process.argv)


program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ custom-help --help');
  console.log('    $ custom-help -h');
  console.log('');
});

program.parse(process.argv)