1. APIS
   1. Create Job API
   2. List Job
   3. Edit Job
   4. Delete Job
   5. Apply job API
2. Connecting Mongo with Node
3. Deployment of Backend

Collections => jobs



{
  "title": "Software Engineer",
  "description": "Join our dynamic team and contribute to cutting-edge software development projects.",
  "company": "Tech Innovations Inc.",
  "location": "Cityville, USA",
  "salary": 80000
}


{
    title: {
        type: String
    },
    description: {
        type: String,
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: Number
    }
}

// Schema

