
//calling the getUsers function when the document is ready
document.addEventListener('DOMContentLoaded', getUsers, false)


//the meat and potato of the app 
//the potato and hummus (in case you're vegan)
function getUsers() {
    
                //API link
                const apiLink = '/api/users'

                //time to fetch some data :D
                fetch(apiLink)
                .then((response) => response.json())
                .then((data) => {
                    //define the table (table head and table body start)
                    let myTable = `
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                    `

                    //loop through the data
                    data.map((user) => {
                        myTable += `
                                    <tr>
                                        <td><span class="title">Name:</span> ${user.name}</td>
                                        <td><span class="title">Username:</span> ${user.username}</td>
                                        <td><span class="title">Email:</span> ${user.email}</td>
                                        <td><span class="title">Phone:</span> ${user.phone}</td>
                                        <td><span class="title">Company:</span> ${user.company.name}</td>
                                    </tr>
                        `
                    });

                    //close the table (table body end && table itself)
                    myTable += `
                            </tbody>
                        </table>
                    `
    
                    //outPUT the data to the DOM
                    document.getElementById('app').innerHTML = myTable                
                })
                
            }