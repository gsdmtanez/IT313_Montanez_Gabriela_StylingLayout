import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import CourseCard from "../components/CourseCard";

type Course = {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
};

export default function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      code: "IT313",
      title: "Mobile Programming",
      units: 3,
      schedule: "MWF 8:00-9:00 AM",
    },
    {
      id: "c2",
      code: "IT311",
      title: "Systems Integration",
      units: 3,
      schedule: "TTh 9:30-11:00 AM",
    },
    {
      id: "c3",
      code: "IT321",
      title: "Information Assurance",
      units: 3,
      schedule: "MWF 1:00–2:00 PM",
    },
    {
      id: "c4",
      code: "IT331",
      title: "Web Systems & Technologies",
      units: 3,
      schedule: "TTh 1:00–2:30 PM",
    },
    {
      id: "c5",
      code: "IT341",
      title: "Human-Computer Interaction",
      units: 3,
      schedule: "MWF 3:00–4:00 PM",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>IT313 Course Catalog</Text>

        <Text style={styles.headerSubtitle}>
          {courses.length} courses this semester
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            schedule={course.schedule}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  header: {
    backgroundColor: "#191650",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#C6C3DF",
    fontSize: 14,
    marginTop: 5,
  },

  list: {
    paddingTop: 18,
    paddingBottom: 25,
  },
});
