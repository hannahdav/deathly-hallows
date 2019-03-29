import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	header: {
		height: 40,
		backgroundColor:  '#1f0318', //#110609,
		color: 'white'
	},
	containerWelcome: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor:  '#1f0318', //#110609
	},
	containerSwipe: {
		flex: 1,
		backgroundColor:  '#1f0318', //#110609
	},
	logo: {
		fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'Serif',
		fontWeight: '900',
		fontSize: 38,
		letterSpacing: -2.8,
		lineHeight: 85,
		textAlign: 'center',	
		color:  '#d3bc67',  //'#374a67', //'#404e5c',
		textShadowColor: 'rgba(255, 255, 255, 0.9)',
		textShadowOffset: { width: 1.3, height: 0.5 },
		textShadowRadius: 30,
	},
	tree: {
		width: '100%', 
		height: '100%', 
		opacity: 0.75,
		marginTop: 90,
	},
	formItem: { 
		borderWidth: 1,
		borderColor: '#dddddd',
		backgroundColor: '#f2f2f2',
		margin: 5,
		paddingHorizontal: 8,
		fontSize: 10,
		alignSelf: 'center'
	},
	formInputPicker: { 
		borderWidth: 1,
		borderColor: '#dddddd',
		backgroundColor: '#f2f2f2',
		width: undefined,
		marginVertical: 8,
		paddingHorizontal: 8,
		paddingVertical: 2,
		alignSelf: 'center',
		width: '97%'
	},
	formInputTextArea: { 
		borderWidth: 1,
		borderColor: '#dddddd',
		borderRadius: 25,
		backgroundColor: '#f2f2f2',
		paddingHorizontal: 12,
		paddingVertical: 20,
		width: '98%',
		alignSelf: 'center',
	},
		saveButton: {
		padding: 10,
		margin: 20,
		alignSelf: 'center',
		backgroundColor: '#29274c',
		shadowOffset: { width: 3, height: 3 },
		color: 'white',
		shadowOpacity: 0.4
	},
	buttonContainer: { 
		flexDirection: "row", 
		flex: 1, 
		position: "absolute", 
		bottom: 50, 
		left: 0, 
		right: 0, 
		justifyContent: 'space-between', 
		padding: 15
	},
	depulso: {
		backgroundColor: '#563635', 
		shadowOffset: { width: 3, height: 3 },
		color: 'white',
		shadowOpacity: 0.4
	},
	depulsoText: {
		fontWeight: '600', 
		paddingLeft: -10
	},
	accio: {
		backgroundColor: '#374a67',
		shadowOffset: { width: 3, height: 3 },
		color: 'white',
		shadowOpacity: 0.4
	},
	accioText: {
		fontWeight: '600', 
		paddingRight: -10
	},
	buttonIcon: {
		color: 'white',
		fontSize: 25,
		paddingHorizontal: 15
	},
	deck: {
		flex: 1,
	},
	matchCard: {
		top: 10,
		maxHeight: 700,
		overflow: 'scroll',
	},
	cardImg: { 
		flex: 1,
		height: 300,
		width: 300,   
		borderColor: '#f4f2eb',
		borderWidth: 7,
		borderRadius: 2
	},
	matchImgContainer: {
		alignItems: 'center', 
		shadowOffset: {width: 2, height: 2}, 
		shadowOpacity: 0.25, 
		shadowRadius: 5 
	},
	matchName: { 
		textTransform: 'capitalize', 
		fontSize: 16, 
		fontWeight: '600', 
		color: '#62929e' 
	},
	houseLogo: { 
		width: 50, 
		height: 50, 
		opacity: 0.78 
	},
	houseDesc: { 
		textTransform: 'capitalize', 
		fontSize: 16 
	},
	loadingText: { 
		top: '30%', 
		fontSize: 30, 
		lineHeight: 45, 
		flexWrap: 'wrap', 
	}
});
export default styles;