import Parse from 'parse';

const PARSE_APPLICATION_ID = 'E429rfmYXY8ZBncyLwgH7itJj73WtCQa9qrns2ro';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'jR31nNcK4ZBFGc7fjCbOwk7RJWGxc5iL8y2UwBKY';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
