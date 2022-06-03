import { StyleSheet, FlatList, View } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
const [fitnessGoals, setFitnessGoals] = useState([]);



const addGoalHandler = goalTitle => {
  setFitnessGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
};

const removeGoalHandler = goalId => {
  setFitnessGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId);
  });
}

  return (
      <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler} />
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
