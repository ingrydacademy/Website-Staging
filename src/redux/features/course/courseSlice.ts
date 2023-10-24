import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Course = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export type InitialState = {
  selectedCourse: Course;
  courses: Course[];
};

const initialState: InitialState = {
  selectedCourse: {} as Course,
  courses: [
    {
      id: 1,
      img: "/assets/ch-1.png",
      title: "Cybersecurity",
      description:
        "This 12-week Cybersecurity Course provides comprehensive training in protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction...",
    },
    {
      id: 2,
      img: "/assets/ch-2.png",
      title: "Linux",
      description:
        "Discover the power of Linux, the most popular operating system used in servers, supercomputers, and embedded devices. Learn how to install and configure Linux distributions, manage files and permissions...",
    },
    {
      id: 3,
      img: "/assets/ch-3.png",
      title: "Java",
      description:
        "In this intensive Java programming course, you&apos;ll learn the fundamentals of object-oriented programming and master the Java syntax. From variables and loops to classes and objects, you&apos;ll gain a deep understanding of the Java...",
    },
    {
      id: 4,
      img: "/assets/crs_DatSci.png",
      title: "Python for Data Science ",
      description:
        "In this comprehensive Python programming course, you&apos;ll dive into the world of object-oriented programming and become proficient in the Python syntax. Starting with the basics, you&apos;ll learn about variables, data types...",
    },
    {
      id: 5,
      img: "/assets/crs_React.png",
      title: "ReactJS",
      description:
        "Get ready to take your web development skills to the next level with our comprehensive React course! Dive into the world of component-based architecture and learn how to build fast, scalable, and maintainable applications with React...",
    },
    {
      id: 6,
      img: "/assets/crs_Product.png",
      title: " Product Management ",
      description:
        "In this immersive product management course, you&apos;ll embark on a journey to master the art of managing products from ideation to launch. Starting with the foundational principles of product development...",
    },
    {
      id: 7,
      img: "/assets/crs_IT.png",
      title: "IT Solution Sales ",
      description:
        "Transform your sales game and close more deals with our elite IT solution sales training course! Designed for ambitious sales professionals like you, this comprehensive program covers everything from the fundamentals of IT...",
    },
  ],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    selectCourse: (state, action: PayloadAction<number>) => {
      const course = state.courses.find(
        (course) => course.id === action.payload
      );
      state.selectedCourse = course!;
    },
  },
});

export const { selectCourse } = courseSlice.actions;

export default courseSlice.reducer;
