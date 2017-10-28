const assert = require('chai').assert;
const raindrops = require('../main.js');

describe("Convert number to string", () => {
	describe("Handle valid input", () => {
		it("Should return Plong for input 28", () => {
			assert.equal(raindrops(28), "Plong");
		});
	})

	describe("Handle valid input", () => {
		it("Should return PlingPlang for input 1755", () => {
			assert.equal(raindrops(1755), "PlingPlang");
		});
	})

	describe("Handle valid input", () => {
		it("Should return 34 for input 34", () => {
			assert.equal(raindrops(34), "34");
		});
	})

	describe("Handle valid input", () => {
		it("Should return Plang for input 25", () => {
			assert.equal(raindrops(25), "Plang");
		});
	})

	describe("Handle valid input", () => {
		it("Should return PlingPlong for input 84", () => {
			assert.equal(raindrops(84), "PlingPlong");
		});
	})

	describe("Handle valid input", () => {
		it("Should return PlingPlong for input 42", () => {
			assert.equal(raindrops(42), "PlingPlong");
		});
	})

	describe("Handle valid input", () => {
		it("Should return 23 for input 23", () => {
			assert.equal(raindrops(23), "23");
		});
	})

	describe("Handle valid input", () => {
		it("Should return Plong for input 14", () => {
			assert.equal(raindrops(14), "Plong");
		});
	})

	describe("Handle valid input", () => {
		it("Should return Pling for input 18", () => {
			assert.equal(raindrops(18), "Pling");
		});
	})

	describe("Handle valid input", () => {
		it("Should return PlingPlang for input 15", () => {
			assert.equal(raindrops(15), "PlingPlang");
		});
	})
})
