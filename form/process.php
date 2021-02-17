<html>
<head>
<title>Users</title>
    <style>
        .photo{
            width:40px;
        }

    </style>

    </head>
<?php //opening tag
//photo styling above should be in styling sheet

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test4";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO users (first_name, last_name, email, job_title, dob, headline,story_type, story_text) VALUES ('".$_POST['firstname']."','".$_POST['lastname']."','".$_POST['emailaddress']."','".$_POST['jobtitle']."','".$_POST['date']."','".$_POST['headline']."','".$_POST['storytype']."','".$_POST['storytext']."')";

if (mysqli_query($conn,$sql)){
    echo "New record created successfully<br><p>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


//$sql = "SELECT id, first_name, last_name, email, job_title, dob, headline,story_type, story_text FROM users";
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result)>0){
    echo "<table>";
   // echo"<tr>"
    echo "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Amount</th><th>Date</th><th>Headline</th><th>Story Type</th><th>Story Text</th><th>Photo</th></tr>";
    //echo"</tr>"
    while($row = mysqli_fetch_assoc($result)){
        echo "<tr>";
        echo "<td>". $row["id"]."</td><td>". $row["first_name"]. "</td><td>". $row["last_name"]. "</td><td>". $row["email"]. "</td><td>". $row["amount"]. "</td><td>". $row["dob"]. "</td><td>". $row["headline"]. "</td><td>". $row["card_type"]. "</td><td>". $row["story_text"]. "</td><td><img class='photo' src='images/".$row["photo"]."'></td>";
        //echo "Email: " .$row["email"]. "<br>";
        //echo "Job Title: " .$row["job_title"]. "<br>";
        //echo "Date: " .$row["dob"]. "<br>";
        //echo "Headline: " .$row["headline"]. "<br>";
        //echo "Story Type: " .$row["story_type"]. "<br>";
        //echo "Story Text: " .$row["story_text"]. "<br>"."<p>";
        echo"</tr>";
    }
    echo "</table>";
} else{
    echo "0 results";
}
mysqli_close($conn);
echo "<br>";



//echo "First Name: ";
//echo $_POST['firstname'];
//echo "<br>";

//echo "Last Name: ";
//echo $_POST['lastname'];
//echo "<br>";


//echo $_POST['emailaddress'];
//echo "<br>";

//echo "Job: ";
//echo $_POST['jobtitle'];
//echo "<br>";

//echo "DOB: ";
//echo $_POST['date'];
//echo "<br>";

//echo "Headline: ";
//echo $_POST['headline'];
//echo "<br>";

//echo "Story Type: ";
//echo $_POST['storytype'];
//echo "<br>";

//echo "Story: ";
//echo $_POST['storytext'];

?> 
</html>
