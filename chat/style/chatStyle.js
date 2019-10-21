import * as Colors from '../../base/constant/Colors';

export default chatStyle = {
	messageContainer: {
		flex: 1,
		flexDirection: "row"
	},
	avatar: {
		alignSelf: "flex-end",
		marginBottom: 10
	},
	bubbleWrapper: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: 'white'
	},
	bubbleContainerLeft: {
		flex:1, 
		flexDirection: "row"
	},
	bubbleContainerRight: {
		flex:1, 
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	bubbleLeftChevron: {
		width:0,
		height:0,
		borderStyle: "solid",
		overflow: "hidden",
		borderTopWidth: 0,
		borderBottomWidth: 10,
		borderRightWidth: 0,
		borderLeftWidth: 10,
		borderTopColor: "transparent",
		borderBottomColor: Colors.LIGHT_GREY,
		borderRightColor: "transparent",
		borderLeftColor: "transparent",
		alignSelf: "flex-end",
		marginBottom: 15
	},
	bubbleLeft: {
		backgroundColor: Colors.LIGHT_GREY,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginBottom: 15,
		marginRight: 30
	},
	bubbleLeftStart: {
		backgroundColor: Colors.LIGHT_GREY,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginLeft: 45,
		marginRight: 30
	},
	bubbleLeftEnd: {
		backgroundColor: Colors.LIGHT_GREY,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginBottom: 15,
		marginRight: 30
	},
	bubbleLeftMiddle: {
		backgroundColor: Colors.LIGHT_GREY,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginLeft: 45,
		marginRight: 30
	},
	bubbleRightChevron: {
		width:0,
		height:0,
		borderStyle: "solid",
		overflow: "hidden",
		borderTopWidth: 0,
		borderBottomWidth: 10,
		borderRightWidth: 10,
		borderLeftWidth: 0,
		borderTopColor: "transparent",
		borderBottomColor: Colors.ORANGE,
		borderRightColor: "transparent",
		borderLeftColor: "transparent",
		alignSelf: "flex-end",
		marginBottom: 15
	},
	bubbleRight: {
		backgroundColor: Colors.ORANGE,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginBottom: 15,
		marginLeft: 30
	},
	bubbleRightStart: {
		backgroundColor: Colors.ORANGE,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginLeft: 30,
		marginRight: 10
	},
	bubbleRightEnd: {
		backgroundColor: Colors.ORANGE,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginBottom: 15,
		marginLeft: 30
	},
	bubbleRightMiddle: {
		backgroundColor: Colors.ORANGE,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginTop: 5,
		marginLeft: 30,
		marginRight: 10
	},
	dateLeft: {
		fontSize: 14,
		color: Colors.GREY,
		marginRight: 15,
		alignSelf: "flex-end"
	},
	dateRight: {
		fontSize: 14,
		color: Colors.GREY,
		marginLeft: 15
	},
	fillInView: {
		backgroundColor: 'white',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		alignSelf:'stretch',
		borderBottomColor: 'yellow',
		borderBottomWidth: 1
	},
	nameWithAvatar: {
		marginLeft: 10,
		color: Colors.DARK_GREY
	},
	nameWithoutAvatar: {
		marginLeft: 55,
		color: Colors.DARK_GREY
	}
}