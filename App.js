import { StyleSheet, FlatList, View, Button } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
const [fitnessGoals, setFitnessGoals] = useState([]);
const [isAddMode, setIsAddMode] = useState(false);



const addGoalHandler = goalTitle => {
  setFitnessGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
  setIsAddMode(false);
};

const removeGoalHandler = goalId => {
  setFitnessGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId);
  });
}

  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
        <FlatList
          data={fitnessGoals}
          renderItem={
          itemData =>
          <GoalItem id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value} />
        }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
