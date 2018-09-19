import React from "react";
import Sidebar from "../index";
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<Sidebar navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});