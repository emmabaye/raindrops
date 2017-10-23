const assert = require('chai').assert;
const raindrops = require('../main.js');

describe("Convert number to string", function() {
	describe("Handle valid input", function(){
		it("Should return Plong for input 28", function() {
			assert.equal(raindrops(28), "Plong");
		});
	})

	describe("Handle valid input", function(){
		it("Should return PlingPlang for input 1755", function() {
			assert.equal(raindrops(1755), "PlingPlang");
		});
	})

	describe("Handle valid input", function(){
		it("Should return 34 for input 34", function() {
			assert.equal(raindrops(34), "34");
		});
	})

	describe("Handle valid input", function(){
		it("Should return Plang for input 25", function() {
			assert.equal(raindrops(25), "Plang");
		});
	})

	describe("Handle valid input", function(){
		it("Should return PlingPlong for input 84", function() {
			assert.equal(raindrops(84), "PlingPlong");
		});
	})

	describe("Handle valid input", function(){
		it("Should return PlingPlong for input 42", function() {
			assert.equal(raindrops(42), "PlingPlong");
		});
	})

	describe("Handle valid input", function(){
		it("Should return 23 for input 23", function() {
			assert.equal(raindrops(23), "23");
		});
	})

	describe("Handle valid input", function(){
		it("Should return Plong for input 14", function() {
			assert.equal(raindrops(14), "Plong");
		});
	})

	describe("Handle valid input", function(){
		it("Should return Pling for input 18", function() {
			assert.equal(raindrops(18), "Pling");
		});
	})

	describe("Handle valid input", function(){
		it("Should return PlingPlang for input 15", function() {
			assert.equal(raindrops(15), "PlingPlang");
		});
	})
})