import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../components/Header';
import { HabitDay, daySize } from '../components/HabitDay';

export function Home() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, weekDayIndex) => (
          <Text
            key={`${weekDayIndex} - ${weekDay}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: daySize }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <HabitDay />
    </View>
  );
}
