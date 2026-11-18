import {
    Platform,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from "react-native";

type CourseCardProps = {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
};

export default function CourseCard({
  id,
  code,
  title,
  units,
  schedule,
}: CourseCardProps) {
  const { width } = useWindowDimensions();

  const badgeColors: Record<string, string> = {
    IT313: "#191650",
    IT311: "#288C8D",
    IT321: "#D69B24",
    IT331: "#803C70",
    IT341: "#4B60A5",
  };

  return (
    <View style={[styles.card, { width: width * 0.92 }]}>
      <View style={styles.courseRow}>
        <View
          style={[
            styles.badge,
            { backgroundColor: badgeColors[code] || "#555555" },
          ]}
        >
          <Text style={styles.badgeText}>{code}</Text>
        </View>

        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.schedule}>{schedule}</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{units} units</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Lecture</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",

    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  courseRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  badge: {
    width: 62,
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  courseInfo: {
    flex: 1,
  },

  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
  },

  schedule: {
    fontSize: 13,
    color: "#777777",
    marginTop: 3,
  },

  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  },

  tag: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 12,
    color: "#555555",
  },
});
