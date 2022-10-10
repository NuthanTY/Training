const studentsArray = [
    { name: 'Suraj', year: 2019, ranking: 4 },
    { name: 'Amit', year: 2019, ranking: 5 },
    { name: 'Akash', year: 2018, ranking: 4 },
    { name: 'Dinanath', year: 2019, ranking: 7 },
    { name: 'Sagar', year: 2017, ranking: 3 },
  ]

  function sort(array){
    let students =[];
    let sortedStudentsName =[];
    for(let student of array){
        
        if(student.year === 2019 && student.ranking > 4){
            students.push(student);
        }
    }
    let sortedStudents = students.sort((a,b) => a.name - b.name);

    for(let item of sortedStudents){
        sortedStudentsName.push(item.name)
    }

    return(sortedStudentsName);
  }
 
  console.log(sort(studentsArray));