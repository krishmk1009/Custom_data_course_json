const data = [
    {
        "id": 1,
        "name": "Introduction to React Native",
        "instructor": "John Doe",
        "description": "Learn the basics of React Native development and build your first mobile app.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React Native",
            "content": "Overview of React Native, setting up your development environment."
          },
          {
            "week": 2,
            "topic": "Building Your First App",
            "content": "Creating a simple mobile app using React Native components."
          }
        ],
        "students": [
          {
            "id": 101,
            "name": "Alice Johnson",
            "email": "alice@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          }
        ]
      }

      ,{
        "id": 2,
        "name": "Advanced React Native Development",
        "instructor": "Jane Smith",
        "description": "Take your React Native skills to the next level with advanced topics and projects.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["Introduction to React Native", "Intermediate JavaScript knowledge"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Advanced Component Patterns",
            "content": "Exploring advanced React Native component patterns."
          },
          {
            "week": 2,
            "topic": "Building a Social App",
            "content": "Creating a social networking app using React Native."
          }
        ],
        "students": [
          {
            "id": 201,
            "name": "Charlie Brown",
            "email": "charlie@example.com"
          },
          {
            "id": 202,
            "name": "Diana Carter",
            "email": "diana@example.com"
          }
        ]
      }
,{
    "id": 3,
    "name": "Web Development Fundamentals",
    "instructor": "Lisa Anderson",
    "description": "Learn the fundamental concepts of web development and create your first website.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "6 weeks",
    "schedule": "Saturdays, 10:00 AM - 12:00 PM",
    "location": "Online",
    "prerequisites": ["No prior experience required"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to HTML",
        "content": "Learn the basics of HTML and create a simple webpage."
      },
      {
        "week": 2,
        "topic": "Styling with CSS",
        "content": "Apply styles to your web pages using CSS."
      }
    ],
    "students": []
  }
,

{
    "id": 4,
    "name": "JavaScript for Beginners",
    "instructor": "Mark Wilson",
    "description": "Get started with JavaScript programming and build interactive web applications.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "8 weeks",
    "schedule": "Thursdays, 7:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["No prior programming experience required"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to JavaScript",
        "content": "Understanding the basics of JavaScript."
      },
      {
        "week": 2,
        "topic": "DOM Manipulation",
        "content": "Working with the Document Object Model."
      }
    ],
    "students": []
  }
,{
    "id": 5,
    "name": "Machine Learning Fundamentals",
    "instructor": "Robert Lee",
    "description": "Learn the fundamentals of machine learning and AI with hands-on projects.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "12 weeks",
    "schedule": "Tuesdays and Fridays, 5:30 PM - 7:30 PM",
    "location": "Online",
    "prerequisites": ["Basic programming knowledge", "Mathematics background is a plus"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Machine Learning",
        "content": "Overview of machine learning concepts and algorithms."
      },
      {
        "week": 2,
        "topic": "Linear Regression",
        "content": "Understanding and implementing linear regression."
      }
    ],
    "students": [
      {
        "id": 301,
        "name": "Eleanor Davis",
        "email": "eleanor@example.com"
      },
      {
        "id": 302,
        "name": "Frank Johnson",
        "email": "frank@example.com"
      }
    ]
  }      
    ];

module.exports = data;
