const gottaLight = [
	"                                                   111  111           111                 11111  ",
	"                      111     111                  111  111           111        111     1111111 ",
	"                      111     111                  111  111           111        111    111111111",
	"  111 111   111111    111     111      111111      111        111 111 111 111    111    111  1111",
	" 11111111  11111111  1111111 1111111  11111111     111  111  11111111 11111111  1111111  1    111",
	"1111 1111 1111  1111 1111111 1111111 111   1111    111  111 1111 1111 11111111  1111111       111",
	"111   111 111    111 1111111 1111111        111    111  111 111   111 111111111 1111111     1111 ",
	"111   111 111    111  111     111       1111111    111  111 111   111 111   111  111       1111  ",
	"111   111 111    111  111     111     111111111    111  111 111   111 111   111  111      1111   ",
	"1111 1111 111    111  111     111    1111   111    111  111 1111 1111 111   111  111      111    ",
	"111111111 111    111  111     111    111    111    111  111 111111111 111   111  111             ",
	" 1111 111 1111  1111  111  11 111  111111  1111    111  111  1111 111 111   111  111  11  1111   ",
	"      111  11111111   1111111 1111111 111111111    111  111       111 111   111  1111111  1111   ",
	" 11   111   111111     11111   11111   1111 111    111  111  11   111 111   111   11111   1111   ",
	" 11111111                                                    11111111                            ",
	"  111111                                                      111111                             "
];

const initialState$1 = {
	behaviour: true,
	canvas: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	light: {
		coord: [
			Math.round(window.innerWidth / 3),
			Math.round(window.innerHeight / 3)
		],
		reach: 5
	},
	phrase: {
		gap: 9,
		source: processPhraseData(gottaLight)
	},
	ray: {
		aperture: 12,
		reach: 80
	}
};

const TOGGLE_BEHAVIOUR = "TOGGLE_BEHAVIOUR";

const behaviour = (state = initialState$1.behaviour, action) => {
	switch (action.type) {
		case TOGGLE_BEHAVIOUR:
			return !state;

		default:
			return state;
	}
};

const UPDATE_LIGHT_COORD = "UPDATE_LIGHT_COORD";
const UPDATE_LIGHT_REACH = "UPDATE_LIGHT_REACH";

const light = (state = initialState$1.light, action) => {
	switch (action.type) {
		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};

const app = Redux.combineReducers({
	behaviour,
	light
});

const store = Redux.createStore(app, initialState);

console.log(store);
