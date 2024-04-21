import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import  {StatusBar} from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHander(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},

    ]);
    endAddGoalHander();
  }

  function deleteGoalHander(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" 
        color="#a065ec" 
        onPress={startAddGoalHandler}
        />

        {modalIsVisible && <GoalInput onAddGoal= {addGoalHandler} 
        visible={modalIsVisible} 
        onCancel={endAddGoalHander}/>}

          <View style = {styles.goalsContainer}>
            <FlatList data={courseGoals} 
            renderItem={(itemData) => {
              return (<GoalItem 

                text={itemData.item.text}
                id = {itemData.item.id}
                onDeleteItem={deleteGoalHander}/>);
            }}
            keyExtractor={(item, index)=> {
              return (
                item.id
              )
            }}
            alwaysBounceVertical={false}
            />
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    flex:5,
    paddingTop: 100,
    paddingHorizontal:16,
    //backgroundColor:"#1e085a"
  },
  goalsContainer: {
    flex:3,
    padding:10
  },

});
