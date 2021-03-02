const { DH_CHECK_P_NOT_PRIME } = require('constants');

console.log('run');

($(document).ready(function() {
  const jobs = $('div[data-job-id]');
  console.table(jobs);
}));

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged
})