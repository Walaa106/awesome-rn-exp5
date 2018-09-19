import React from "react";
import Home from "../index";
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<Home navigation={navigation} list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});