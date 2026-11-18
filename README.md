# IT313 Course Catalog – Styling & Layout in React Native

## Project Description

This project is a mobile course catalog application
developed using React Native and Expo for Laboratory 7
of IT313 – Mobile Programming.

The application displays the courses offered during
the semester through responsive course cards.

Each card displays:

- Course code
- Course title
- Course schedule
- Number of units
- Class type

## Component Structure

### CourseCard

CourseCard is responsible for displaying an individual
course. It uses React Native Flexbox to arrange the
course badge beside the course information.

It also includes tag chips, responsive width, and
platform-specific shadows.

### CourseCatalog

CourseCatalog is the parent component. It stores the
course information using useState and displays each
course through a ScrollView.

It uses the map() method and course IDs as stable keys
to render the course cards.

## Styling and Layout

- StyleSheet.create organizes the component styles.
- Flexbox arranges the card contents.
- flex: 1 allows the text block to occupy the remaining space.
- flexWrap allows the tag chips to wrap.
- useWindowDimensions adjusts the card width.
- Platform.select applies different shadow styles
  for iOS and Android.

## Installation and Running the Application

1. Install Node.js.
2. Install the project dependencies:

   npm install

3. Start the Expo development server:

   npx expo start

4. Scan the QR code using Expo Go or open the
   application in an available emulator.

## Technologies Used

- React Native
- Expo
- TypeScript
- JavaScript
- Flexbox
- Git and GitHub

Name: Gabriela Shaine D. Montanez
Section- IT3R2
