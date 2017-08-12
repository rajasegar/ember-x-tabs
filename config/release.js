/* jshint node:true */
var execSync = require('child_process').execSync;

// For details on each option run `ember help release`
module.exports = {
  publish: true,
  afterPublish: function(project, versions) {
    // Publish dummy app with docs to gh-pages
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  }
};

function runCommand(command) {
  console.log('running: ' + command); // eslint-disable-line
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output); // eslint-disable-line
}
