import variable from "./../variables/commonColor";

export default (variables = variable) => {
	const bodyTheme = {
		flex: 1,
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: variable.brandPrimary
	};

	return bodyTheme;
};
