<?php
session_start();
if(isset($_POST["captcha"])&&$_POST["captcha"]!=""&&$_SESSION["code"]==$_POST["captcha"])
{
/* Set oracle user login and password info */ 
$dbuser = "tmanawad"; 
$dbpass = "Gotukola@8914";  
$db = "SSID";
$connect = OCILogon($dbuser, $dbpass, $db);

if (!$connect)  { echo "An error occurred connecting to the database"; exit; } 

/* Build SQL statement using form data */ 
$query = "SELECT * FROM Login where USERNAME= :u1 and PASSWORD= :p1";
   
/* check the SQL statement for errors and if errors report them */ 
$stmt = OCIParse($connect, $query); 

if(!$stmt) {
    echo "An error occurred in parsing the SQL string.\n"; 
    exit; 
} 
OCIBindByName($stmt,':u1',$userName);
OCIBindByName($stmt,':p1',$password);
OCIExecute($stmt); 
if(OCIFetch($stmt)){
    $fg1 = OCIResult($stmt,"PRIVILAGE"); 
    setcookie('username',$userName,time()+3600);
    setcookie('password',$password,time()+3600);
    setcookie('privilege',$fg1,time()+3600);

?>

<html>
       <head>
         <title>Assignment 2 Home</title>
         <link rel="stylesheet" type="text/css" href="CSS/style.css">
       </head>
     
    <body>
     
         <div class="center">
           <header>SIT780 - Enterprise Applications Development</header>
         </div>  
           <div class="page-wrap">
               <article role="main">
                   <div class="sub_catergories">
                       <div class="application">
                       <table class="interface_table">
                        <tr class="interface_table">
                            <td class="interface_table">
                                <h1>Welcome <? echo($userName)?></h1>
                                <h2>You are now logged in</br> under <?echo  $fg1?> privilege.</h2></br>
                                <a class="lnk-menu" href=index.html>LOGOUT</a></br></br>
                                <div class="btn-group-vertical" role="group" aria-label="...">
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayStudents.php>Display Student Data</a>");?></button>
                                    </div>
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayEnvironmental.php>View Environmental Data</a>");?></button>
                                    </div> 
                                    <?if($fg1 == administrator)echo("<div class=btn-group role=group><button type=button class=btn btn-default><a class=lnk-menu href=addStudents.php>Add Students</a></button></div>");?>
                                </div>
                                </br></br>
                                <div class="search">
                                <table>
                                    <form name="search" action="search.php">
                                    <tr><span>First Name</span></br><input type="text" name="searchFN"></tr></br>
                                    <tr><span>Last Name</span></br><input type="text" name="searchLN"></tr></br></br>
                                    <input class="mediumButton" type="submit" value="Search">
                                    </form>
                                </table>
                                </div>
                                
                            </td>
                            <td class="interface_table">
                               <table>
                                   <tr>
                                       <th>Student ID</th>
                                       <th>First Name</th>
                                       <th>Last anme</th>
                                       <th>Address</th>
                                    </tr>
                                    <?
                                        $xml = simplexml_load_file("students.xml");
                                        foreach($xml->children() as $staffs => $data){
                                            $student_id=$data->student_id;
                                            $email=$data->student_id['email'];
                                            $fname=$data->firstname;
                                            $lname=$data->lastname;
	                                        $address=$data->address;
                                    ?>
                                    <tr>
                                        <td><?echo "$student_id (<a href='$email'>$email</a>)"?></td>
                                        <td><?echo $fname?></td>
                                        <td><?echo $lname?></td>
                                        <td><?echo "<a href='googleMapView.php?address=$address' title='Google Map View'>$address</a>"?></td>
                                    </tr>
                                        <?} ?>
                               </table>
                            </td>
                        </tr>
                        </table>
                       </div>
                    </div>
                </article>
            </div>
            <div class="center">
                <footer>Tharini Hasara Manawadu De Silva SID: 217336638 <br> Copyright &copy 2018 All Right Reserved.</footer>
            </div>
    </body>
</html>


<?php
}else{
    echo("<h2>Invalid user</h2>");
    echo("<br/><a href=index.html>Login</a>");
}
 

}
else{
    echo "wrong captcha";
    echo("</br><a href=index.html>Login Again</a>");
}

?>