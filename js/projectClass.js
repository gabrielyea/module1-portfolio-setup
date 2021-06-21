// class Project {
//   name;

//   description;

//   projectImage;

//   technologies;

//   liveLink;

//   sourceLink;

//   constructor(
//     name,
//     description,
//     projectImage,
//     technologies,
//     liveLink,
//     sourceLink,
//   ) {
//     this.name = name;
//     this.description = description;
//     this.projectImage = projectImage;
//     this.technologies = technologies;
//     this.liveLink = liveLink;
//     this.sourceLink = sourceLink;
//   }
// }

// const path = '/home/gabriel/Microverse - Module 1/module1-portfolio-setup/js/projectsData.json';
// const fs = require('fs');

// const storeData = (data, path) => {
//   try {
//     fs.writeFileSync(path, JSON.stringify(data, null, ' '));
//   } catch (err) {
//     // console.error(err);
//   }
// };

// const loadData = (path) => {
//   try {
//     return fs.readFileSync(path, 'utf8');
//   } catch (err) {
//     // console.error(err);
//     return false;
//   }
// };

// const test = JSON.parse(loadData(path));
// console.log(test);

// function projectFromJson(json) {
//   const pro = new Project(json.name, json.description, json.projectImage,
//     json.technologies, json.liveLink, json.sourceLink);
//   return pro;
// }

// const o = JSON.parse(loadData(path));

// console.log(projectFromJson(o));
// console.log(p1);
