<?php
  if (isset($_COOKIE['username']))
  {
    $Username= $_COOKIE['username'];
    $privilege= $_COOKIE['privilege'];

	$xml = simplexml_load_file("students.xml");
	$val=flase;
	foreach($xml->children() as $student => $data){
      $f_name=$data->firstname;
      $l_name=$data->lastnname;
			if(!strcasecmp($f_name,$searchFN) || !strcasecmp($l_name,$searchLN)){
				$v1=true;
	  	    }
   }
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
                                <h1>Welcome <? echo($username)?></h1>
                                <h2>You are now logged in</br> under <?echo  $privilege?> privilege.</h2></br>
                                <a class="lnk-menu" href=index.html>LOGOUT</a></br></br>
                                <div class="btn-group-vertical" role="group" aria-label="...">
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayStudents.php>Display Student Data</a>");?></button>
                                    </div>
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayEnvironmental.php>View Environmental Data</a>");?></button>
                                    </div> 
                                    <?if($privilege == administrator)echo("<div class=btn-group role=group><button type=button class=btn btn-default><a class=lnk-menu href=addStudents.php>Add Students</a></button></div>");?>
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
                                <?if($v1==false){
	                                echo "<h2>No records Found</h2>";
		                            echo "<button onclick='search.php'>Search Again</button>";
		                        }
	                        else
                             {?>
                               <table>
                                   <tr>
                                       <th>Student ID</th>
                                       <th>First Name</th>
                                       <th>Last anme</th>
                                       <th>Address</th>
                                    </tr>
                                <?
	                            foreach($xml->children() as $students => $data){
  	                                $s_id=$data->student_id;
  	                                $email=$data->student_id['email'];
  	                                $f_name=$data->firstname;
  	                                $l_name=$data->lastname;
  	                                $address=$data->address;
		                            if(!strcasecmp($f_name,$searchFN) || !strcasecmp($l_name,$searchLN))
		                            {
                                ?>
                            <tr>
                                <td><?echo "$student_id (<a href='$email'>$email</a>)"?></td>
                                <td><?echo $f_name?></td>
                                <td><?echo $l_name?></td>
                                <td><?echo "<a href='googleMapView.php?address=$address' title='Google Map View'>$address</a>"?></td>
                            </tr>
                            <?} }}?>
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
<? } else echo "invalid"; ?>
