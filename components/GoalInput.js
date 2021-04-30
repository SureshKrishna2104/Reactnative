import React, {useState} from 'react';
import {View, Text} from 'react-native';
export const GoalInput = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const addGoals = (goal) => {
    setEnteredGoal(goal);
  };
  return (
    <View>
      <View style={styles.screen}>
        <TextInput
          style={{
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }}
          onChangeText={addGoals}
          value={enteredGoal}
        />
        <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});
