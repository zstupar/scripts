#! /usr/bin/env node
"use strict";

const login = require("facebook-chat-api");
const request = require("request");

login({email: "email", password: "pass"}, function callback(err, api) {
	if(err) console.error(err);

	var listen = api.listen(function callback(err, message) {
		if(err) return console.error(err);
		let msg = message.body.toLowerCase();

		if(msg) {
			api.sendMessage("message that I want to send", message.threadID);
		}
	});
});
