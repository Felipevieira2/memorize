import * as React from 'react';
import { StyleSheet, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;
type GameScreenRouteProp = RouteProp<RootStackParamList, 'Game'>;

type Props = {
	route: GameScreenRouteProp;
	navigation: ProfileScreenNavigationProp;
	arrCards: Array<{text: number, visible: Boolean}>[];
	tmpArrCards: Array<any>[];
};

function GameScreen({route, navigation}: Props) {	
	const [numColumns, setNumColumns]  = React.useState(route.params.numbersColumns);
	const [numbersRows, setNumbersRows]  = React.useState(route.params.numbersRows);

	const [arrCards, setArrCards] = React.useState([]);	

	React.useEffect(()=>{
		setNumColumns(route.params.numbersColumns);
		setNumbersRows(route.params.numbersRows);
		
		let totalCards = (Number(numColumns) * Number(numbersRows) /  2 );
		
		let tmpArrCards = [];

		for (let index = 1; index <= totalCards; index++) {
			let random_key = Math.floor((Math.random() * 99999) + 1);
			let random_key2 = Math.floor((Math.random() * 99999) + 1);

			tmpArrCards.push({text: index, key: random_key, visible: true});
			tmpArrCards.push({text: index, key: random_key2, visible: true});	
		}

		tmpArrCards = tmpArrCards.sort( (a,b) => { return  a.key-b.key } );

		setArrCards(tmpArrCards);
		//setAllCardNotVisible();

	},[])

	const Item = ({item} : any, ) => {		


		return (			
			<TouchableHighlight style={styles.item}
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				onPress={() => { disable = !item.visible }}>
				<Text style={styles.boxText}> 
					{disable && item.text}
				</Text>
			</TouchableHighlight>			
		)
	}
	

	const setAllCardNotVisible = () => {
		let tmp: any[] = [];

		arrCards.forEach( (el, index) => {
			tmp.push({text: el.text, visible: false, key: el.key })
		})

		setArrCards(tmp);
		
	}

	// const selectCard = (item) => {
	// 	setArrCards( arrCards )
	// 	console.log(test)
	// }

	return (
		<View style={styles.container}>
			<View style={{flexDirection: 'row',}}>
				<FlatList
					renderItem={Item}
					data={arrCards}
					keyExtractor={(item, index) =>  '_'+index}
					numColumns={numColumns}		
				/>		
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	item: {
		backgroundColor: '#4D243D',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		margin: 1,
		height: Dimensions.get('window').width / 3, // approximate a square
	},
	box: {
		height: 100,
		margin: 2,
		backgroundColor: "#C4C4C4",
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	boxText: {
		fontSize: 24,
		color: 'white'
	}
});


export default GameScreen;