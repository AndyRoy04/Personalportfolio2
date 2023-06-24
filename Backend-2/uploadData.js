// Select the database to use.
use('portfolioDB');

// Insert a few documents into the PortfolioData collection.
db.getCollection('portfolios').insertMany(
    [
        {
            image : 'https://copyassignment.com/wp-content/uploads/2022/09/Library-Management-System-Project-in-Java.jpg',
            title:'Project 1',
            github: 'https://github.com/AndyRoy04',
            demo: '#'      
        },
        {
            image : 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
            title:'Project 2',
            github: 'https://github.com/AndyRoy04',
            demo: '#'      
        },
        {
            image : 'https://miro.medium.com/v2/resize:fit:1400/1*AMa43vvUwPFtGg4uIpl3jw.png',
            title:'Project 3',
            github: 'https://github.com/AndyRoy04',
            demo: '#',      
        }
    ]
);

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'Jane Brown',
//           review: "Anderson Roy is a talented software engineer with a strong work ethic. He is always eager to learn new technologies and is not afraid to take on new challenges. -  Senior Software Engineer"
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//           name: 'Noel Johnson',
//           review: "Anderson Roy is a talented software engineer with a strong work ethic. He is always eager to learn new technologies and is not afraid to take on new challenges. -  Senior Software Engineer"
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: 'Stephane Brown',
//           review: "During his internship, Anderson Roy demonstrated excellent technical skills and a strong work ethic. He was a quick learner and was able to complete tasks efficiently. Anderson Roy was a valuable member of our team and we would highly recommend him for any future opportunities."
//         },
      
      
//       ]
// );
