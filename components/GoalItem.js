import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {

    return (
        <Pressable style = {({pressed} )=> pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}> 
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin:10, 
        paddingLeft:10,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        height:50,
        alignContent:"center"
      },
      pressedItem:{
        opacity: 0.5

      },
      goalText:{
        padding:18,
        color: "white",
        alignContent:"center"
      }
});